---
name: ai-blog-generation
description: Create high-quality, conversion-focused blog posts for SulitFinds using research-backed product trends and compliant affiliate messaging.
---

Use this skill when generating new blog posts or refreshing existing content.

Two-phase workflow (MANDATORY, unless auto affiliate link mode is enabled):
- Phase 1: Product Plan (no blog content yet)
	- Propose the blog topic, target intent, and outline.
	- Produce a Recommended Products List containing only products that will be recommended, not mere mentions.
	- Limit recommended products to 3-6 items per post.
	- For each product include:
		- Exact product name as it should appear in the article
		- 1 line reason it is recommended
		- Category tag
		- Unique Product Key
	- Output a Link Request Table with columns:
		- Product Key
		- Product Name
		- Shopee Product URL (non-affiliate ok)
		- TikTok Link (optional)
	- Stop after Phase 1 and wait for user links.
- Phase 2: Full Blog Generation (only after user provides links)
	- Use provided links instead of placeholders.
	- Inline recommendation rule Option B: product name text must be the hyperlink using the real Shopee link.
	- Do not add separate Check on Shopee CTAs for inline lists.
	- If any recommended product is missing a link, flag it and do not publish that product as a recommendation.
		- Either downgrade it to a mention or request the missing link.
	- Provide a final Affiliate Link Audit listing every linked product and its URL.

Auto affiliate link mode (when the site auto-converts Shopee URLs):
- Skip Phase 1 link request and proceed to a single-step generation.
- Use plain Shopee product URLs (non-affiliate ok) in content.
- Do not insert affiliate placeholders.
- Still include an Affiliate Link Audit listing every linked product and its URL.

Batch links input mode (Shopee export CSV):
- If a batch link file exists at /public/batchlinks/*.csv, load it before planning.
- Use Offer Link as the primary affiliate URL.
- Use Product Link only if Offer Link is missing.
- Select products that match the post topic and audience.
- Prioritize unused items by filtering out rows where Used In Blog is yes.
- If no relevant products are found, request a new batch export or a narrower topic.
Category roundup mode (when a Category column exists):
- Group items by Category and generate one long-form blog post per category.
- Each category post should recommend 3 to 6 items, sorted by Sales, and skip Used In Blog yes.
- Use the top remaining items for that category.
- If Category is missing or mostly empty, run /scripts/tag-batchlinks-category.mjs first.
- Map category names to site categories for frontmatter, for example Home Essentials, Tech, Beauty, Baby, Fashion, Bags, Pets, Kitchen, Cooling.
Sales-priority rule (MANDATORY when batch links input mode is used):
- Prefer items with higher Sales values.
- Parse Sales values like 10K+, 1.8K, 2M+ into comparable numbers.
- If Sales is missing or non-numeric, treat it as lowest priority.
Batch usage tracking (MANDATORY when batch links input mode is used):
- After publishing a post, mark each used product row as used in the same batch CSV file.
- Add these columns if missing: Used In Blog, Used Slug, Used Title, Used Date.
- Set Used In Blog to yes for each used product.
- Store the post slug, title, and date in the matching columns.
- Matching priority: Item Id first, then Offer Link, then Product Link.
- Use the script at /scripts/mark-batchlinks-used.mjs to update the CSV.

Guidelines:
- Perform deep research on current product trends using reputable sources (official brand pages, marketplaces, tech/consumer publications, and local PH context when possible).
- Clearly separate verified facts from assumptions; avoid unverified claims.
- Do not claim personal testing, hands-on reviews, or guaranteed outcomes.
- Write clean, publication-ready copy that needs minimal proofreading.
- Do not use em dashes or en dashes. Use hyphen-minus or commas and periods instead.
- Copyright and asset usage:
	- Do not use copyrighted images, text, or media without explicit permission.
	- Do not copy content from brand sites, marketplaces, blogs, or reviews.
	- All written content must be original and paraphrased properly.
- Image usage rules:
-	Only use images that are public domain, CC0, royalty-free, or explicitly licensed for commercial use.
-	Acceptable sources include public-domain or CC0 libraries, AI-generated images created specifically for this site, and simple original graphics such as icons or diagrams.
-	Do not hotlink images from Shopee, TikTok Shop, brand websites, or other blogs or review sites.
-	Do not use marketplace product images from Shopee or TikTok Shop, even if sample images are available.
- Image handling requirements:
-	Always include a relevant, copyright-safe cover image for each blog post when possible.
-	If a safe image cannot be guaranteed, omit the image rather than risk infringement.
-	Prefer generic, non-branded visuals such as product category illustrations or lifestyle shots.
-	Do not use SVGs for cover images. Use locally stored JPG or PNG created specifically for this site.
-	Avoid logos, trademarks, or identifiable brand packaging unless clearly allowed.
-	Add descriptive alt text that does not imply ownership or endorsement.
- Content generation rules:
	- Do not reproduce copyrighted product descriptions verbatim.
	- Summaries must be original and written in the site voice.
	- Avoid close paraphrasing that mirrors original sentence structure.
- Topic Registry (MANDATORY INFRASTRUCTURE):
	- Create and maintain a Topic Registry file at /docs/topic-registry.md.
	- For every published blog post, the registry must store:
		- Post title
		- Slug
		- Primary search intent (what question it answers)
		- Core angle (budget range, use case, audience, or constraint)
		- Primary product category
		- Key products mentioned (names only, no links)
		- Status: published
	- The Topic Registry must be updated automatically whenever a new post is generated or regenerated.
- Pre-generation content scan (MANDATORY):
	- Before generating any new blog post, read the Topic Registry.
	- Compare the proposed topic against existing entries by primary intent, core angle, and audience or use case.
	- If generating a related follow-up, read the source post and extract a clear product or accessory gap to address.
	- If batch link input mode is enabled, filter the batch list to items relevant to the topic before drafting.
- Duplicate prevention rules:
	- BLOCK generation if ALL are true:
		- The new topic has the same primary intent as an existing post.
		- The core angle is substantially the same.
		- The value delivered would be redundant.
	- ALLOW generation if ANY are true:
		- The post targets a different use case.
		- The post targets a different audience.
		- The post answers a different buyer question.
		- The comparison dimension is different.
- Product reuse rules (MANDATORY):
	- The same product may appear in multiple posts.
	- Product reuse does not count as duplicate content.
	- Duplicate usage blogs with the same list, order, and framing are not allowed.
- Conflict handling:
	- If a proposed topic is BLOCKED, do not generate the post.
	- Suggest 2 to 3 alternative topic angles that are not present in the Topic Registry, affiliate compatible, and fit SulitFinds product focus.
- Reporting requirement:
	- Before content generation, state clearly:
		- Topic Registry check result: PASS or BLOCK.
		- If BLOCKED, explain which existing topic conflicts.
		- List alternative topic suggestions.
- Content length rules (mandatory):
	- Every blog post must be long-form.
	- Minimum length: 900 words.
	- Target length: 1,000-1,200 words.
	- Absolute maximum: 1,500 words unless explicitly requested.
	- Do not generate short-form posts for publishing.
	- If a generated draft is below 900 words:
		- Expand it with additional useful sections such as guides, comparisons, FAQs, or clarifications.
		- Do not pad with fluff or repetitive phrasing.
	- Word count must be checked before final output.
	- Word count must be calculated internally for validation only.
	- Word count must NOT be printed or rendered in blog content, markdown output, HTML comments, footers, or metadata.
	- If word count is needed for verification, report it only in a non-publishable internal note or summary.
- Monetization eligibility check (mandatory):
	- Before generating a blog post, determine whether the topic can naturally include Shopee or TikTok Shop affiliate links.
	- If a topic cannot reasonably support product-based affiliate links, do not generate the post.
	- Instead, suggest an alternative topic that fits SulitFinds product affiliate model.
- Shopee or TikTok compatibility requirement:
	- All generated blog posts must allow at least 1 product recommendation and at least 1 affiliate placeholder link.
	- Content should center on physical consumer products, home, lifestyle, tech, or everyday items commonly sold on Shopee or TikTok Shop.
- Affiliate placeholder enforcement:
	- For every recommended product, insert a unique placeholder link.
	- Inline recommendation lists MUST use the product name itself as the hyperlink placeholder.
	- Correct pattern: [UGREEN 10000mAh 20W Power Bank](SHOPEE_LINK_PLACEHOLDER_UGREEN_10000MAH_20W).
	- Standalone CTA links such as "Check on Shopee" are FORBIDDEN in inline recommendation lists.
	- Standalone CTA buttons are allowed ONLY in dedicated product cards, comparison tables, or end of section recommendation blocks.
	- Product keys must be clear and unique.
	- Do not include real URLs.
	- Do not include placeholders for mere mentions.
- Post-generation requirement: Affiliate Placeholder Report (MANDATORY unless auto affiliate link mode is enabled)
	- After generating or updating any blog post, automatically scan the output for ALL affiliate placeholders, including:
		- SHOPEE_LINK_PLACEHOLDER_*
		- TIKTOK_LINK_PLACEHOLDER_*
	- Append a section titled: "Affiliate Placeholder Replacement Report"
	- For EACH placeholder, include:
		- Product name
		- Exact placeholder ID
		- File name or slug
		- Section heading where it appears
		- Link type (Shopee or TikTok)
	- Validation rules:
		- Every recommended product MUST have exactly one placeholder.
		- Placeholders must NOT exist for mere mentions.
		- Duplicate placeholders within the same article are NOT allowed.
	- Failure handling:
		- If a recommended product has no placeholder, flag this as an ERROR.
		- If a placeholder exists without a corresponding recommendation, flag this as an ERROR.
	- Final confirmation:
		- End the report with:
			- Total recommended products
			- Total placeholders found
			- Confirmation that counts match (YES or NO)
	- Persistence requirement:
		- This behavior must be enforced for new blog posts, regenerated posts, and refreshed or edited posts.
		- This must be part of the ai-blog-generation skill definition itself, not a temporary instruction.
- Linking constraints:
	- Max 3-6 affiliate placeholders per 1,000 words.
	- Link each product only once per article.
	- Prefer placing placeholders inside dedicated recommendation sections or product CTA blocks.
	- Avoid inserting placeholders mid sentence unless it adds clear decision value.
- Output requirements:
	- At the end of each draft, include a Link Map section listing product name, placeholder ID, and the section where it appears.
	- Clearly mark the Link Map as non-publishable and for editorial review only.
	- Do not include word count inside the Link Map.
	- If auto affiliate link mode is enabled, replace the Link Map with an Affiliate Link Audit (non-publishable) listing product name, URL, and section.
	- If batch link input mode is enabled, include the product name and Offer Link in the Affiliate Link Audit.
- Safety and integrity:
	- Do not generate content that cannot be monetized ethically via product affiliates.
	- Do not force products into unrelated topics.
- Emphasize value for budget-conscious Filipino buyers: availability and key use cases.
- Use a helpful, neutral tone that supports informed decisions.
- Include affiliate disclosures when linking to Shopee or TikTok Shop.
- Per-post affiliate disclosure: NOT required (site-wide Disclaimer page handles this).
- Distinguish between mentions vs recommendations:
	- Mentions: informational references → no affiliate link.
	- Recommendations: actionable suggestions → eligible for affiliate links.
- Affiliate linking rules:
	- Do NOT hyperlink every item mentioned.
	- Do ensure that every recommended item can be linked to Shopee or TikTok Shop.
	- Limit inline affiliate links to max 3-6 per 1,000 words.
	- Link each product only once per article.
	- Use rel="sponsored noopener noreferrer" and target="_blank" for affiliate links.
- Avoid deceptive or policy-violating content; do not promise earnings or savings.
- Content integrity:
	- Avoid turning lists into link farms.
	- Prefer one clear CTA block per recommendation section.
	- Inline links only where they add decision value.
	- Never use urgency, fake scarcity, or deceptive language.
- Authoring convenience:
	- When recommending an item, use clear, specific product names to make link insertion easy.
- Provide structured output with: title, description, slug, date, category, tags, and a clear outline.
- Add internal links to related posts when available.
- Related-post expansion rule (MANDATORY for follow-up topics):
	- Identify a source post with a clear product or accessory gap.
	- Generate a new post that directly addresses that gap.
	- Update the source post's Related posts section to include the new post.
	- Add a backlink in the new post's Related posts section to the source post.
- Before finalizing, confirm that all images and content used comply with the copyright and asset usage policy.

Scope:
- Applies to new and refreshed or rewritten blog posts.
- Does not apply to About page, Disclaimer page, or UI copy.

Quality checks:
- Clear introduction, scannable headings, and concise summaries.
- Accurate dates and availability notes with a “may change” disclaimer.
- Respect SEO best practices: unique title, compelling meta description, and natural keyword usage.
- Quick FAQ format must use bullet items with bold Question and Answer labels on separate lines, with a blank line between them.
Cover image requirements:
- Every post must have a cover image in /public/images/
- Format: JPG or PNG only (no SVG)
- Ratio: 16:9 preferred
- Naming: cover-[topic-slug].jpg (e.g., cover-smartwatch.jpg)
- If no suitable image exists, note it and request user to provide one

New post checklist (after generation):
1. Verify all affiliate links use Offer Link from batch CSV
2. Confirm cover image exists in /public/images/
3. Run sitemap regeneration: npm run generate:sitemap
4. Commit and push changes
5. Create Pinterest pin (see copilot-instructions.md for workflow)
6. Update topic-registry.md