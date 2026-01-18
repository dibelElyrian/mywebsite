import SEO from "../components/SEO";

export default function Disclaimer() {
  return (
    <div className="space-y-6">
      <SEO
        title="Disclaimer"
        description="Affiliate disclosure and content disclaimer for SulitFinds."
        canonicalPath="/disclaimer"
      />

      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Disclaimer & Affiliate Disclosure
      </h1>
      <p className="text-base text-slate-600 dark:text-slate-300">
        SulitFinds participates in affiliate programs, including Shopee and
        TikTok Shop. Some links on this site are affiliate links, which means we
        may earn a commission if you make a purchase. This does not add any
        extra cost to you and helps keep this site running.
      </p>
      <p className="text-base text-slate-600 dark:text-slate-300">
        The information provided on this website is for general informational
        purposes only and does not constitute financial, professional, or
        investment advice.
      </p>
    </div>
  );
}
