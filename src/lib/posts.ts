import { getReadingTime } from "./readingTime";

export type Post = {
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  description: string;
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

export function getAllPosts(): Post[] {
  const posts = Object.entries(modules).map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = data.slug || normalizeSlug(path);
    const description = data.description || content.slice(0, 160).trim();
    const { label } = getReadingTime(content);

    return {
      title: data.title || "Untitled",
      slug,
      date: data.date || "",
      category: data.category || "General",
      tags: Array.isArray(data.tags) ? data.tags : [],
      description,
      content,
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
