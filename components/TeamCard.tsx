"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  degree: string;
  img: string;
  bio: string;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function TeamCard({ member }: { member: TeamMember }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    const maxTilt = 12;
    setTilt({
      rx: (0.5 - py) * maxTilt,
      ry: (px - 0.5) * maxTilt,
    });
    setGlow({ x: px * 100, y: py * 100 });
  }

  function handleMouseLeave() {
    setTilt({ rx: 0, ry: 0 });
    setGlow({ x: 50, y: 50 });
  }

  return (
    <div className="tilt-outer">
      <div
        ref={cardRef}
        className="team-card-3d"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          // @ts-expect-error -- custom props for the glow spotlight
          "--glow-x": `${glow.x}%`,
          "--glow-y": `${glow.y}%`,
        }}
        aria-labelledby={`name-${slugify(member.name)}`}
      >
        <div className="team-card-glow" />

        <div className="team-card-layer avatar-layer">
          <Image
            src={member.img}
            alt={`Portrait of ${member.name}, ${member.role} at NorAI Technologies`}
            width={110}
            height={110}
            sizes="110px"
            className="team-avatar"
          />
        </div>

        <div className="team-card-layer text-layer">
          <h4 id={`name-${slugify(member.name)}`}>{member.name}</h4>
          <div className="role">{member.role}</div>
          <div className="degree">{member.degree}</div>
          <p>{member.bio}</p>
        </div>

        <div className="team-card-border" />
      </div>
    </div>
  );
}