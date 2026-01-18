import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 py-6 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-400">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 text-center">
        <span>© 2026 SulitFinds. All rights reserved.</span>
        <span>
          Affiliate links may earn us a commission at no extra cost to you. View the{" "}
          <Link to="/disclaimer" className="font-semibold text-emerald-600 hover:text-emerald-700">
            disclaimer
          </Link>
          .
        </span>
      </div>
    </footer>
  );
}
