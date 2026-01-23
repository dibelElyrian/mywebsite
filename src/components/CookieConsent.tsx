import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ADSENSE_CLIENT_ID, GA_MEASUREMENT_ID } from "../lib/site";
import { CONSENT_KEY, trackPageView } from "../lib/analytics";

const GA_SCRIPT_ID = "ga-script";
const ADSENSE_SCRIPT_ID = "adsense-script";

function loadScript(
  src: string,
  id: string,
  attrs: Record<string, string> = {},
  onLoad?: () => void
): void {
  if (document.getElementById(id)) {
    // Script already exists, call onLoad immediately if script is loaded
    const existing = document.getElementById(id) as HTMLScriptElement | null;
    if (existing && onLoad) {
      if (existing.dataset.loaded === "true") {
        onLoad();
      } else {
        existing.addEventListener("load", onLoad);
      }
    }
    return;
  }
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  Object.entries(attrs).forEach(([key, value]) => {
    script.setAttribute(key, value);
  });
  if (onLoad) {
    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      onLoad();
    });
  }
  document.head.appendChild(script);
}

function initializeGtag() {
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  }
  window.gtag = window.gtag || gtag;
}

function enableAnalytics() {
  if (!GA_MEASUREMENT_ID) return;

  // Initialize dataLayer and gtag function first
  initializeGtag();

  // Update consent to granted
  window.gtag!("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "granted"
  });

  // Push initial commands to dataLayer (they queue up until script loads)
  window.gtag!("js", new Date());
  window.gtag!("config", GA_MEASUREMENT_ID, { send_page_view: false });

  // Load the gtag.js script and track page view once it's ready
  loadScript(
    `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
    GA_SCRIPT_ID,
    {},
    () => {
      // Script is now loaded, track the initial page view
      trackPageView("consent");
    }
  );
}

function enableAds() {
  if (!ADSENSE_CLIENT_ID) return;
  loadScript(
    `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`,
    ADSENSE_SCRIPT_ID,
    { crossorigin: "anonymous" }
  );
}

function enableTracking() {
  enableAnalytics();
  enableAds();
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === "accepted") {
      enableTracking();
      return;
    }
    if (!consent) {
      // Small delay to avoid layout shift on initial load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    enableTracking();
    setShowBanner(false);
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setShowBanner(false);
    // Optionally disable Google Analytics
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied"
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
