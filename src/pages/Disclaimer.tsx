import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Disclaimer() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <SEO
        title="Disclaimer"
        description="Affiliate disclosure and content disclaimer for SulitFinds."
        canonicalPath="/disclaimer/"
      />

      <h1 className="text-3xl font-bold text-text">
        Disclaimer and Affiliate Disclosure
      </h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text">Affiliate Disclosure</h2>
        <p className="text-base leading-relaxed text-muted">
          SulitFinds participates in affiliate programs, including the Shopee Affiliate Program 
          and TikTok Shop Affiliate Program. This means we may earn a commission when you 
          click on affiliate links and make a purchase, at no additional cost to you.
        </p>
        <p className="text-base leading-relaxed text-muted">
          Affiliate partnerships do not influence our product recommendations. We select 
          products based on value, availability, and relevance to Filipino shoppers.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text">Content Disclaimer</h2>
        <p className="text-base leading-relaxed text-muted">
          Content on SulitFinds is provided for general informational purposes only. 
          We do not provide financial, legal, medical, or professional advice.
        </p>
        <p className="text-base leading-relaxed text-muted">
          Product information, prices, and availability are based on publicly available 
          data at the time of writing and may change without notice. Always verify 
          details on the seller's listing before making a purchase.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text">Buyer Responsibility and Safety</h2>
        <p className="text-base leading-relaxed text-muted">
          We encourage readers to do their own research before purchasing. Review seller
          ratings, product reviews, return policies, and any safety or authenticity details
          relevant to the item.
        </p>
        <p className="text-base leading-relaxed text-muted">
          Purchases are made at your own risk. SulitFinds is not liable for any loss,
          damage, injury, or dispute arising from transactions or product use.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text">Product Testing</h2>
        <p className="text-base leading-relaxed text-muted">
          Unless explicitly stated otherwise, we do not personally test products featured 
          on this site. Our recommendations are based on research including specifications, 
          seller ratings, buyer reviews, and market comparisons.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text">External Links</h2>
        <p className="text-base leading-relaxed text-muted">
          SulitFinds contains links to external websites and online marketplaces. We are 
          not responsible for the content, privacy practices, or accuracy of information 
          on these external sites.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text">Changes to This Disclaimer</h2>
        <p className="text-base leading-relaxed text-muted">
          We may update this disclaimer from time to time. Changes will be posted on this 
          page with an updated revision date.
        </p>
        <p className="text-sm text-muted">
          Last updated: January 2026
        </p>
      </section>

      <p className="text-base text-muted">
        For privacy-related information, see our{" "}
        <Link to="/privacy/" className="link">Privacy Policy</Link>.
      </p>
    </div>
  );
}
