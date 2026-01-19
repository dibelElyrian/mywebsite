# SulitFinds Growth Roadmap

This roadmap focuses on traffic generation and monetization readiness. Updated: January 19, 2026.

## Current Status

- **Published posts:** 7
- **Google Analytics:** Blocked by CSP (needs fix)
- **AdSense:** Not applied (need 25+ posts)
- **Pinterest:** Not started
- **Email list:** Not started

---

## Phase 1: Foundation (Days 1-30) - CONTENT SPRINT

### Week 1: Technical Fixes

| Task | Status | Action Plan |
|------|--------|-------------|
| Fix CSP for Google Analytics | 🔴 To Do | Update `netlify.toml` to allow googletagmanager.com and google-analytics.com in script-src |
| Add Privacy Policy page | 🔴 To Do | Create `/privacy` route with standard privacy policy covering analytics, cookies, affiliate data |
| Add cookie consent banner | 🔴 To Do | Add simple banner component that stores consent in localStorage |
| Convert og-default.svg to PNG | 🔴 To Do | Export 1200x630px PNG, update references in index.html and site.ts |
| Remove broken internal links | 🔴 To Do | Audit posts for links to non-existent pages, remove or create placeholder posts |

### Weeks 1-4: Content Production

| Task | Status | Action Plan |
|------|--------|-------------|
| Publish 12 new posts (3/week) | 🔴 To Do | Use ai-blog-generation skill, target long-tail keywords |
| Create content calendar | 🔴 To Do | Plan topics for next 30 days in topic-registry.md |
| Target keyword variations | 🔴 To Do | Include "under 500 pesos", "vs comparison", "review 2026" |

**Content Ideas for Week 1-4:**
1. Budget rice cookers for small families
2. Affordable phone holders for commuters
3. Best USB fans under 300 pesos
4. Budget webcams for WFH setups
5. Compact storage organizers for small rooms
6. Budget LED desk lamps for students
7. Affordable water bottles for daily carry
8. Budget extension cords with surge protection
9. Cheap but reliable charging cables
10. Budget laundry organizers for dorms
11. Affordable kitchen timers and scales
12. Budget phone stands for video calls

### Week 2: Pinterest Setup

| Task | Status | Action Plan |
|------|--------|-------------|
| Create Pinterest Business account | 🔴 To Do | Sign up at business.pinterest.com, verify sulitfinds.com |
| Create pin templates in Canva | 🔴 To Do | Design 2-3 templates: "Budget [Product] Guide PH" style |
| Create 30 pins from existing posts | 🔴 To Do | 4-5 pins per post with different angles/keywords |
| Research group boards | 🔴 To Do | Find Filipino lifestyle, shopping, home organization boards |

### Week 3: SEO Enhancements

| Task | Status | Action Plan |
|------|--------|-------------|
| Add JSON-LD Article schema | 🔴 To Do | Update BlogPost.tsx to inject structured data |
| Add JSON-LD FAQ schema | 🔴 To Do | Parse FAQ sections and generate schema |
| Add BreadcrumbList schema | 🔴 To Do | Add to all pages for better SERP display |
| Add lastmod to sitemap | 🔴 To Do | Update generate-sitemap.mjs to read file dates |

### Week 4: Email List Setup

| Task | Status | Action Plan |
|------|--------|-------------|
| Choose email provider | 🔴 To Do | Buttondown (free tier) or ConvertKit |
| Create lead magnet PDF | 🔴 To Do | "50 Best Budget Finds Under 500 Pesos" checklist |
| Add signup form to site | 🔴 To Do | Create EmailSignup component, add to Home and BlogPost |
| Set up welcome email | 🔴 To Do | Configure auto-responder with lead magnet delivery |

---

## Phase 2: Growth (Days 31-60) - TRAFFIC CHANNELS

### Weeks 5-8: Content Expansion

| Task | Status | Action Plan |
|------|--------|-------------|
| Publish 12 more posts (3/week) | 🔴 To Do | Total: 31 posts |
| Create 2 pillar content pieces | 🔴 To Do | 2000+ word comprehensive guides |
| Build content clusters | 🔴 To Do | Link related posts to pillar content |

**Pillar Content Ideas:**
1. "Complete Guide to Budget Kitchen Appliances in the Philippines (2026)"
2. "Ultimate WFH Setup on a Budget: Filipino Edition"

### Week 5: Facebook Launch

| Task | Status | Action Plan |
|------|--------|-------------|
| Create Facebook Page | 🔴 To Do | Use SulitFinds branding, link to website |
| Join 5 budget shopping groups | 🔴 To Do | Find active Filipino groups: tipid tips, budget finds, etc. |
| Share posts with value-add | 🔴 To Do | Don't spam links; add genuine commentary |

### Week 6: UX Improvements

| Task | Status | Action Plan |
|------|--------|-------------|
| Add table of contents | 🔴 To Do | Auto-generate from H2/H3 headings for long posts |
| Add social share buttons | 🔴 To Do | Facebook, Twitter, copy link, Pinterest |
| Add reading progress bar | 🔴 To Do | Sticky progress indicator at top of posts |

### Week 8: AdSense Application

| Task | Status | Action Plan |
|------|--------|-------------|
| Verify content quality | 🔴 To Do | Ensure 25+ substantial posts, no thin content |
| Check compliance | 🔴 To Do | Privacy policy, about page, contact info |
| Apply for AdSense | 🔴 To Do | Submit application, expect 1-2 week review |

---

## Phase 3: Optimization (Days 61-90) - MONETIZATION

### Weeks 9-12: Scale What Works

| Task | Status | Action Plan |
|------|--------|-------------|
| Publish 12 more posts | 🔴 To Do | Total: 43 posts |
| Analyze top performers | 🔴 To Do | Check GA for highest traffic posts, create similar content |
| Implement affiliate click tracking | 🔴 To Do | Add gtag events to AffiliateLink component |
| Create seasonal content | 🔴 To Do | Valentine's gifts, summer prep, back-to-school |

### Week 10: Search Functionality

| Task | Status | Action Plan |
|------|--------|-------------|
| Add client-side search | 🔴 To Do | Use Fuse.js for fuzzy search across posts |
| Add search to header | 🔴 To Do | Collapsible search input with results dropdown |

### Week 12: Media Kit

| Task | Status | Action Plan |
|------|--------|-------------|
| Create media kit page | 🔴 To Do | Traffic stats, audience demographics, sponsorship packages |
| Define sponsored post pricing | 🔴 To Do | Based on traffic metrics at 90-day mark |

---

## Key Metrics to Track

| Metric | Tool | 30-Day Target | 60-Day Target | 90-Day Target |
|--------|------|---------------|---------------|---------------|
| Published posts | Manual | 19 | 31 | 43 |
| Organic sessions | Google Analytics | 100 | 300 | 500 |
| Pinterest impressions | Pinterest Analytics | 2,000 | 5,000 | 10,000 |
| Email subscribers | Email provider | 25 | 50 | 100 |
| Affiliate clicks | GA Events | 10 | 30 | 50 |

---

## Quick Reference: Priority Order

1. 🔴 **CRITICAL** - Fix CSP for Google Analytics (blocking all tracking)
2. 🔴 **CRITICAL** - Content production (3+ posts/week)
3. 🔴 **CRITICAL** - Pinterest setup and pinning
4. 🟡 **HIGH** - Privacy Policy page
5. 🟡 **HIGH** - JSON-LD structured data
6. 🟡 **HIGH** - Email signup infrastructure
7. 🟢 **MEDIUM** - UX improvements (TOC, share buttons)
8. 🟢 **MEDIUM** - AdSense application (after 25+ posts)

---

## Notes

- Do not sacrifice content quality for speed
- Each post should target a specific long-tail keyword
- Update this roadmap weekly with status changes
- Track all published topics in topic-registry.md to avoid duplication
