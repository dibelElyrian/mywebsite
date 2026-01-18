import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t-2 border-border bg-bg py-6 text-sm text-muted">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 text-center">
        <span>© 2026 SulitFinds. All rights reserved.</span>
        <span>
          Affiliate links may earn us a commission at no extra cost to you. View the{" "}
          <Link to="/disclaimer" className="link">
            disclaimer
          </Link>
          .
        </span>
      </div>
    </footer>
  );
}
