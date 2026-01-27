import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <a href="#main-content" className="skip-link sr-only sr-only-focusable">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="mx-auto w-full max-w-5xl px-6 pb-16 pt-10">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
