import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="space-y-6 text-center">
      <SEO title="Page not found" description="The page you requested was not found." />
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white">404</h1>
      <p className="text-base text-slate-600 dark:text-slate-300">
        We couldn't find the page you're looking for.
      </p>
      <Link to="/" className="text-emerald-600">
        Return to home
      </Link>
    </div>
  );
}
