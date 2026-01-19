import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CONSENT_KEY = "sulitfinds_cookie_consent";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Small delay to avoid layout shift on initial load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setShowBanner(false);
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setShowBanner(false);
    // Optionally disable Google Analytics
    const win = window as Window & { gtag?: (...args: unknown[]) => void };
    if (win.gtag) {
      win.gtag("consent", "update", {
        analytics_storage: "denied"
      });
    }
  }

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-border bg-surface p-4 shadow-lg">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          We use cookies and analytics to understand how visitors use our site
          and to improve your experience.{" "}
          <Link to="/privacy" className="link">
            Learn more
          </Link>
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="btn-ghost px-4 py-2 text-sm"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="btn-primary px-4 py-2 text-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
