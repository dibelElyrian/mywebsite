---
name: seo-affiliate-compliance
description: Implement SEO metadata and affiliate compliance assets such as disclosures, sitemap, and robots.txt.
---

Use this skill when generating metadata, discovery files, or compliance content.

Guidelines:
- Generate SEO-friendly metadata: title, description, canonical, and Open Graph tags.
- Add or update sitemap.xml and robots.txt for static hosting.
- Provide affiliate disclosure and disclaimer pages when applicable.
- Avoid deceptive or policy-violating claims; do not imply personal testing.
- Keep canonical URLs consistent with production redirects (trailing slash vs no slash).
- Ensure non-existent pages return real 404s with `noindex,follow`.

Current compliance status (January 2026):
- Disclaimer page: /disclaimer (includes affiliate disclosure)
- Privacy Policy: /privacy (includes Google Analytics, AdSense, cookies)
- ads.txt: /public/ads.txt (Google AdSense publisher ID)
- robots.txt: Generated at build time via /scripts/generate-sitemap.mjs (Allow: /)
- sitemap.xml: Generated at build time, submitted to Google Search Console

Search Console lessons (January 2026):
- Trailing slash canonicalization must match the live host to avoid "Page with redirect".
- Query-parameter tag/category filters are not indexable; add real tag/category archive pages and include them in the sitemap.
- Remove blanket SPA rewrites when prerendered HTML exists; serve a real `404.html` instead.

AdSense compliance checklist:
- Sufficient original content (25+ posts, 900-1500 words each)
- Clear site navigation (Header: Home, Blog, About; Footer: Disclaimer, Privacy)
- No prohibited content (adult, violence, drugs, etc.)
- No deceptive practices (fake buttons, misleading claims)
- Affiliate content adds value beyond just links (guides, comparisons, tips)
- robots.txt allows all crawlers

Google Analytics 4 (GA4) implementation:
- Measurement ID: G-7L8HGVP5MZ (defined in src/lib/site.ts)
- Implementation: Cookie consent-based loading in CookieConsent.tsx
- CRITICAL: The gtag function MUST use `arguments` object, NOT rest parameters
  ```javascript
  // CORRECT - gtag.js expects Arguments objects in dataLayer
  function gtag() {
    dataLayer.push(arguments);
  }
  
  // WRONG - Arrays are NOT processed correctly by gtag.js
  function gtag(...args) {
    dataLayer.push(args);
  }
  ```
- Standard initialization order:
  1. Initialize dataLayer array
  2. Define gtag function using `arguments`
  3. Call gtag("js", new Date())
  4. Call gtag("config", "G-MEASUREMENT_ID")
  5. Load gtag.js script asynchronously
- The collect request (sending data to GA) only works when dataLayer contains Arguments objects
- Prefer GA4 automatic page_view tracking, but for SPA consent-gated setups where auto events fail,
  disable `send_page_view` in the config and send manual `page_view` events on route changes after consent.

Per-post affiliate disclosure:
- NOT required (removed per user preference)
- Site-wide Disclaimer page handles this
- Do not add disclosure blocks to individual blog posts
