import AffiliateLink from "./AffiliateLink";

type ProductRecommendationProps = {
  name: string;
  description: string;
  url: string;
};

export default function ProductRecommendation({
  name,
  description,
  url
}: ProductRecommendationProps) {
  const isTikTok = /tiktok/i.test(url);
  const ctaLabel = isTikTok ? "View on TikTok Shop" : "Check on Shopee";

  return (
    <section className="card border-[color:var(--color-accent)]">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-text">
            {name}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-muted">
          {description}
        </p>
        <AffiliateLink
          href={url}
          className="btn-primary"
        >
          {ctaLabel}
        </AffiliateLink>
      </div>
    </section>
  );
}
