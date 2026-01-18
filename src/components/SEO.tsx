import { useEffect } from "react";
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "../lib/site";

type SEOProps = {
  title?: string;
  description?: string;
  canonicalPath?: string;
  image?: string;
  type?: "website" | "article";
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

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = "",
  image = DEFAULT_OG_IMAGE,
  type = "website"
}: SEOProps) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    document.title = pageTitle;
    setMetaTag("description", description, "name");
    setMetaTag("og:title", pageTitle, "property");
    setMetaTag("og:description", description, "property");
    setMetaTag("og:type", type, "property");
    setMetaTag("og:url", canonicalUrl, "property");
    setMetaTag("og:image", image, "property");
    setMetaTag("twitter:card", "summary_large_image", "name");
    setMetaTag("twitter:title", pageTitle, "name");
    setMetaTag("twitter:description", description, "name");
    setMetaTag("twitter:image", image, "name");
    setLinkTag("canonical", canonicalUrl);
  }, [title, description, canonicalPath, image, type]);

  return null;
}
