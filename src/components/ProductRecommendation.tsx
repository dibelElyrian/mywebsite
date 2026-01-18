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
    <section className="rounded-2xl border border-emerald-200/70 bg-emerald-50/40 p-6 shadow-sm dark:border-emerald-900/60 dark:bg-emerald-950/30">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {name}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
        <a
          href={url}
          target="_blank"
          rel="sponsored noopener"
          className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
