import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "NorAI Technologies engineers accessible, modular AI infrastructure — lightweight LLM pipelines for fast, cost-effective structured data extraction and summarization.",
};

const stats = [
  { number: "5", label: "Core Micro-Tools" },
  { number: "< 1s", label: "Average Processing" },
  { number: "100%", label: "Automated Pipelines" },
  { number: "24/7", label: "API Availability" },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <h1>About NorAI Technologies</h1>
        <p>
          Engineering accessible, modular AI infrastructure to simplify
          complex daily digital workflows.
        </p>
      </section>
      <section id="about" className="section">
        <div className="about-card">
          <div className="about-content">
            <h3>High-Frequency AI Utilities</h3>
            <p>
              Operating out of our regional startup hub in Uttar Pradesh,
              India, NorAI Technologies specializes in building micro-SaaS
              utilities that deliver maximum value with minimal friction.
            </p>
            <p>
              We leverage lightweight, highly-optimized text LLM pipelines to
              provide fast, cost-effective, and highly accurate structured
              data extraction, summarization, and parsing tools.
            </p>
          </div>
          <dl className="stat-grid">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <dt className="stat-number">{s.number}</dt>
                <dd className="stat-label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}