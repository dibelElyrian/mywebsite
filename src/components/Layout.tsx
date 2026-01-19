import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Header />
      <main className="mx-auto w-full max-w-5xl px-6 pb-16 pt-10">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
