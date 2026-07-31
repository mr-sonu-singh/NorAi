"use client";

import { useRef, useState, ReactNode } from "react";

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    setTilt({ rx: (0.5 - py) * maxTilt, ry: (px - 0.5) * maxTilt });
    setGlow({ x: px * 100, y: py * 100 });
  }

  function handleMouseLeave() {
    setTilt({ rx: 0, ry: 0 });
    setGlow({ x: 50, y: 50 });
  }

  return (
    <div className="tilt-outer">
      <div
        ref={ref}
        className={`tilt-card ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          // @ts-expect-error -- custom props for the glow spotlight
          "--glow-x": `${glow.x}%`,
          "--glow-y": `${glow.y}%`,
        }}
      >
        <div className="tilt-card-glow" />
        <div className="tilt-card-content">{children}</div>
        <div className="tilt-card-border" />
      </div>
    </div>
  );
}