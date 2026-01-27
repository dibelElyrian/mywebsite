import { Link, useLocation, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";
import { findCategoryBySlug, getAllPosts } from "../lib/posts";

export default function CategoryArchive() {
  const { categorySlug } = useParams();
  const location = useLocation();
  const posts = getAllPosts();
  const category = categorySlug ? findCategoryBySlug(categorySlug, posts) : null;

  if (!category) {
    return (
      <div className="space-y-4 text-center">
        <SEO
          title="Category not found"
          description="The category you requested was not found."
          canonicalPath={location.pathname}
          noindex
        />
        <h1 className="text-3xl font-bold text-text">Category not found</h1>
        <p className="text-muted">
          The category you are looking for does not exist.
        </p>
        <Link to="/blog/" className="link">
          Return to blog
        </Link>
      </div>
    );
  }

  const filteredPosts = posts.filter((post) => post.category === category.name);
  const description = `Browse ${category.count} SulitFinds posts in the ${category.name} category with practical, budget-friendly advice.`;

  return (
    <div className="space-y-8">
      <SEO
        title={`${category.name} Guides`}
        description={description}
        canonicalPath={`/blog/category/${category.slug}/`}
      />

      <header className="space-y-4">
        <Link to="/blog/" className="link">
          ← Back to blog
        </Link>
        <h1 className="text-3xl font-bold text-text">
          {category.name} Guides
        </h1>
        <p className="text-base text-muted">
          {description}
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
