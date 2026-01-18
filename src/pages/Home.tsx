import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";
import { getAllPosts } from "../lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const featured = posts.slice(0, 2);
  const latest = posts.slice(0, 6);

  return (
    <div className="space-y-12">
      <SEO
        title="Budget-friendly finds for Filipino buyers"
        description="SulitFinds curates affordable, practical product recommendations and guides for budget-conscious shoppers in the Philippines."
        canonicalPath="/"
      />

      <section className="rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-white p-10 shadow-sm dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            SulitFinds
          </p>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Budget-friendly recommendations for smarter Filipino shoppers.
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We highlight sulit picks, practical buying guides, and product roundups
            so you can shop with confidence without overspending.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/blog"
              className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Browse the blog
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:text-slate-200"
            >
              Learn about SulitFinds
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Featured guides
          </h2>
          <Link to="/blog" className="text-sm font-semibold text-emerald-600">
            View all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Latest posts
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {latest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
