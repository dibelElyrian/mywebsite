import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { generateWebsiteJsonLd } from "../components/JsonLd";
import PostCard from "../components/PostCard";
import { getAllPosts, getCategories } from "../lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const featured = posts.slice(0, 2);
  const latest = posts.slice(0, 6);
  const categories = getCategories(posts);

  return (
    <div className="space-y-12">
      <SEO
        title="Budget-friendly finds for Filipino buyers"
        description="SulitFinds curates affordable, practical product recommendations and guides for budget-conscious shoppers in the Philippines."
        canonicalPath="/"
      />      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateWebsiteJsonLd() }}
      />
      <section className="rounded-[28px] border-2 border-border bg-surface p-10 shadow-[6px_6px_0_var(--color-border)]">
        <div className="max-w-2xl space-y-4">
          <p className="section-kicker">SulitFinds</p>
          <h1 className="text-4xl font-bold text-text">
            Budget-friendly recommendations for smarter Filipino shoppers.
          </h1>
          <p className="text-base text-muted">
            We highlight sulit picks, practical buying guides, and product roundups
            so you can shop with confidence without overspending.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/blog"
              className="btn-primary px-6 py-3"
            >
              Browse the blog
            </Link>
            <Link
              to="/about"
              className="btn-secondary px-6 py-3"
            >
              Learn about SulitFinds
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Featured guides</h2>
          <Link to="/blog" className="link">
            View all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="section-title">Shop by category</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/blog?category=${encodeURIComponent(category)}`}
              className="chip"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="section-title">Latest posts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {latest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
