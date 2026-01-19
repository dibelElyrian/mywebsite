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

const staticRoutes = [
  { path: "/", lastmod: today },
  { path: "/blog", lastmod: today },
  { path: "/about", lastmod: today },
  { path: "/disclaimer", lastmod: today },
  { path: "/privacy", lastmod: today },
  { path: "/feed.xml", lastmod: today }
];

const postRoutes = fs
  .readdirSync(contentDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => {
    const filePath = path.join(contentDir, file);
    const raw = fs.readFileSync(filePath, "utf8");
    const stats = fs.statSync(filePath);
    const { data } = matter(raw);
    const fallbackSlug = file.replace(/\.md$/, "");
    const slug = data.slug || fallbackSlug;
    const lastmod = data.date || stats.mtime.toISOString().split("T")[0];
    return { path: `/blog/${slug}`, lastmod };
  });

const allRoutes = [...staticRoutes, ...postRoutes];

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
