import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SEO from "../components/SEO";
import JsonLd from "../components/JsonLd";
import PostCard from "../components/PostCard";
import ProductRecommendation from "../components/ProductRecommendation";
import AffiliateLink from "../components/AffiliateLink";
import { formatDate } from "../lib/format";
import { getPostBySlug, getRelatedPosts } from "../lib/posts";
import { slugifyLabel } from "../lib/slug";

export default function BlogPost() {
  const { slug } = useParams();
  const location = useLocation();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="space-y-4">
        <SEO
          title="Post not found"
          description="This post could not be found."
          canonicalPath={location.pathname}
          noindex
        />
        <h1 className="text-3xl font-bold">Post not found</h1>
        <p className="text-muted">
          The post you are looking for does not exist or has been moved.
        </p>
        <Link to="/blog/" className="link">
          Back to blog
        </Link>
      </div>
    );
  }

  const related = getRelatedPosts(post, 4);
  const categorySlug = slugifyLabel(post.category);
  const ADS_ENABLED = false;
  const cleanedContent = stripEditorialSections(post.content);
  const contentBlocks = parseContentBlocks(cleanedContent);
  const { tocEntries, blockHeadingLineMaps } = buildTocAndBlockIds(contentBlocks);

  return (
    <div className="space-y-12">
      <SEO
        title={post.title}
        description={post.description}
        canonicalPath={`/blog/${post.slug}/`}
        type="article"
        image={post.coverImage}
      />
      <JsonLd post={post} />

      <article className="mx-auto flex w-full max-w-[70ch] flex-col gap-10 pb-12 text-[1.05rem] leading-[1.75]">
        <header className="space-y-5">
          <Link to="/blog/" className="link">
            ← Back to blog
          </Link>
          <h1 className="text-3xl font-bold text-text">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{formatDate(post.date)}</span>
            <Link
              to={`/blog/category/${categorySlug}/`}
              className="chip"
            >
              {post.category}
            </Link>
            <span>{post.readingTime}</span>
          </div>
          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={post.coverImageAlt ?? post.title}
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
                  to={`/blog/tag/${slugifyLabel(tag)}/`}
                  className="tag"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          ) : null}
        </header>

        {tocEntries.length > 1 ? (
          <nav className="rounded-2xl border-2 border-border bg-surface p-5 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              On this page
            </p>
            <ul className="mt-3 space-y-2">
              {tocEntries.map((entry) => (
                <li
                  key={entry.id}
                  className={entry.level === 3 ? "ml-4" : entry.level === 4 ? "ml-7" : ""}
                >
                  <a href={`#${entry.id}`} className="link-muted">
                    {entry.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        {ADS_ENABLED ? (
          <div className="rounded-2xl border-2 border-dashed border-border bg-surface px-6 py-10 text-center text-sm text-muted">
            Ad slot (top of article). AdSense code goes here.
          </div>
        ) : null}

        <div className="space-y-10">
          {contentBlocks.map((block, index) => {
            if (block.type === "product") {
              return (
                <ProductRecommendation key={`product-${index}`} {...block.data} />
              );
            }

            const headingLineMap = blockHeadingLineMaps[index] ?? new Map<number, string>();
            const markdownComponents = createMarkdownComponents(headingLineMap);

            return (
              <div key={`markdown-${index}`} className="prose prose-lg dark:prose-invert">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={markdownComponents}
                >
                  {block.content}
                </ReactMarkdown>
              </div>
            );
          })}
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
          Links may lead to Shopee or TikTok Shop listings. Always review seller ratings,
          product details, and return policies before buying. Purchases are your
          responsibility. See <Link to="/disclaimer/" className="link">Disclaimer</Link>.
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
const TOC_HEADING_PATTERN = /^\s*(#{2})\s+(.+)$/;

const NON_PUBLISHABLE_SECTION_PATTERN = /^\s*#{1,6}\s+(Link Map|Affiliate Placeholder Replacement Report|Affiliate Link Audit|Related posts)(\b|\s|:|\()/i;

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

type TocEntry = {
  id: string;
  text: string;
  level: number;
};

function stripMarkdown(input: string) {
  return input
    .replace(/\[(.*?)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/[*_~]/g, "")
    .replace(/<\/?[^>]+>/g, "")
    .trim();
}

function slugify(input: string) {
  const normalized = input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return normalized || "section";
}

function buildTocAndBlockIds(contentBlocks: ContentBlock[]) {
  const tocEntries: TocEntry[] = [];
  const blockHeadingLineMaps: Array<Map<number, string>> = [];
  const slugCounts = new Map<string, number>();

  contentBlocks.forEach((block) => {
    if (block.type !== "markdown") {
      blockHeadingLineMaps.push(new Map());
      return;
    }

    const blockLineMap = new Map<number, string>();
    block.content.split(/\r?\n/).forEach((line, index) => {
      const match = line.match(TOC_HEADING_PATTERN);
      if (!match) return;
      const level = match[1].length;
      const text = stripMarkdown(match[2]);
      if (!text) return;
      const base = slugify(text);
      const count = slugCounts.get(base) ?? 0;
      const id = count ? `${base}-${count + 1}` : base;
      slugCounts.set(base, count + 1);
      tocEntries.push({ id, text, level });
      blockLineMap.set(index + 1, id);
    });

    blockHeadingLineMaps.push(blockLineMap);
  });

  return { tocEntries, blockHeadingLineMaps };
}

type HeadingTag = "h2" | "h3" | "h4";

function createHeadingRenderer(level: 2 | 3 | 4, headingLineMap: Map<number, string>) {
  return ({
    node,
    className,
    children,
    ...props
  }: {
    node?: unknown;
    className?: string;
    children?: ReactNode;
  } & ComponentPropsWithoutRef<HeadingTag>) => {
    const line = (node as { position?: { start?: { line?: number } } })?.position?.start?.line;
    const id = typeof line === "number" ? headingLineMap.get(line) : undefined;
    const Tag = `h${level}` as HeadingTag;
    const mergedClassName = ["scroll-mt-24", className].filter(Boolean).join(" ");

    return (
      <Tag id={id} className={mergedClassName} {...props}>
        {children}
      </Tag>
    );
  };
}

function createMarkdownComponents(headingLineMap: Map<number, string>) {
  return {
    a: ({
      href,
      children,
      node,
      ...props
    }: {
      href?: string;
      children?: ReactNode;
      node?: unknown;
    } & ComponentPropsWithoutRef<"a">) => {
      const url = href || "";
      const isAffiliate =
        /(?:^https?:\/\/)?(?:www\.)?(shopee\.ph|s\.shopee\.ph|shope\.ee|tiktok\.com|tiktok\.shop)/i.test(
          url
        );
      const isExternal = /^https?:\/\//i.test(url) && !url.includes("sulitfinds.com");

      if (isAffiliate) {
        return <AffiliateLink href={url}>{children}</AffiliateLink>;
      }

      if (isExternal) {
        return (
          <a
            href={url}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        );
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
    },
    h2: createHeadingRenderer(2, headingLineMap)
  };
}
