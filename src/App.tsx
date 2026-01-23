import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import AnalyticsTracker from "./components/AnalyticsTracker";
import Home from "./pages/Home";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import { initializeTheme } from "./lib/theme";

export default function App() {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <>
      <ScrollToTop />
      <AnalyticsTracker />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="about" element={<About />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
