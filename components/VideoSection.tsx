"use client";

import { useState } from "react";

export default function VideoSection({
  videoId,
  thumbnail,
}: {
  videoId: string; // YouTube video ID only, e.g. "dQw4w9WgXcQ"
  thumbnail?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="video-wrap">
      {!playing ? (
        <button
          className="video-thumb"
          onClick={() => setPlaying(true)}
          aria-label="Play demo video"
          style={
            thumbnail
              ? { backgroundImage: `url(${thumbnail})` }
              : undefined
          }
        >
          <span className="video-play-btn">
            <i className="fa-solid fa-play" aria-hidden="true"></i>
          </span>
        </button>
      ) : (
        <iframe
          className="video-iframe"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="NorAI Technologies product demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}