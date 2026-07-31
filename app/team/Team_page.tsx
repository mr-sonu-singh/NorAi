import type { Metadata } from "next";
import TeamCard from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the founding engineering team at NorAI Technologies — spatial computing, AI orchestration, design, and growth experts building micro-SaaS AI tools.",
};

interface TeamMember {
  name: string;
  role: string;
  degree: string;
  img: string;
  bio: string;
}

const team: TeamMember[] = [
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
      <section className="page-hero">
        <h1>Founding Engineering Team</h1>
        <p>
          An agile full-stack team combining military discipline,
          cutting-edge spatial computing, strategic marketing, UI/UX design,
          and AI orchestration.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: team.map((m, i) => ({
              "@type": "Person",
              position: i + 1,
              name: m.name,
              jobTitle: m.role,
            })),
          }),
        }}
      />

      <section id="team" className="section">
        <div className="grid-5">
          {team.map((m) => (
            <TeamCard member={m} key={m.name} />
          ))}
        </div>
      </section>
    </>
  );
}