import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const contentDir = path.join(rootDir, "content", "posts");
const distDir = path.join(rootDir, "dist");
const baseUrl = "https://sulitfinds.com";

const today = new Date().toISOString().split("T")[0];

function slugifyLabel(value) {
  const slug = value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return slug || "general";
}

function hasFileExtension(path) {
  const lastSegment = path.split("/").filter(Boolean).pop() || "";
  return lastSegment.includes(".");
}

function withTrailingSlash(path) {
  if (path === "/" || hasFileExtension(path)) return path;
  return path.endsWith("/") ? path : `${path}/`;
}

function maxDate(current, next) {
  if (!current) return next;
  return next > current ? next : current;
}

const staticRoutes = [
  { path: "/", lastmod: today },
  { path: "/blog", lastmod: today },
  { path: "/about", lastmod: today },
  { path: "/disclaimer", lastmod: today },
  { path: "/privacy", lastmod: today },
  { path: "/feed.xml", lastmod: today }
];

const postRoutes = [];
const categoryLastmod = new Map();
const tagLastmod = new Map();

fs.readdirSync(contentDir)
  .filter((file) => file.endsWith(".md"))
  .forEach((file) => {
    const filePath = path.join(contentDir, file);
    const raw = fs.readFileSync(filePath, "utf8");
    const stats = fs.statSync(filePath);
    const { data } = matter(raw);
    const fallbackSlug = file.replace(/\.md$/, "");
    const slug = data.slug || fallbackSlug;
    const lastmod = data.date || stats.mtime.toISOString().split("T")[0];
    postRoutes.push({ path: `/blog/${slug}`, lastmod });

    const category = typeof data.category === "string" ? data.category : "General";
    if (category) {
      const current = categoryLastmod.get(category);
      categoryLastmod.set(category, maxDate(current, lastmod));
    }

    if (Array.isArray(data.tags)) {
      data.tags.forEach((tag) => {
        const current = tagLastmod.get(tag);
        tagLastmod.set(tag, maxDate(current, lastmod));
      });
    }
  });

const categoryRoutes = Array.from(categoryLastmod.entries()).map(([category, lastmod]) => ({
  path: `/blog/category/${slugifyLabel(category)}`,
  lastmod
}));

const tagRoutes = Array.from(tagLastmod.entries()).map(([tag, lastmod]) => ({
  path: `/blog/tag/${slugifyLabel(tag)}`,
  lastmod
}));

const allRoutes = [...staticRoutes, ...postRoutes, ...categoryRoutes, ...tagRoutes].map(
  (route) => ({
  ...route,
  path: withTrailingSlash(route.path)
})
);

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) =>
      `  <url>\n    <loc>${baseUrl}${route.path}</loc>\n    <lastmod>${route.lastmod}</lastmod>\n  </url>`
  )
  .join("\n")}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
`;

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf8");
fs.writeFileSync(path.join(distDir, "robots.txt"), robotsTxt, "utf8");

console.log("Generated sitemap.xml and robots.txt");
