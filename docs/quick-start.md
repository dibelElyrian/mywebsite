# SulitFinds Quick Start Guide

A beginner-friendly guide for managing your website.

---

## How This Website Works

```
YOU write/generate → Markdown posts → Website displays them → Visitors click affiliate links → You earn commission
```

### The Money Flow

1. **Google finds your posts** (takes 1-4 weeks per post)
2. **People search for "budget [product] Philippines"**
3. **They find your post in Google results**
4. **They click your Shopee/TikTok affiliate link**
5. **They buy something → You earn 1-10% commission**

---

## Your Daily/Weekly Tasks

### Daily (5-10 mins)
- Check Google Analytics for visitors (analytics.google.com)
- Check Shopee Affiliate dashboard for clicks/sales

### Weekly (2-3 hours)
- Write or generate 2-3 new posts
- Create cover images in Canva
- Share posts on Pinterest (when set up)

### Monthly (1 hour)
- Review top-performing posts
- Update any broken links
- Check for new product trends

---

## Where Things Are

| What | Location |
|------|----------|
| Blog posts | `content/posts/` folder |
| Cover images | `public/images/` folder |
| Website code | `src/` folder |
| Topic tracker | `docs/topic-registry.md` |
| This guide | `docs/quick-start.md` |
| Full roadmap | `docs/growth-roadmap.md` |

---

## How to Add a New Blog Post

### Option 1: Ask the AI
Say: "Generate a blog post about budget [topic]"

### Option 2: Manual
1. Create a new `.md` file in `content/posts/`
2. Name it: `YYYY-MM-DD-your-topic-slug.md`
3. Copy the format from an existing post
4. Add a cover image to `public/images/`

---

## How to Deploy Changes

Changes deploy automatically when you push to GitHub:

```powershell
git add .
git commit -m "Add new posts"
git push
```

Netlify builds and publishes in 1-2 minutes.

---

## Common Commands

Run these in the terminal (VS Code):

```powershell
# Start local development server
npm run dev

# Build for production (test before deploy)
npm run build

# Generate sitemap (run after adding posts)
node scripts/generate-sitemap.mjs
```

---

## Affiliate Link Format

Your Shopee affiliate links should look like:
```
https://s.shopee.ph/XXXXXX
```

The website automatically adds `rel="sponsored"` for SEO compliance.

---

## Troubleshooting

### Post not showing?
1. Check the file is in `content/posts/`
2. Check the frontmatter (the part between `---`)
3. Restart dev server: `npm run dev`

### Cover image not loading?
1. Check file is in `public/images/`
2. Check filename matches exactly (case-sensitive)
3. Use JPG or PNG, not SVG

### Site not updating after deploy?
1. Clear browser cache (Ctrl+Shift+R)
2. Check Netlify dashboard for build errors
3. Wait 2-3 minutes for CDN propagation

---

## Getting Help

Just ask the AI:
- "What should I do next?"
- "Generate posts about [topic]"
- "Help me fix [problem]"
- "Explain how [feature] works"

---

## Key Milestones

- [ ] 25 posts → Apply for AdSense
- [ ] 50 posts → Decent organic traffic
- [ ] 100 posts → Sustainable income
- [ ] 10k monthly visitors → Sponsored post opportunities

---

*Keep this file bookmarked. It is your quick reference for everything.*
