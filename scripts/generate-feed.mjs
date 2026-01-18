import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const contentDir = path.join(rootDir, "content", "posts");
const distDir = path.join(rootDir, "dist");
const baseUrl = "https://sulitfinds.com";

const posts = fs
  .readdirSync(contentDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
    const { data, content } = matter(raw);
    const slug = data.slug || file.replace(/\.md$/, "");
    return {
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || "",
      slug,
      content
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const itemsXml = posts
  .map((post) => {
    const url = `${baseUrl}/blog/${post.slug}`;
    const pubDate = post.date ? new Date(post.date).toUTCString() : "";
    return `\n    <item>\n      <title><![CDATA[${post.title}]]></title>\n      <link>${url}</link>\n      <guid>${url}</guid>\n      <pubDate>${pubDate}</pubDate>\n      <description><![CDATA[${post.description}]]></description>\n    </item>`;
  })
  .join("");

const feedXml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<rss version="2.0">\n  <channel>\n` +
  `    <title>SulitFinds</title>\n` +
  `    <link>${baseUrl}</link>\n` +
  `    <description>Budget-friendly product recommendations in the Philippines.</description>\n` +
  `    <language>en-PH</language>\n` +
  itemsXml +
  `\n  </channel>\n</rss>\n`;

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, "feed.xml"), feedXml, "utf8");

console.log("Generated feed.xml");
