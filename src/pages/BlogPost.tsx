import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";
import ProductRecommendation from "../components/ProductRecommendation";
import AffiliateLink from "../components/AffiliateLink";
import { formatDate } from "../lib/format";
import { getPostBySlug, getRelatedPosts } from "../lib/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="space-y-4">
        <SEO title="Post not found" description="This post could not be found." />
        <h1 className="text-3xl font-bold">Post not found</h1>
        <p className="text-muted">
          The post you are looking for does not exist or has been moved.
        </p>
        <Link to="/blog" className="link">
          Back to blog
        </Link>
      </div>
    );
  }

  const related = getRelatedPosts(post, 3);
  const ADS_ENABLED = false;

  const contentBlocks = parseContentBlocks(stripEditorialSections(post.content));

  return (
    <div className="space-y-12">
      <SEO
        title={post.title}
        description={post.description}
        canonicalPath={`/blog/${post.slug}`}
        type="article"
        image={post.coverImage}
      />

      <article className="mx-auto flex w-full max-w-[70ch] flex-col gap-10 pb-12 text-[1.05rem] leading-[1.75]">
        <header className="space-y-5">
          <Link to="/blog" className="link">
            ← Back to blog
          </Link>
          <h1 className="text-3xl font-bold text-text">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{formatDate(post.date)}</span>
            <Link
              to="/blog"
              className="chip"
            >
              {post.category}
            </Link>
            <span>{post.readingTime}</span>
          </div>
          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-72 w-full rounded-2xl object-cover"
              loading="lazy"
            />
          ) : null}
          <p className="text-lg leading-relaxed text-muted">
            {post.description}
          </p>
          {post.tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="tag"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          ) : null}
        </header>

        {ADS_ENABLED ? (
          <div className="rounded-2xl border-2 border-dashed border-border bg-surface px-6 py-10 text-center text-sm text-muted">
            Ad slot (top of article). AdSense code goes here.
          </div>
        ) : null}

        <div className="space-y-10">
          {contentBlocks.map((block, index) =>
            block.type === "product" ? (
              <ProductRecommendation key={`product-${index}`} {...block.data} />
            ) : (
              <div key={`markdown-${index}`} className="prose prose-lg dark:prose-invert">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    a: ({ href, children, ...props }) => {
                      const url = href || "";
                      const isAffiliate = /(?:^https?:\/\/)?(?:www\.)?(shopee\.ph|tiktok\.com|tiktok\.shop)/i.test(
                        url
                      );

                      if (isAffiliate) {
                        return <AffiliateLink href={url}>{children}</AffiliateLink>;
                      }

                      return (
                        <a
                          href={url}
                          className="link"
                          {...props}
                        >
                          {children}
                        </a>
                      );
                    }
                  }}
                >
                  {block.content}
                </ReactMarkdown>
              </div>
            )
          )}
        </div>

        {ADS_ENABLED ? (
          <div className="rounded-2xl border-2 border-dashed border-border bg-surface px-6 py-10 text-center text-sm text-muted">
            Ad slot (mid-article). AdSense code goes here.
          </div>
        ) : null}

        {ADS_ENABLED ? (
          <div className="rounded-2xl border-2 border-dashed border-border bg-surface px-6 py-10 text-center text-sm text-muted">
            Ad slot (bottom of article). AdSense code goes here.
          </div>
        ) : null}

        <p className="text-sm text-muted">
          Links may lead to Shopee or TikTok Shop listings.
        </p>
      </article>

      {related.length > 0 ? (
        <section className="border-t-2 border-border pt-10">
          <div className="mx-auto w-full max-w-5xl space-y-4">
            <h2 className="section-title">
              Related articles
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}

type ProductBlockData = {
  name: string;
  description: string;
  url: string;
};

type ContentBlock =
  | { type: "markdown"; content: string }
  | { type: "product"; data: ProductBlockData };

const SHORTCODE_REGEX = /\[product-recommendation\s+([^\]]+)\]/g;

const NON_PUBLISHABLE_SECTION_PATTERN = /^\s*#{1,6}\s+(Link Map|Affiliate Placeholder Replacement Report|Affiliate Link Audit)(\b|\s|:|\()/i;

function getHeadingLevel(line: string) {
  const match = line.match(/^\s*(#{1,6})\s+/);
  return match ? match[1].length : 0;
}

function stripEditorialSections(content: string) {
  const lines = content.split(/\r?\n/);
  const output: string[] = [];
  let skip = false;
  let skipLevel = 0;

  for (const line of lines) {
    if (!skip && NON_PUBLISHABLE_SECTION_PATTERN.test(line)) {
      skip = true;
      skipLevel = getHeadingLevel(line);
      continue;
    }

    if (skip) {
      const level = getHeadingLevel(line);
      if (level > 0 && level <= skipLevel) {
        skip = false;
      } else {
        continue;
      }
    }

    output.push(line);
  }

  return output.join("\n").trim();
}

function parseAttributes(input: string) {
  const attributes: Record<string, string> = {};
  const regex = /(\w+)="([^"]*)"/g;
  let match = regex.exec(input);
  while (match) {
    attributes[match[1]] = match[2];
    match = regex.exec(input);
  }
  return attributes;
}

function parseContentBlocks(content: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  let lastIndex = 0;
  let match = SHORTCODE_REGEX.exec(content);

  while (match) {
    const [fullMatch, attributesRaw] = match;
    const start = match.index;
    const end = start + fullMatch.length;

    const before = content.slice(lastIndex, start).trim();
    if (before) {
      blocks.push({ type: "markdown", content: before });
    }

    const attrs = parseAttributes(attributesRaw);
    if (attrs.name && attrs.description && attrs.url) {
      blocks.push({
        type: "product",
        data: {
          name: attrs.name,
          description: attrs.description,
          url: attrs.url
        }
      });
    }

    lastIndex = end;
    match = SHORTCODE_REGEX.exec(content);
  }

  const remaining = content.slice(lastIndex).trim();
  if (remaining) {
    blocks.push({ type: "markdown", content: remaining });
  }

  return blocks;
}
