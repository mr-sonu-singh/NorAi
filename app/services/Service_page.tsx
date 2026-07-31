import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — NorAI Technologies",
};

const services = [
  {
    icon: "fa-file-user",
    title: "AI Resume Shortlister",
    desc: "Automates bulk candidate resume parsing, soft-skills extraction, and precise qualification scoring against job descriptions.",
    tag: "B2B SaaS / Recruiter Tool",
  },
  {
    icon: "fa-graduation-cap",
    title: "Course Note-Taker",
    desc: "Transforms YouTube and Udemy video links into structured Markdown study notes, flashcards, key takeaways, and quizzes.",
    tag: "Freemium Productivity",
  },
  {
    icon: "fa-comments",
    title: "Community Chat Digest",
    desc: "Processes WhatsApp/Facebook chat logs to extract action items, key decision logs, and topic breakdowns.",
    tag: "Community Management",
  },
  {
    icon: "fa-rss",
    title: "Smart Dainik News",
    desc: "Aggregates complex news feeds into personalized, executive-ready daily summaries delivered straight to inbox.",
    tag: "Executive Briefings",
  },
  {
    icon: "fa-vr-cardboard",
    title: "AR/VR Experience Studio",
    desc: "Builds immersive AR/VR product demos, virtual showrooms, and spatial-computing experiences for brands and training use cases.",
    tag: "Immersive / Spatial Computing",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <section className="page-hero">
        <h1>Our Micro-SaaS Product Suite</h1>
        <p>
          Purpose-built utilities designed for hiring teams, continuous
          learners, community managers, and executives.
        </p>
      </section>

      <section id="services" className="section">
        <div className="grid-4">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="icon-box">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}