export default function AIOrb() {
  const nodes = [
    { cx: 50, cy: 20, r: 4, delay: "0s" },
    { cx: 82, cy: 38, r: 3, delay: "0.4s" },
    { cx: 85, cy: 68, r: 5, delay: "0.8s" },
    { cx: 55, cy: 88, r: 3.5, delay: "1.2s" },
    { cx: 18, cy: 70, r: 4, delay: "1.6s" },
    { cx: 15, cy: 35, r: 3, delay: "2s" },
    { cx: 50, cy: 50, r: 6, delay: "0s" },
  ];

  const links = [
    [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5],
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  ];

  return (
    <div className="ai-orb-wrap" aria-hidden="true">
      <div className="ai-orb-glow" />
      <svg viewBox="0 0 100 100" className="ai-orb-svg">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </radialGradient>
        </defs>

        {links.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            className="ai-orb-link"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}

        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="url(#nodeGlow)"
            className="ai-orb-node"
            style={{ animationDelay: n.delay }}
          />
        ))}
      </svg>

      <div className="ai-orb-particles">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={`particle p${i + 1}`} />
        ))}
      </div>
    </div>
  );
}