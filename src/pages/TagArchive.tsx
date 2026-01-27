import { Link, useLocation, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import PostCard from "../components/PostCard";
import { findTagBySlug, getAllPosts } from "../lib/posts";

export default function TagArchive() {
  const { tagSlug } = useParams();
  const location = useLocation();
  const posts = getAllPosts();
  const tag = tagSlug ? findTagBySlug(tagSlug, posts) : null;

  if (!tag) {
    return (
      <div className="space-y-4 text-center">
        <SEO
          title="Tag not found"
          description="The tag you requested was not found."
          canonicalPath={location.pathname}
          noindex
        />
        <h1 className="text-3xl font-bold text-text">Tag not found</h1>
        <p className="text-muted">
          The tag you are looking for does not exist.
        </p>
        <Link to="/blog/" className="link">
          Return to blog
        </Link>
      </div>
    );
  }

  const filteredPosts = posts.filter((post) => post.tags.includes(tag.name));
  const description = `Browse ${tag.count} SulitFinds posts tagged with “${tag.name}” for practical, budget-friendly tips.`;

  return (
    <div className="space-y-8">
      <SEO
        title={`#${tag.name} Posts`}
        description={description}
        canonicalPath={`/blog/tag/${tag.slug}/`}
      />

      <header className="space-y-4">
        <Link to="/blog/" className="link">
          ← Back to blog
        </Link>
        <h1 className="text-3xl font-bold text-text">
          #{tag.name} Posts
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
