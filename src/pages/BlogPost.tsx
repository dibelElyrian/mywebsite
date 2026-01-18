import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";
import ProductRecommendation from "../components/ProductRecommendation";
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
        <p className="text-slate-600 dark:text-slate-300">
          The post you are looking for does not exist or has been moved.
        </p>
        <Link to="/blog" className="text-emerald-600">
          Back to blog
        </Link>
      </div>
    );
  }

  const related = getRelatedPosts(post, 3);
  const ADS_ENABLED = false;

  const contentBlocks = parseContentBlocks(post.content);

  return (
    <div className="space-y-12">
      <SEO
        title={post.title}
        description={post.description}
        canonicalPath={`/blog/${post.slug}`}
        type="article"
        image={post.coverImage}
      />

      <article className="mx-auto flex w-full max-w-[72ch] flex-col gap-10 pb-12 text-[1.05rem] leading-[1.75]">
        <header className="space-y-5">
          <Link to="/blog" className="text-sm font-semibold text-emerald-600">
            ← Back to blog
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span>{formatDate(post.date)}</span>
            <Link
              to="/blog"
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
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
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {post.description}
          </p>
          {post.tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/blog?tag=${encodeURIComponent(tag)}`}
                  className="rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700 transition hover:border-emerald-400 dark:border-emerald-900/60 dark:text-emerald-200"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          ) : null}
        </header>

        {ADS_ENABLED ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
            Ad slot (top of article) — AdSense code goes here.
          </div>
        ) : null}

        <div className="space-y-10">
          {contentBlocks.map((block, index) =>
            block.type === "product" ? (
              <ProductRecommendation key={`product-${index}`} {...block.data} />
            ) : (
              <div
                key={`markdown-${index}`}
                className="prose prose-lg prose-slate dark:prose-invert"
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{block.content}</ReactMarkdown>
              </div>
            )
          )}
        </div>

        {ADS_ENABLED ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
            Ad slot (mid-article) — AdSense code goes here.
          </div>
        ) : null}

        {ADS_ENABLED ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
            Ad slot (bottom of article) — AdSense code goes here.
          </div>
        ) : null}

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Links may lead to Shopee or TikTok Shop listings.
        </p>
      </article>

      {related.length > 0 ? (
        <section className="border-t border-slate-200 pt-10 dark:border-slate-800">
          <div className="mx-auto w-full max-w-5xl space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
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
