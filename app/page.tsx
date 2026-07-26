import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />

      <section id="home" className="hero">
        <div className="hero-container">
          <div className="badge">
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            AI Tools • AI Videos • AI Websites
          </div>

          <h1>Simple AI Tools for Every Business</h1>

          <p>
            We build AI Tools, AI Chatbots, AI Websites, AI Videos, Product
            Ads, Logo &amp; Brand Design, and Business Automation to save time
            and grow your business.
          </p>

          <div className="hero-btns">
            <Link href="/services" className="btn btn-primary">
              Explore AI Services
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>About NorAI Technologies</h2>
          <p>
            Engineering accessible, modular AI infrastructure to simplify
            complex daily digital workflows.
          </p>
        </div>
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
            <Link href="/about" className="btn btn-primary">
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="stat-grid">
            <div className="stat-item">
              <div className="stat-number">4</div>
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

      <section className="section">
        <div className="section-header">
          <h2>Our Micro-SaaS Product Suite</h2>
          <p>
            Purpose-built utilities designed for hiring teams, continuous
            learners, community managers, and executives.
          </p>
        </div>
        <div className="grid-4">
          <div className="service-card">
            <div className="icon-box">
              <i className="fa-solid fa-file-user"></i>
            </div>
            <h3>AI Resume Shortlister</h3>
            <p>
              Automates bulk candidate resume parsing, soft-skills
              extraction, and precise qualification scoring against job
              descriptions.
            </p>
            <span className="service-tag">B2B SaaS / Recruiter Tool</span>
          </div>
          <div className="service-card">
            <div className="icon-box">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3>Course Note-Taker</h3>
            <p>
              Transforms YouTube and Udemy video links into structured
              Markdown study notes, flashcards, key takeaways, and quizzes.
            </p>
            <span className="service-tag">Freemium Productivity</span>
          </div>
          <div className="service-card">
            <div className="icon-box">
              <i className="fa-solid fa-comments"></i>
            </div>
            <h3>Community Chat Digest</h3>
            <p>
              Processes WhatsApp/Facebook chat logs to extract action items,
              key decision logs, and topic breakdowns.
            </p>
            <span className="service-tag">Community Management</span>
          </div>
          <div className="service-card">
            <div className="icon-box">
              <i className="fa-solid fa-rss"></i>
            </div>
            <h3>Smart Dainik News</h3>
            <p>
              Aggregates complex news feeds into personalized,
              executive-ready daily summaries delivered straight to inbox.
            </p>
            <span className="service-tag">Executive Briefings</span>
          </div>
        </div>
        <div className="view-all-wrap">
          <Link href="/services" className="btn btn-secondary">
            View All Services <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Why Choose NorAI</h2>
          <p>
            We keep things lightweight, fast, and reliable so your team can
            focus on decisions, not data wrangling.
          </p>
        </div>
        <div className="grid-4">
          <div className="feature-card">
            <div className="icon-box">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <h3>Lightning Fast</h3>
            <p>
              Optimized LLM pipelines return structured results in under a
              second on average, so tools feel instant, not batch-processed.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon-box">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Reliable by Design</h3>
            <p>
              Every micro-tool runs on automated, monitored pipelines built
              to stay available around the clock.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon-box">
              <i className="fa-solid fa-sack-dollar"></i>
            </div>
            <h3>Cost Effective</h3>
            <p>
              Lightweight models keep running costs low, so you get
              enterprise-grade output at micro-SaaS pricing.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon-box">
              <i className="fa-solid fa-plug"></i>
            </div>
            <h3>Easy Integration</h3>
            <p>
              Simple APIs and clean documentation mean your team can plug a
              tool in and start using it the same day.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cta-banner">
          <div>
            <h2>Ready to automate your workflow?</h2>
            <p>
              Talk to our team about integrating a micro-SaaS utility into
              your existing stack, no long onboarding required.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary">
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}