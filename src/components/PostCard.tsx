import { Link } from "react-router-dom";
import { Post } from "../lib/posts";
import { formatDate } from "../lib/format";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-3 flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
        <span>{formatDate(post.date)}</span>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          {post.category}
        </span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
        <Link to={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {post.description}
      </p>
      <Link
        to={`/blog/${post.slug}`}
        className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
      >
        Read more →
      </Link>
    </article>
  );
}
