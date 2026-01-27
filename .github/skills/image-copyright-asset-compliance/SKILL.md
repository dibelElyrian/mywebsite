---
name: image-copyright-asset-compliance
description: Ensure all images and assets used in SulitFinds are copyright-safe, properly licensed, and compliant with site policy. Automates checks for licensing, source, file type, and alt text.
---

Use this skill to validate image and asset usage for any new or updated content.

Core requirements:
- Only use images that are public domain, CC0, royalty-free, or explicitly licensed for commercial use
- Acceptable sources: public-domain/CC0 libraries, AI-generated images for SulitFinds, original graphics (icons/diagrams)
- Do not use or hotlink images from Shopee, TikTok Shop, brand sites, blogs, or review sites
- Do not use marketplace product images, even if sample images are available
- No SVGs for cover images (JPG/PNG only)
- Prefer generic, non-branded visuals (no logos, trademarks, or identifiable packaging unless clearly allowed)
- Add descriptive alt text that does not imply ownership or endorsement

Operational steps:
1. Scan all new/changed images and asset references for source and license compliance
2. Remove or replace any questionable or unlicensed images
3. If copyright-safe assets are not available, omit images rather than risk infringement
4. Confirm all images and content used comply with this policy before publishing

Checklist:
- Search for new/changed image files in public/, content/, docs/, src/
- Check for forbidden sources (marketplaces, blogs, brand sites)
- Validate file types for cover images (JPG/PNG only)
- Ensure alt text is present and descriptive
- Flag any asset that does not meet requirements for manual review

Integration:
- Use this skill as part of the pre-publish and code review process
- Combine with sensitive data leak prevention for full compliance

Exception handling:
- If a user requests an image that does not meet these requirements, prompt for an alternative or explicit approval