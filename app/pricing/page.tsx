import Link from "next/link";
import type { Metadata } from "next";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for NorAI Technologies' micro-SaaS AI tools — starter, growth, and enterprise plans.",
};

const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "/month",
    desc: "For individuals and small teams trying one tool.",
    features: [
      "1 micro-SaaS tool of your choice",
      "Up to 500 requests / month",
      "Email support",
      "Standard API access",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹8,999",
    period: "/month",
    desc: "For growing teams that need multiple tools.",
    features: [
      "All 5 core micro-SaaS tools",
      "Up to 5,000 requests / month",
      "Priority email + chat support",
      "Custom API integration help",
      "Usage analytics dashboard",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For organizations needing scale and custom pipelines.",
    features: [
      "Unlimited requests",
      "Custom AI agent development",
      "Dedicated onboarding & support",
      "SLA-backed uptime guarantee",
      "On-prem / private deployment options",
    ],
    cta: "Talk to Sales",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <h1>Simple, Transparent Pricing</h1>
        <p>
          Pick a plan that fits your team. Every plan includes access to our
          fast, reliable AI pipelines — no hidden fees.
        </p>
      </section>

      <section id="pricing" className="section">
        <div className="pricing-grid">
          {plans.map((p) => (
            <TiltCard
              key={p.name}
              className={`pricing-card${p.highlighted ? " pricing-highlighted" : ""}`}
            >
              {p.highlighted && <div className="pricing-badge">Most Popular</div>}
              <h3>{p.name}</h3>
              <div className="pricing-price">
                <span className="pricing-amount">{p.price}</span>
                <span className="pricing-period">{p.period}</span>
              </div>
              <p className="pricing-desc">{p.desc}</p>
              <ul className="pricing-features">
                {p.features.map((f) => (
                  <li key={f}>
                    <i className="fa-solid fa-check" aria-hidden="true"></i>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`btn ${p.highlighted ? "btn-primary" : "btn-secondary"} pricing-cta`}
              >
                {p.cta}
              </Link>
            </TiltCard>
          ))}
        </div>

        <p className="pricing-note">
          Need a custom quote or a plan not listed here?{" "}
          <Link href="/contact">Contact our team</Link>.
        </p>
      </section>
    </>
  );
}