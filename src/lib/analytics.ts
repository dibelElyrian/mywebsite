import { GA_MEASUREMENT_ID } from "./site";

export const CONSENT_KEY = "sulitfinds_cookie_consent";
const GA_DEBUG_STORAGE_KEY = "sulitfinds_ga_debug";
const GA_DEBUG_QUERY_KEY = "ga_debug";

let lastTrackedPath: string | null = null;

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function safeGetStorageItem(key: string): string | null {
  if (!isBrowser()) return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent(): boolean {
  return safeGetStorageItem(CONSENT_KEY) === "accepted";
}

export function isGaDebugEnabled(): boolean {
  if (!isBrowser()) return false;

  if (safeGetStorageItem(GA_DEBUG_STORAGE_KEY) === "1") {
    return true;
  }

  try {
    return new URLSearchParams(window.location.search).get(GA_DEBUG_QUERY_KEY) === "1";
  } catch {
    return false;
  }
}

function getCurrentPath(): string {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

function isGtagReady(): boolean {
  return typeof window.gtag === "function" && Array.isArray(window.dataLayer);
}

export function trackPageView(reason?: string): void {
  if (!isBrowser()) return;
  if (!GA_MEASUREMENT_ID) return;

  const debugMode = isGaDebugEnabled();

  if (!hasAnalyticsConsent()) {
    if (debugMode) {
      console.info("[GA] consent not granted", { reason });
    }
    return;
  }

  if (!isGtagReady()) {
    if (debugMode) {
      console.info("[GA] gtag not ready", { reason });
    }
    return;
  }

  const pagePath = getCurrentPath();
  if (lastTrackedPath === pagePath) {
    if (debugMode) {
      console.info("[GA] skip duplicate page_view", { reason, pagePath });
    }
    return;
  }
  lastTrackedPath = pagePath;

  if (debugMode) {
    console.info("[GA] page_view", { reason, pagePath });
  }

  const startedAt = debugMode ? Date.now() : 0;
  const debugCallback = debugMode
    ? () => {
        const elapsedMs = Date.now() - startedAt;
        console.info("[GA] page_view callback", { reason, pagePath, elapsedMs });
      }
    : undefined;

  window.gtag!("event", "page_view", {
    send_to: GA_MEASUREMENT_ID,
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
    ...(debugMode
      ? { debug_mode: true, event_callback: debugCallback, event_timeout: 2000 }
      : {})
  });
}
