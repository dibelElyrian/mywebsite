import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="space-y-6 text-center">
      <SEO title="Page not found" description="The page you requested was not found." />
      <h1 className="text-4xl font-bold text-text">404</h1>
      <p className="text-base text-muted">
        We couldn't find the page you're looking for.
      </p>
      <Link to="/" className="link">
        Return to home
      </Link>
    </div>
  );
}
