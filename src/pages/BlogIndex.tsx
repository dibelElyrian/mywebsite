import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import CategoryFilter from "../components/CategoryFilter";
import PostCard from "../components/PostCard";
import { getAllPosts, getCategories, getTags } from "../lib/posts";

export default function BlogIndex() {
  const posts = getAllPosts();
  const categories = getCategories(posts);
  const tags = getTags(posts);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [selectedTag, setSelectedTag] = useState(searchParams.get("tag") || "All");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
      const normalizedQuery = query.trim().toLowerCase();
      const matchesQuery =
        !normalizedQuery ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.description.toLowerCase().includes(normalizedQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));
      return matchesCategory && matchesTag && matchesQuery;
    });
  }, [posts, selectedCategory, selectedTag, query]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    const nextParams = new URLSearchParams(searchParams);
    if (value === "All") {
      nextParams.delete("category");
    } else {
      nextParams.set("category", value);
    }
    setSearchParams(nextParams, { replace: true });
  };

  const handleTagChange = (value: string) => {
    setSelectedTag(value);
    const nextParams = new URLSearchParams(searchParams);
    if (value === "All") {
      nextParams.delete("tag");
    } else {
      nextParams.set("tag", value);
    }
    setSearchParams(nextParams, { replace: true });
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    const nextParams = new URLSearchParams(searchParams);
    if (!value.trim()) {
      nextParams.delete("q");
    } else {
      nextParams.set("q", value);
    }
    setSearchParams(nextParams, { replace: true });
  };

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
        <div className="flex flex-wrap items-center gap-4">
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onChange={handleCategoryChange}
          />
          <div className="flex flex-1 items-center gap-3">
            <label
              htmlFor="search"
              className="text-sm font-medium text-slate-600 dark:text-slate-300"
            >
              Search
            </label>
            <input
              id="search"
              value={query}
              onChange={(event) => handleQueryChange(event.target.value)}
              placeholder="Search posts, tags, or keywords"
              className="w-full max-w-sm rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm focus:border-emerald-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleTagChange("All")}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
              selectedTag === "All"
                ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200"
                : "border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300"
            }`}
          >
            All tags
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagChange(tag)}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                selectedTag === tag
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200"
                  : "border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
