import SEO from "../components/SEO";

export default function Disclaimer() {
  return (
    <div className="space-y-6">
      <SEO
        title="Disclaimer"
        description="Affiliate disclosure and content disclaimer for SulitFinds."
        canonicalPath="/disclaimer"
      />

      <h1 className="text-3xl font-bold text-text">
        Disclaimer & Affiliate Disclosure
      </h1>
      <p className="text-base text-muted">
        SulitFinds participates in affiliate programs, including Shopee and
        TikTok Shop. Some links are affiliate links, which means we may earn a
        commission if you purchase through them, at no extra cost to you.
      </p>
      <p className="text-base text-muted">
        Content is provided for general information only. We do not offer
        financial, professional, or investment advice, and we do not claim
        personal product testing.
      </p>
    </div>
  );
}
