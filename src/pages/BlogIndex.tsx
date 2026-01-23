import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import CategoryFilter from "../components/CategoryFilter";
import PostCard from "../components/PostCard";
import { getAllPosts, getCategories, getTags } from "../lib/posts";

const TAG_LIMIT = 12;

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
  const [showAllTags, setShowAllTags] = useState(false);

  const sortedTags = useMemo(() => {
    const counts = new Map<string, number>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      });
    });

    return Array.from(counts.entries())
      .sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];
        return a[0].localeCompare(b[0]);
      })
      .map(([tag]) => tag);
  }, [posts]);

  const visibleTags = useMemo(() => {
    if (showAllTags) return sortedTags;
    const limited = sortedTags.slice(0, TAG_LIMIT);
    if (selectedTag !== "All" && !limited.includes(selectedTag)) {
      return [...limited, selectedTag];
    }
    return limited;
  }, [showAllTags, sortedTags, selectedTag]);

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

      <header className="space-y-5">
        <h1 className="text-3xl font-bold text-text">Blog</h1>
        <p className="text-base text-muted">
          Practical guides, budget tips, and helpful answers for everyday Filipino questions.
        </p>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Filters
          </p>
          <div className="grid gap-4 sm:grid-cols-[minmax(180px,220px)_1fr] sm:items-end">
            <CategoryFilter
              categories={categories}
              selected={selectedCategory}
              onChange={handleCategoryChange}
            />
            <div className="flex flex-col gap-2">
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
                className="input w-full"
              />
            </div>
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
          {visibleTags.map((tag) => (
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
          {sortedTags.length > TAG_LIMIT ? (
            <button
              type="button"
              onClick={() => setShowAllTags((prev) => !prev)}
              className={`chip transition ${
                showAllTags
                  ? "border-[color:var(--color-accent)] text-[color:var(--color-accent-2)]"
                  : "hover:border-[color:var(--color-accent)]"
              }`}
            >
              {showAllTags
                ? "Show fewer tags"
                : `Show all tags (${sortedTags.length})`}
            </button>
          ) : null}
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
