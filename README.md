# SulitFinds

Production-ready starter for the SulitFinds affiliate blog.

## Requirements
- Node.js 20+ (recommended)
- npm 10+

## Local development
1. Install dependencies:
	- `npm install`
2. Start the dev server:
	- `npm run dev`

## Environment variables
- Copy .env.example to .env.local and fill in your Shopee affiliate values.

## Production build
1. Build the site:
	- `npm run build`
2. Preview the build:
	- `npm run preview`

The build step generates `dist/sitemap.xml` and `dist/robots.txt` for SEO.

## Deployment (Netlify)
- The `netlify.toml` file is ready for Netlify.
- Build command: `npm run build`
- Publish directory: `dist`

## Content
- Markdown posts live in `content/posts/`.
- Frontmatter fields: `title`, `slug`, `date`, `category`, `tags`, `description`.
