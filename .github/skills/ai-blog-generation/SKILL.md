---
name: ai-blog-generation
description: Create high-quality, reader-first blog posts for SulitFinds that answer trending Filipino questions with optional affiliate monetization.
---

Use this skill when generating new blog posts or refreshing existing content.

Core philosophy:
- Reader-first: Every post must provide genuine value before any monetization consideration
- Quality over quantity: Fewer excellent posts beat many mediocre ones
- Answer real questions: Target what Filipinos are actually searching for
- Natural monetization: Affiliate links only when genuinely helpful to the reader

Content tiers (choose based on topic depth):
- Pillar: Comprehensive guides (2,000+ words) for high-value topics
- Cluster: Standard posts (900-1,500 words) for focused topics
- Quick: Concise answers (500-900 words) for simple questions

Pre-generation requirements (MANDATORY):
1. Keyword research: Use the keyword-research skill to identify a valid topic
2. Topic registry check: Verify the topic is not already covered
3. Content tier decision: Choose Pillar, Cluster, or Quick based on topic depth
4. Value assessment: Confirm we can provide genuine, helpful content

Workflow options:

OPTION A: Content without product recommendations
- For how-to guides, explainers, tips, and informational content
- Skip product planning entirely
- Proceed directly to content generation
- No affiliate links required

OPTION B: Content with product recommendations (two-phase workflow)
- Phase 1: Product Plan (no blog content yet)
  - Propose the blog topic, target intent, and outline
  - Identify products that would genuinely help the reader (3-6 items max)
  - For each product, include:
    - Exact product name as it should appear in the article
    - Why it helps the reader (not just "it's available on Shopee")
    - Category tag
  - Check batch CSV at /public/batchlinks/*.csv for Offer Links
  - For products IN the batch CSV: Use the Offer Link as affiliate URL
  - For products NOT in CSV but exist on Shopee:
    - List the product and request user input
    - User will provide affiliate link or approve skipping
  - Stop after Phase 1 and wait for user confirmation/links
- Phase 2: Full Blog Generation (after user provides links)
  - Use provided links for affiliate URLs
  - Product name text must be the hyperlink
  - If any product is missing a link, either:
    - Downgrade to a mention (no link)
    - Remove from recommendations
  - Provide Affiliate Link Audit at end

Batch links input mode (when /public/batchlinks/*.csv exists):
- Load batch file before planning
- Use Offer Link as the primary affiliate URL
- Use Product Link only if Offer Link is missing
- Select products that genuinely help the reader (not just to use the links)
- Prioritize unused items (where Used In Blog is not yes)
- If no relevant products exist in batch: Ask user for input or proceed without affiliate links

Affiliate link request workflow:
- When a recommended product is NOT in the batch CSV but exists on Shopee:
  - Present product name and reason for recommendation
  - Ask: "This product is not in the batch CSV. Please provide the affiliate link, or type SKIP to continue without it."
  - Wait for user input before proceeding
- When content does not need product recommendations:
  - Do NOT ask for affiliate links
  - Proceed with content generation

Batch usage tracking (when affiliate links are used):
- After publishing, mark used products in the batch CSV
- Add columns if missing: Used In Blog, Used Slug, Used Title, Used Date
- Use /scripts/mark-batchlinks-used.mjs to update the CSV

Content quality guidelines:
- Answer the reader's question first, before any product mentions
- Provide genuine value even if the reader never clicks an affiliate link
- Do not force products into unrelated content
- Perform deep research using reputable sources
- Clearly separate verified facts from assumptions
- Do not claim personal testing or hands-on reviews
- Write clean, publication-ready copy
- Do not use em dashes or en dashes; use hyphen-minus or commas and periods

Copyright and asset usage:
- Do not use copyrighted images, text, or media without permission
- Do not copy content from brand sites, marketplaces, or other blogs
- All written content must be original and paraphrased properly
- Only use images that are public domain, CC0, or royalty-free
- Do not hotlink images from Shopee, TikTok Shop, or brand websites
- Prefer generic, non-branded visuals

Topic Registry (MANDATORY):
- Maintain at /docs/topic-registry.md
- For every published post, record:
  - Post title and slug
  - Primary search intent
  - Target keyword
  - Content tier (Pillar/Cluster/Quick)
  - Volume tier (High/Medium/Low/Emerging)
  - Core angle
  - Primary category
  - Key products mentioned (if any)
  - Status
- Update registry when new posts are generated

Pre-generation content scan (MANDATORY):
- Before generating, read the Topic Registry
- Compare proposed topic against existing entries
- Check for intent overlap, angle similarity, and audience match

Duplicate prevention rules:
- BLOCK generation if ALL are true:
  - Same primary intent as existing post
  - Same core angle
  - Value would be redundant
- ALLOW generation if ANY are true:
  - Different use case or audience
  - Different question being answered
  - Different comparison dimension
- Product reuse is allowed (same product in multiple posts)
- Duplicate blogs with same list and framing are not allowed

Content length rules:
- Pillar: 2,000+ words (comprehensive guides)
- Cluster: 900-1,500 words (focused topics)
- Quick: 500-900 words (simple answers)
- Do not pad with fluff; expand with useful sections if needed
- Word count for validation only; do not print in content

Affiliate integration rules (when applicable):
- Max 3-6 affiliate links per 1,000 words
- Link each product only once per article
- Product name text should be the hyperlink
- Use rel="sponsored noopener noreferrer" and target="_blank"
- Prefer placing links in dedicated recommendation sections
- Avoid mid-sentence links unless they add decision value
- Distinguish mentions (no link) from recommendations (link eligible)

Content integrity:
- Avoid turning posts into link farms
- Prefer one clear CTA block per recommendation section
- Never use urgency, fake scarcity, or deceptive language
- Do not promise earnings or guaranteed savings

Per-post affiliate disclosure: NOT required
- Site-wide Disclaimer page at /disclaimer handles this

Output requirements:
- Structured frontmatter: title, description, slug, date, category, tags
- Clear introduction, scannable headings, concise summaries
- Internal links to related posts when available
- If affiliate links used: Affiliate Link Audit (non-publishable) listing product, URL, section
- Accurate dates with "may change" disclaimer where applicable

Cover image requirements:
- Every post must have a cover image in /public/images/
- Format: JPG or PNG only (no SVG)
- Ratio: 16:9 preferred
- Naming: cover-[topic-slug].jpg
- If no suitable image exists, note it and request user to provide one

New post checklist (after generation):
1. Verify content provides genuine value to the reader
2. Confirm affiliate links use Offer Link from batch CSV (if applicable)
3. Update topic-registry.md with new entries
4. Run sitemap regeneration: npm run generate:sitemap
5. Run sensitive data scan (required by copilot-instructions.md)

BEFORE PUSHING - Cover Image Reminder (MANDATORY):
- Stop and remind user to create cover images for all new posts
- For each post, provide:
  - Required filename: /public/images/[slug].jpg
  - Canva prompt suggestion: A simple, descriptive prompt for creating a copyright-safe cover image
  - Example: "Minimalist flat illustration of a home office desk with laptop, notebook, and coffee mug. Clean background, soft colors, 16:9 ratio."
- Canva prompt guidelines:
  - Use generic, non-branded visuals
  - Avoid logos, trademarks, or identifiable brand packaging
  - Suggest lifestyle or category illustrations over specific products
  - Specify 16:9 ratio in the prompt
- Wait for user confirmation that images are ready before proceeding to push

AFTER PUSHING - Pinterest Pin Reminder (MANDATORY):
- After successful push, remind user to create Pinterest pins
- For each new post, provide:
  - Pin title: Post title
  - Pin description: Post meta description
  - Pin URL: https://sulitfinds.com/blog/[slug]
  - Board: "Budget Finds Philippines" (or relevant board)
  - Suggested hashtags: 5-6 relevant tags based on post category and keywords
- Example output format:
  ```
  Pinterest Pin for: [Post Title]
  - Image: /public/images/[slug].jpg
  - Title: [Post Title]
  - Description: [Meta description]
  - URL: https://sulitfinds.com/blog/[slug]
  - Board: Budget Finds Philippines
  - Tags: #budgettips #philippines #[topic] #[category] #sulitfinds
  ```

Quality checks before publishing:
- Does the post answer the reader's question? (required)
- Would this post be valuable even without affiliate links? (required)
- Clear introduction and scannable headings?
- Accurate information with sources?
- Unique title and compelling meta description?
- Natural keyword usage (not stuffed)?

Scope:
- Applies to new and refreshed blog posts
- Does not apply to About page, Disclaimer page, or UI copy
