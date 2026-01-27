import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const ssrDir = path.join(rootDir, "dist-ssr");
const contentDir = path.join(rootDir, "content", "posts");

const templatePath = path.join(distDir, "index.html");
const ssrEntryPath = path.join(ssrDir, "entry-server.js");

if (!fs.existsSync(templatePath)) {
  throw new Error("Missing dist/index.html. Run vite build first.");
}

if (!fs.existsSync(ssrEntryPath)) {
  throw new Error("Missing dist-ssr/entry-server.js. Run the SSR build first.");
}

const template = fs.readFileSync(templatePath, "utf8");
const baseTemplate = template.replace(/<title>.*?<\/title>/s, "");
const { render } = await import(pathToFileURL(ssrEntryPath).href);

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

const staticRoutes = ["/", "/blog", "/about", "/disclaimer", "/privacy"];

const categorySlugs = new Set();
const tagSlugs = new Set();

const postRoutes = fs
  .readdirSync(contentDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
    const { data } = matter(raw);
    const fallbackSlug = file.replace(/\.md$/, "");
    const slug = data.slug || fallbackSlug;
    const category = typeof data.category === "string" ? data.category : "General";
    if (category) {
      categorySlugs.add(slugifyLabel(category));
    }
    if (Array.isArray(data.tags)) {
      data.tags.forEach((tag) => {
        tagSlugs.add(slugifyLabel(tag));
      });
    }
    return `/blog/${slug}`;
  });

const categoryRoutes = Array.from(categorySlugs).map(
  (slug) => `/blog/category/${slug}`
);
const tagRoutes = Array.from(tagSlugs).map((slug) => `/blog/tag/${slug}`);

const routes = [...staticRoutes, ...postRoutes, ...categoryRoutes, ...tagRoutes];

async function renderRoute(route) {
  const { appHtml, headTags } = await render(route);
  const htmlWithHead = baseTemplate.includes("<!--head-tags-->")
    ? baseTemplate.replace("<!--head-tags-->", headTags)
    : baseTemplate.replace("</head>", `${headTags}\n</head>`);
  const html = htmlWithHead.includes("<!--app-html-->")
    ? htmlWithHead.replace("<!--app-html-->", appHtml)
    : htmlWithHead.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  return html;
}

for (const route of routes) {
  const html = await renderRoute(route);
  const outputDir = route === "/" ? distDir : path.join(distDir, route.slice(1));
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "index.html"), html, "utf8");
}

const notFoundHtml = await renderRoute("/404");
fs.writeFileSync(path.join(distDir, "404.html"), notFoundHtml, "utf8");

console.log(`Prerendered ${routes.length} routes.`);
