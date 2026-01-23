import { getReadingTime } from "./readingTime";
import { normalizeContent } from "./normalizeContent";

const NON_PUBLISHABLE_SECTION_PATTERN = /^\s*#{1,6}\s+(Link Map|Affiliate Placeholder Replacement Report|Affiliate Link Audit|Related posts)(\b|\s|:|\()/i;

export type Post = {
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  description: string;
  coverImage?: string;
  content: string;
  readingTime: string;
};

const modules = import.meta.glob<string>("../../content/posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default"
});

type Frontmatter = {
  title?: string;
  slug?: string;
  date?: string;
  category?: string;
  tags?: string[];
  description?: string;
  coverImage?: string;
};

function parseValue(value: string) {
  const trimmed = value.trim();
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    const inner = trimmed.slice(1, -1).trim();
    if (!inner) return [] as string[];
    return inner
      .split(",")
      .map((item) => item.trim().replace(/^['"]|['"]$/g, ""))
      .filter(Boolean);
  }
  return trimmed.replace(/^['"]|['"]$/g, "");
}

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) {
    return { data: {} as Frontmatter, content: raw.trim() };
  }

  const body = match[1];
  const content = raw.slice(match[0].length).trim();
  const data: Frontmatter = {};

  body.split(/\r?\n/).forEach((line) => {
    if (!line.trim()) return;
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) return;
    const value = rest.join(":");
    const parsed = parseValue(value);
    (data as Record<string, unknown>)[key.trim()] = parsed;
  });

  return { data, content };
}

function normalizeSlug(path: string) {
  const fileName = path.split("/").pop() || "";
  return fileName.replace(/\.md$/, "");
}

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

export function getAllPosts(): Post[] {
  const posts = Object.entries(modules).map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const normalizedContent = normalizeContent(stripEditorialSections(content));
    const slug = data.slug || normalizeSlug(path);
    const normalizedDescription = normalizeContent(
      data.description || normalizedContent.slice(0, 160).trim()
    );
    const { label } = getReadingTime(normalizedContent);

    return {
      title: data.title || "Untitled",
      slug,
      date: data.date || "",
      category: data.category || "General",
      tags: Array.isArray(data.tags) ? data.tags : [],
      description: normalizedDescription,
      coverImage: data.coverImage,
      content: normalizedContent,
      readingTime: label
    } as Post;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getCategories(posts: Post[]) {
  return Array.from(new Set(posts.map((post) => post.category))).sort();
}

export function getTags(posts: Post[]) {
  return Array.from(new Set(posts.flatMap((post) => post.tags))).sort();
}

function scoreRelated(post: Post, candidate: Post) {
  let score = 0;
  if (post.category === candidate.category) score += 2;
  const sharedTags = post.tags.filter((tag) => candidate.tags.includes(tag));
  score += sharedTags.length;
  return score;
}

export function getRelatedPosts(current: Post, limit = 3) {
  const posts = getAllPosts().filter((post) => post.slug !== current.slug);
  const related = posts
    .map((post) => ({
      post,
      score: scoreRelated(current, post)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    })
    .slice(0, limit)
    .map((item) => item.post);

  if (related.length >= limit) {
    return related;
  }

  const remaining = posts
    .filter((post) => !related.some((item) => item.slug === post.slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit - related.length);

  return [...related, ...remaining];
}
