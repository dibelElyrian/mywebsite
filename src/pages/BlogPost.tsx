import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SEO from "../components/SEO";
import { formatDate } from "../lib/format";
import { getPostBySlug } from "../lib/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="space-y-4">
        <SEO title="Post not found" description="This post could not be found." />
        <h1 className="text-3xl font-bold">Post not found</h1>
        <p className="text-slate-600 dark:text-slate-300">
          The post you are looking for does not exist or has been moved.
        </p>
        <Link to="/blog" className="text-emerald-600">
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      <SEO
        title={post.title}
        description={post.description}
        canonicalPath={`/blog/${post.slug}`}
        type="article"
      />

      <header className="space-y-4">
        <Link to="/blog" className="text-sm font-semibold text-emerald-600">
          ← Back to blog
        </Link>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
          <span>{formatDate(post.date)}</span>
          <Link
            to="/blog"
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {post.category}
          </Link>
          <span>{post.readingTime}</span>
        </div>
        <p className="text-base text-slate-600 dark:text-slate-300">
          {post.description}
        </p>
      </header>

      <div className="prose prose-slate max-w-none dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
