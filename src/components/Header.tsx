import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const linkStyles =
  "rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
          <img
            src="/logo/websitelogo.png"
            alt="SulitFinds logo"
            className="h-9 w-9 rounded-full object-cover"
            loading="lazy"
          />
          SulitFinds
        </NavLink>
        <nav className="flex items-center gap-2">
          <NavLink to="/blog" className={linkStyles}>
            Blog
          </NavLink>
          <NavLink to="/about" className={linkStyles}>
            About
          </NavLink>
          <NavLink to="/disclaimer" className={linkStyles}>
            Disclaimer
          </NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
