import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ADSENSE_CLIENT_ID, GA_MEASUREMENT_ID } from "../lib/site";

const CONSENT_KEY = "sulitfinds_cookie_consent";
const GA_SCRIPT_ID = "ga-script";
const ADSENSE_SCRIPT_ID = "adsense-script";

type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

type ConsentStatus = "accepted" | "declined" | null;

function loadScript(src: string, id: string, attrs: Record<string, string> = {}) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  Object.entries(attrs).forEach(([key, value]) => {
    script.setAttribute(key, value);
  });
  document.head.appendChild(script);
}

function enableAnalytics() {
  if (!GA_MEASUREMENT_ID) return;
  const win = window as GtagWindow;
  win.dataLayer = win.dataLayer || [];
  // Must use 'arguments' object, not rest params - gtag.js expects this exact format
  function gtag() {
    // eslint-disable-next-line prefer-rest-params
    win.dataLayer?.push(arguments);
  }
  const gtagFn = (win.gtag || (gtag as GtagWindow["gtag"])) as NonNullable<
    GtagWindow["gtag"]
  >;
  win.gtag = gtagFn;
  gtagFn("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted"
  });
  gtagFn("js", new Date());
  gtagFn("config", GA_MEASUREMENT_ID, { send_page_view: false });
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`, GA_SCRIPT_ID);
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
  const [consent, setConsent] = useState<ConsentStatus>(null);
  const location = useLocation();
  const pagePath = useMemo(
    () => `${location.pathname}${location.search}${location.hash}`,
    [location]
  );

  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_KEY);
    if (storedConsent === "accepted") {
      setConsent("accepted");
      enableTracking();
      return;
    }
    if (storedConsent === "declined") {
      setConsent("declined");
      return;
    }
    if (!storedConsent) {
      // Small delay to avoid layout shift on initial load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (consent !== "accepted") return;
    const win = window as GtagWindow;
    if (!win.gtag) return;
    win.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath
    });
  }, [consent, pagePath]);

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    enableTracking();
    setShowBanner(false);
  }

function handleDecline() {
  localStorage.setItem(CONSENT_KEY, "declined");
  setConsent("declined");
  setShowBanner(false);
  // Optionally disable Google Analytics
  const win = window as GtagWindow;
  if (win.gtag) {
    win.gtag("consent", "update", {
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
          <Link to="/privacy/" className="link">
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
