import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const contentDir = path.join(rootDir, "content", "posts");
const distDir = path.join(rootDir, "dist");
const baseUrl = "https://sulitfinds.com";

const staticRoutes = ["/", "/blog", "/about", "/disclaimer", "/feed.xml"];

const postSlugs = fs
  .readdirSync(contentDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => {
    const filePath = path.join(contentDir, file);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);
    const fallbackSlug = file.replace(/\.md$/, "");
    return data.slug || fallbackSlug;
  });

const urls = [...staticRoutes, ...postSlugs.map((slug) => `/blog/${slug}`)];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map((route) => `  <url><loc>${baseUrl}${route}</loc></url>`)
    .join("\n") +
  "\n</urlset>\n";

const robotsTxt = `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`;

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf8");
fs.writeFileSync(path.join(distDir, "robots.txt"), robotsTxt, "utf8");

console.log("Generated sitemap.xml and robots.txt");
