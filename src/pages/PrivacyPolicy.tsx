import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
      <SEO
        title="Privacy Policy"
        description="Privacy policy for SulitFinds, covering data collection, cookies, and analytics."
        canonicalPath="/privacy/"
      />

      <h1>Privacy Policy</h1>
      <p className="text-muted">Last updated: January 19, 2026</p>

      <p>
        SulitFinds ("we," "our," or "us") respects your privacy and is committed
        to protecting your personal information. This Privacy Policy explains how
        we collect, use, and safeguard information when you visit our website at
        sulitfinds.com.
      </p>

      <h2>Information We Collect</h2>

      <h3>Automatically Collected Information</h3>
      <p>
        When you visit our website, we may automatically collect certain
        information about your device and usage patterns, including:
      </p>
      <ul>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>Pages visited and time spent on pages</li>
        <li>Referring website or source</li>
        <li>General geographic location (country/city level)</li>
      </ul>

      <h3>Cookies and Tracking Technologies</h3>
      <p>We use the following tracking technologies:</p>
      <ul>
        <li>
          <strong>Google Analytics:</strong> We use Google Analytics to
          understand how visitors interact with our website. Google Analytics
          collects information such as how often users visit, what pages they
          view, and what other sites they used before coming to our site. We use
          this information to improve our content and user experience. Google
          Analytics uses cookies to collect this data. You can opt out of Google
          Analytics by installing the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </li>
        <li>
          <strong>Local Storage:</strong> We use browser local storage to
          remember your preferences, such as dark mode settings and cookie
          consent status.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the collected information to:</p>
      <ul>
        <li>Analyze website traffic and usage patterns</li>
        <li>Improve our content and recommendations</li>
        <li>Understand which topics are most helpful to our readers</li>
        <li>Maintain and optimize website performance</li>
      </ul>

      <h2>Affiliate Links and Third-Party Services</h2>
      <p>
        Our website contains affiliate links to third-party websites, including
        Shopee and TikTok Shop. When you click on these links:
      </p>
      <ul>
        <li>You will be redirected to the third-party website</li>
        <li>
          The third-party website may collect information about you according to
          their own privacy policies
        </li>
        <li>
          We may receive a commission if you make a purchase, at no extra cost
          to you
        </li>
      </ul>
      <p>
        We are not responsible for the privacy practices of these third-party
        websites. We encourage you to review their privacy policies before
        providing any personal information.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personal information
        to outside parties. We may share anonymized, aggregate data with
        analytics providers to help us understand website usage.
      </p>

      <h2>Data Retention</h2>
      <p>
        Analytics data is retained according to Google Analytics default
        retention settings (26 months). Local storage data remains on your
        device until you clear your browser data.
      </p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Opt out of analytics tracking using browser extensions</li>
        <li>Clear cookies and local storage through your browser settings</li>
        <li>Use private/incognito browsing mode</li>
        <li>Request information about what data we have collected</li>
      </ul>

      <h2>Children's Privacy</h2>
      <p>
        Our website is not intended for children under 13 years of age. We do
        not knowingly collect personal information from children under 13.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated revision date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please visit our{" "}
        <Link to="/about/">About page</Link> or{" "}
        <Link to="/disclaimer/">Disclaimer page</Link> for more information about
        SulitFinds.
      </p>
    </div>
  );
}
