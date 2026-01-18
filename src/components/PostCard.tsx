import { Link } from "react-router-dom";
import { Post } from "../lib/posts";
import { formatDate } from "../lib/format";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="card">
      {post.coverImage ? (
        <Link to={`/blog/${post.slug}`} className="mb-4 block overflow-hidden rounded-xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="h-44 w-full object-cover"
            loading="lazy"
          />
        </Link>
      ) : null}
      <div className="mb-3 flex items-center gap-3 text-xs font-medium text-muted">
        <span>{formatDate(post.date)}</span>
        <span className="chip">
          {post.category}
        </span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="text-xl font-semibold text-text">
        <Link to={`/blog/${post.slug}`} className="link-muted">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {post.description}
      </p>
      {post.tags.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="tag"
            >
              #{tag}
            </span>
          ))}
        </div>
      ) : null}
      <Link
        to={`/blog/${post.slug}`}
        className="mt-4 inline-flex text-sm font-semibold link"
      >
        Read more →
      </Link>
    </article>
  );
}
