import { useMemo, useState } from "react";
import SEO from "../components/SEO";
import CategoryFilter from "../components/CategoryFilter";
import PostCard from "../components/PostCard";
import { getAllPosts, getCategories } from "../lib/posts";

export default function BlogIndex() {
  const posts = getAllPosts();
  const categories = getCategories(posts);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return posts;
    }
    return posts.filter((post) => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  return (
    <div className="space-y-8">
      <SEO
        title="Blog"
        description="Browse the latest SulitFinds posts, including guides, product roundups, and budget tips."
        canonicalPath="/blog"
      />

      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Blog</h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          Explore budget-friendly recommendations curated for Filipino shoppers.
        </p>
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
