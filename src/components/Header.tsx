import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const primaryLinkStyles = ({ isActive }: { isActive: boolean }) =>
  `nav-link text-sm ${
    isActive
      ? "border-[color:var(--color-accent)] bg-surface text-text"
      : "text-muted"
  }`;


export default function Header() {
  return (
    <header className="border-b-2 border-border bg-bg">
      <div className="mx-auto w-full max-w-5xl px-6 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold text-text">
            <img
              src="/logo/websitelogo.png"
              alt="SulitFinds logo"
              className="h-9 w-9 rounded-full object-cover"
              loading="lazy"
            />
            SulitFinds
          </NavLink>
          <div className="flex w-full items-center justify-between gap-3 sm:w-auto">
            <nav className="flex flex-wrap items-center gap-2" aria-label="Primary">
              <NavLink to="/blog/" className={primaryLinkStyles}>
                Blog
              </NavLink>
              <NavLink to="/about/" className={primaryLinkStyles}>
                About
              </NavLink>
            </nav>
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
