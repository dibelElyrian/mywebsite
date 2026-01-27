import { useEffect } from "react";
import { useHeadCollector } from "../lib/head";
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "../lib/site";

type SEOProps = {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

function setMetaTag(key: string, value: string, attr: "name" | "property") {
  let element = document.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
}

function setLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function metaTag(attr: "name" | "property", key: string, value: string) {
  return `<meta ${attr}="${escapeHtml(key)}" content="${escapeHtml(value)}" />`;
}

function linkTag(rel: string, href: string) {
  return `<link rel="${escapeHtml(rel)}" href="${escapeHtml(href)}" />`;
}

function normalizeCanonicalPath(path: string) {
  if (!path) return "";
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = "",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false
}: SEOProps) {
  const headCollector = useHeadCollector();

  useEffect(() => {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonicalUrl = `${SITE_URL}${normalizeCanonicalPath(canonicalPath)}`;
    const imageUrl = image?.startsWith("http") ? image : `${SITE_URL}${image}`;
    const robotsContent = noindex ? "noindex,follow" : "index,follow";

    document.title = pageTitle;
    setMetaTag("description", description, "name");
    setMetaTag("robots", robotsContent, "name");
    setMetaTag("og:site_name", SITE_NAME, "property");
    setMetaTag("og:title", pageTitle, "property");
    setMetaTag("og:description", description, "property");
    setMetaTag("og:type", type, "property");
    setMetaTag("og:url", canonicalUrl, "property");
    setMetaTag("og:image", imageUrl, "property");
    setMetaTag("twitter:card", "summary_large_image", "name");
    setMetaTag("twitter:title", pageTitle, "name");
    setMetaTag("twitter:description", description, "name");
    setMetaTag("twitter:image", imageUrl, "name");
    setLinkTag("canonical", canonicalUrl);
  }, [title, description, canonicalPath, image, type, noindex]);

  if (headCollector) {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonicalUrl = `${SITE_URL}${normalizeCanonicalPath(canonicalPath)}`;
    const imageUrl = image?.startsWith("http") ? image : `${SITE_URL}${image}`;
    const robotsContent = noindex ? "noindex,follow" : "index,follow";

    headCollector.add(`<title>${escapeHtml(pageTitle)}</title>`);
    headCollector.add(metaTag("name", "description", description));
    headCollector.add(metaTag("name", "robots", robotsContent));
    headCollector.add(metaTag("property", "og:site_name", SITE_NAME));
    headCollector.add(metaTag("property", "og:title", pageTitle));
    headCollector.add(metaTag("property", "og:description", description));
    headCollector.add(metaTag("property", "og:type", type));
    headCollector.add(metaTag("property", "og:url", canonicalUrl));
    headCollector.add(metaTag("property", "og:image", imageUrl));
    headCollector.add(metaTag("name", "twitter:card", "summary_large_image"));
    headCollector.add(metaTag("name", "twitter:title", pageTitle));
    headCollector.add(metaTag("name", "twitter:description", description));
    headCollector.add(metaTag("name", "twitter:image", imageUrl));
    headCollector.add(linkTag("canonical", canonicalUrl));
  }

  return null;
}
