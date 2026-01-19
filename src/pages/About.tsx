import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function About() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <SEO
        title="About"
        description="Learn why SulitFinds helps Filipino shoppers find budget-friendly recommendations."
        canonicalPath="/about"
      />

      <h1 className="text-3xl font-bold text-text">
        About SulitFinds
      </h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text">What We Do</h2>
        <p className="text-base leading-relaxed text-muted">
          SulitFinds is a practical guide for Filipino shoppers who want clear,
          budget-friendly recommendations. We focus on value, availability, and
          everyday use cases without exaggeration or hype.
        </p>
        <p className="text-base leading-relaxed text-muted">
          We review listings, specs, and real-world feedback to help you compare
          options across Shopee, TikTok Shop, and other trusted marketplaces.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text">Our Approach</h2>
        <ul className="list-inside list-disc space-y-2 text-base text-muted">
          <li>We research products based on specs, seller ratings, and buyer reviews.</li>
          <li>We do not claim personal testing unless explicitly stated.</li>
          <li>We prioritize practical value over trends or hype.</li>
          <li>We update posts when products become unavailable or better options appear.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text">Affiliate Disclosure</h2>
        <p className="text-base leading-relaxed text-muted">
          SulitFinds earns a small commission when you purchase through our affiliate links. 
          This helps us keep the site running. We only recommend products we believe offer 
          genuine value, and affiliate partnerships do not influence our recommendations.
        </p>
        <p className="text-base text-muted">
          For full details, see our{" "}
          <Link to="/disclaimer" className="link">Disclaimer</Link> and{" "}
          <Link to="/privacy" className="link">Privacy Policy</Link>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text">Contact</h2>
        <p className="text-base leading-relaxed text-muted">
          Have questions, suggestions, or feedback? Reach out through our social channels 
          or check back as we add more ways to connect.
        </p>
      </section>
    </div>
  );
}
