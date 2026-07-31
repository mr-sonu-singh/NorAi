import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team — NorAI Technologies",
};

const team = [
  {
    name: "Dhruw Singh",
    role: "Founder",
    degree: "B.Sc",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    bio: "Retd. Indian Army (Corps of Signals) after 30 years of distinguished military service. Leads strategic operations and administrative leadership.",
  },
  {
    name: "Sonu Singh",
    role: "AR-VR / AI Engineer",
    degree: "BCA",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    bio: "Returned from Japan VR/AR Summit. Specializes in spatial computing, immersive tech, and modern AI model pipelines.",
  },
  {
    name: "Annant",
    role: "Digital Marketing",
    degree: "B.Com",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
    bio: "Drives brand development, inbound marketing pipelines, SEO strategies, and corporate client acquisition.",
  },
  {
    name: "Rishabh",
    role: "Design & Visualisation",
    degree: "B.Tech",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80",
    bio: "Focuses on UI/UX architecture, visual rendering, interactive frontend design, and product aesthetics.",
  },
  {
    name: "Gaurav Singh",
    role: "AI Engineer / Orchestration",
    degree: "B.Tech",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    bio: "Builds AI agents, workflows, and automation using modern AI models, ensuring smart, reliable, and scalable AI solutions.",
  },
];

export default function TeamPage() {
  return (
    <>
      <Header />

      <section className="page-hero">
        <h1>Founding Engineering Team</h1>
        <p>
          An agile full-stack team combining military discipline,
          cutting-edge spatial computing, strategic marketing, UI/UX design,
          and AI orchestration.
        </p>
      </section>

      <section id="team" className="section">
        <div className="grid-5">
          {team.map((m) => (
            <div className="team-card" key={m.name}>
              <Image
                src={m.img}
                alt={m.name}
                width={110}
                height={110}
                className="team-avatar"
              />
              <h4>{m.name}</h4>
              <div className="role">{m.role}</div>
              <div className="degree">{m.degree}</div>
              <p>{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}