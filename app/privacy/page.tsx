import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ReadingProgress from "@/components/ReadingProgress";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How NorAI Technologies collects, uses, and protects your data.",
};

const sections = [
  {
    icon: "fa-database",
    title: "Information We Collect",
    body: "When you submit our contact form, we collect your name, email address, selected tool of interest, and message content in order to respond to your inquiry.",
  },
  {
    icon: "fa-gears",
    title: "How We Use Your Information",
    body: "We use the information you provide solely to respond to inquiries, provide requested services, and improve our products. We do not sell your personal information to third parties.",
  },
  {
    icon: "fa-clock",
    title: "Data Retention",
    body: "We retain contact information only as long as needed to respond to your inquiry and maintain business records, unless you request deletion.",
  },
  {
    icon: "fa-user-shield",
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by emailing contact@norai.tech.",
  },
  {
    icon: "fa-envelope",
    title: "Contact",
    body: "Questions about this policy can be directed to contact@norai.tech.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <ReadingProgress />

      <section className="page-hero legal-hero">
        <div className="legal-hero-blob b1" />
        <div className="legal-hero-blob b2" />
        <div className="legal-badge">
          <i className="fa-solid fa-shield-halved" aria-hidden="true"></i>
          Legal
        </div>
        <h1>Privacy Policy</h1>
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
                        {s.body.split("contact@norai.tech")[1]}
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