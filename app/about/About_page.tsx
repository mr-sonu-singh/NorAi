import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — NorAI Technologies",
};

export default function AboutPage() {
  return (
    <>
      <Header />

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
          <div className="stat-grid">
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Core Micro-Tools</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">&lt; 1s</div>
              <div className="stat-label">Average Processing</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Automated Pipelines</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">API Availability</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}