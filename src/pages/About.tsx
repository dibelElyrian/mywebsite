import SEO from "../components/SEO";

export default function About() {
  return (
    <div className="space-y-6">
      <SEO
        title="About"
        description="Learn why SulitFinds helps Filipino shoppers find budget-friendly recommendations."
        canonicalPath="/about"
      />

      <h1 className="text-3xl font-bold text-text">
        About SulitFinds
      </h1>
      <p className="text-base text-muted">
        SulitFinds is a practical guide for Filipino shoppers who want clear,
        budget-friendly recommendations. We focus on value, availability, and
        everyday use cases without exaggeration or hype.
      </p>
      <p className="text-base text-muted">
        We review listings, specs, and real-world feedback to help you compare
        options across Shopee, TikTok Shop, and other trusted marketplaces.
      </p>
    </div>
  );
}
