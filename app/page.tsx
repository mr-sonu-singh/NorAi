import Link from "next/link";
import type { Metadata } from "next";
import AIOrb from "@/components/AIOrb";

export const metadata: Metadata = {
  title: "NorAI Technologies — Simple AI Tools for Every Business",
  description:
    "NorAI Technologies builds AI tools, AI chatbots, AI websites, AI videos, and business automation utilities that save time and help you grow.",
};

const processSteps = [
  {
    step: "01",
    icon: "fa-comments",
    title: "Tell Us Your Workflow",
    desc: "Share the repetitive task or bottleneck you want handled — hiring, content, community, or reporting.",
  },
  {
    step: "02",
    icon: "fa-wand-magic-sparkles",
    title: "We Match a Tool",
    desc: "We map your use case to one of our micro-SaaS utilities or scope a custom automation pipeline.",
  },
  {
    step: "03",
    icon: "fa-plug",
    title: "Plug In & Go Live",
    desc: "Simple API integration or a ready-made dashboard — most teams are live within days, not months.",
  },
];

const testimonials = [
  {
    quote:
      "The resume shortlister cut our first-pass screening time from two days to about twenty minutes. It just works.",
    name: "Priya M.",
    role: "Talent Lead, mid-size recruiting firm",
  },
  {
    quote:
      "We plugged the chat digest into our community WhatsApp group and finally have a clean weekly summary for leadership.",
    name: "Arjun K.",
    role: "Community Manager",
  },
  {
    quote:
      "Fast to set up, honestly priced, and support actually responds. Rare combination for a tool this size.",
    name: "Meera S.",
    role: "Operations Manager",
  },
];

const faqs = [
  {
    q: "How quickly can we get a tool live?",
    a: "Most of our micro-SaaS utilities can be integrated within a few days since they run on simple, documented APIs. Custom automation pipelines typically take one to two weeks depending on scope.",
  },
  {
    q: "Do you offer custom AI solutions beyond the listed tools?",
    a: "Yes — alongside our core micro-tools we build custom AI agents, chatbots, and business automation pipelines tailored to your workflow.",
  },
  {
    q: "What does pricing look like?",
    a: "Pricing depends on the tool and your usage volume. Reach out through the contact page with your use case and we'll share a straightforward quote.",
  },
  {
    q: "Is our data secure?",
    a: "We run automated, monitored pipelines and don't retain your data beyond what's needed to process a request. For enterprise clients we can discuss specific data-handling and compliance requirements directly.",
  },
];

export default function HomePage() {
  return (
    <>

      <section id="home" className="hero">
        <div className="hero-container hero-grid">
          <div className="hero-text">
            <div className="badge">
              <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
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
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Talk to Us
              </Link>
            </div>
          </div>

          <AIOrb />
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
              Learn More <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
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
            <div className="icon-box" aria-hidden="true">
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
            <div className="icon-box" aria-hidden="true">
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
            <div className="icon-box" aria-hidden="true">
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
            <div className="icon-box" aria-hidden="true">
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
            View All Services <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>
            From first conversation to a live integration — usually in days,
            not months.
          </p>
        </div>
        <div className="grid-4 process-grid">
          {processSteps.map((p) => (
            <div className="process-card" key={p.step}>
              <div className="process-step">{p.step}</div>
              <div className="icon-box" aria-hidden="true">
                <i className={`fa-solid ${p.icon}`}></i>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
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
            <div className="icon-box" aria-hidden="true">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <h3>Lightning Fast</h3>
            <p>
              Optimized LLM pipelines return structured results in under a
              second on average, so tools feel instant, not batch-processed.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon-box" aria-hidden="true">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Reliable by Design</h3>
            <p>
              Every micro-tool runs on automated, monitored pipelines built
              to stay available around the clock.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon-box" aria-hidden="true">
              <i className="fa-solid fa-sack-dollar"></i>
            </div>
            <h3>Cost Effective</h3>
            <p>
              Lightweight models keep running costs low, so you get
              enterprise-grade output at micro-SaaS pricing.
            </p>
          </div>
          <div className="feature-card">
            <div className="icon-box" aria-hidden="true">
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
        <div className="section-header">
          <h2>What Teams Are Saying</h2>
          <p>Real feedback from teams running NorAI tools in production.</p>
        </div>
        <div className="grid-4 testimonial-grid">
          {testimonials.map((t) => (
            <figure className="testimonial-card" key={t.name}>
              <i className="fa-solid fa-quote-left" aria-hidden="true"></i>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Can't find what you're looking for? Reach out on the contact page.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
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
            Get Started <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </section>
    </>
  );
}