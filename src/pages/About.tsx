import SEO from "../components/SEO";

export default function About() {
  return (
    <div className="space-y-6">
      <SEO
        title="About"
        description="Learn why SulitFinds helps Filipino shoppers find budget-friendly recommendations."
        canonicalPath="/about"
      />

      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        About SulitFinds
      </h1>
      <p className="text-base text-slate-600 dark:text-slate-300">
        SulitFinds is a practical resource for Filipino shoppers who want to make
        the most of every peso. We curate affordable recommendations, buying
        guides, and product roundups that focus on value, availability, and
        real-world use cases.
      </p>
      <p className="text-base text-slate-600 dark:text-slate-300">
        Our goal is to help you discover budget-friendly picks across Shopee,
        TikTok Shop, and other trusted marketplaces without the overwhelm.
      </p>
    </div>
  );
}
