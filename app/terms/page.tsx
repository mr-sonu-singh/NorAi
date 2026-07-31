import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ReadingProgress from "@/components/ReadingProgress";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using NorAI Technologies' products and services.",
};

const sections = [
  {
    icon: "fa-file-signature",
    title: "Acceptance of Terms",
    body: "By using NorAI Technologies' tools and services, you agree to these terms. If you do not agree, please do not use our services.",
  },
  {
    icon: "fa-toolbox",
    title: "Use of Services",
    body: "Our micro-SaaS tools are provided for legitimate business use. You agree not to misuse the services, attempt unauthorized access, or use them for unlawful purposes.",
  },
  {
    icon: "fa-copyright",
    title: "Intellectual Property",
    body: "All content, branding, and underlying technology on this site remain the property of NorAI Technologies Pvt. Ltd.",
  },
  {
    icon: "fa-scale-balanced",
    title: "Limitation of Liability",
    body: "NorAI Technologies provides its services on an \"as is\" basis and is not liable for indirect or consequential damages arising from use of our tools.",
  },
  {
    icon: "fa-rotate",
    title: "Changes to Terms",
    body: "We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the revised terms.",
  },
  {
    icon: "fa-envelope",
    title: "Contact",
    body: "Questions? Email contact@norai.tech.",
  },
];

export default function TermsPage() {
  return (
    <>
      <ReadingProgress />

      <section className="page-hero legal-hero">
        <div className="legal-hero-blob b1" />
        <div className="legal-hero-blob b2" />
        <div className="legal-badge">
          <i className="fa-solid fa-file-contract" aria-hidden="true"></i>
          Legal
        </div>
        <h1>Terms of Service</h1>
        <p>Last updated: July 2026</p>
      </section>

      <section className="section">
        <div className="legal-card">
          {sections.map((s, i) => (
            <ScrollReveal delay={i * 80} key={s.title}>
              <div className="legal-section">
                <div className="legal-section-icon">
                  <i className={`fa-solid ${s.icon}`} aria-hidden="true"></i>
                </div>
                <div className="legal-section-body">
                  <span className="legal-section-num">{String(i + 1).padStart(2, "0")}</span>
                  <h2>{s.title}</h2>
                  <p>
                    {s.body.includes("contact@norai.tech") ? (
                      <>
                        {s.body.split("contact@norai.tech")[0]}
                        <a href="mailto:contact@norai.tech">contact@norai.tech</a>
                      </>
                    ) : (
                      s.body
                    )}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}