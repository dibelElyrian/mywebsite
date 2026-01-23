import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "../lib/site";

export default function About() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <SEO
        title="About"
        description="SulitFinds provides practical living guides for budget-conscious Filipinos. We answer real questions with helpful, reader-first content."
        canonicalPath="/about"
      />

      <h1 className="text-3xl font-bold text-text">
        About SulitFinds
      </h1>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text">What We Do</h2>
        <p className="text-base leading-relaxed text-muted">
          SulitFinds creates practical living guides for budget-conscious Filipinos. 
          We answer the questions you're actually searching for, from everyday tips 
          to smart buying decisions.
        </p>
        <p className="text-base leading-relaxed text-muted">
          Our goal is simple: give you genuinely helpful information first. 
          Product recommendations come second, and only when they truly help.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-text">Our Approach</h2>
        <ul className="list-inside list-disc space-y-2 text-base text-muted">
          <li>We write content that answers real questions Filipinos are asking.</li>
          <li>We prioritize reader value over affiliate links or product pushing.</li>
          <li>We research thoroughly using specs, reviews, and local context.</li>
          <li>We do not claim personal testing unless explicitly stated.</li>
          <li>We update posts when information changes or better options appear.</li>
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
          Have questions, suggestions, or feedback? Reach out using the links below.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
          <a href={`mailto:${CONTACT_EMAIL}`} className="link">
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>
    </div>
  );
}
