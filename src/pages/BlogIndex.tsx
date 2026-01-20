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
        description="Browse the latest SulitFinds posts, including practical guides, budget tips, and helpful answers."
        canonicalPath="/blog"
      />

      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-text">Blog</h1>
        <p className="text-base text-muted">
          Practical guides, budget tips, and helpful answers for everyday Filipino questions.
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
              className="text-sm font-medium text-muted"
            >
              Search
            </label>
            <input
              id="search"
              value={query}
              onChange={(event) => handleQueryChange(event.target.value)}
              placeholder="Search posts, tags, or keywords"
              className="input max-w-sm"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleTagChange("All")}
            className={`chip transition ${
              selectedTag === "All"
                ? "border-[color:var(--color-accent)] text-[color:var(--color-accent-2)]"
                : "hover:border-[color:var(--color-accent)]"
            }`}
          >
            All tags
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagChange(tag)}
              className={`chip transition ${
                selectedTag === tag
                  ? "border-[color:var(--color-accent)] text-[color:var(--color-accent-2)]"
                  : "hover:border-[color:var(--color-accent)]"
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
