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

Current compliance status (January 2026):
- Disclaimer page: /disclaimer (includes affiliate disclosure)
- Privacy Policy: /privacy (includes Google Analytics, AdSense, cookies)
- ads.txt: /public/ads.txt (Google AdSense publisher ID)
- robots.txt: Generated at build time via /scripts/generate-sitemap.mjs (Allow: /)
- sitemap.xml: Generated at build time, submitted to Google Search Console

AdSense compliance checklist:
- Sufficient original content (25+ posts, 900-1500 words each)
- Clear site navigation (Header: Home, Blog, About; Footer: Disclaimer, Privacy)
- No prohibited content (adult, violence, drugs, etc.)
- No deceptive practices (fake buttons, misleading claims)
- Affiliate content adds value beyond just links (guides, comparisons, tips)
- robots.txt allows all crawlers

Per-post affiliate disclosure:
- NOT required (removed per user preference)
- Site-wide Disclaimer page handles this
- Do not add disclosure blocks to individual blog posts
