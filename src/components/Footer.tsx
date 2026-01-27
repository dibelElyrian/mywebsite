import { Link } from "react-router-dom";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t-2 border-border bg-bg py-6 text-sm text-muted">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 text-center">
        <span>© 2026 SulitFinds. All rights reserved.</span>
        <span>
          Affiliate links may earn us a commission at no extra cost to you. View the{" "}
          <Link to="/disclaimer/" className="link">
            disclaimer
          </Link>
          {" "}and{" "}
          <Link to="/privacy/" className="link">
            privacy policy
          </Link>
          .
        </span>
        <span>
          Follow us:{" "}
          {SOCIAL_LINKS.map((item, index) => (
            <span key={item.label}>
              <a
                href={item.href}
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
              {index < SOCIAL_LINKS.length - 1 ? ", " : ""}
            </span>
          ))}
          .
        </span>
        <span>
          Contact:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="link">
            {CONTACT_EMAIL}
          </a>
        </span>
      </div>
    </footer>
  );
}
