import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../lib/analytics";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView("route-change");
  }, [location.pathname, location.search, location.hash]);

  return null;
}
