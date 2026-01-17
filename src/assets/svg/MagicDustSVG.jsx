import React from "react";

function MagicDustSVG({ size = 420 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 600 300"
      fill="none"
    >
      {/* MAGIC PARTICLES */}
      {[...Array(40)].map((_, i) => {
        const angle = (i * 360) / 40;
        const delay = i * 0.03;

        return (
          <circle
            key={i}
            cx="300"
            cy="150"
            r="3"
            fill="rgba(255,215,0,0.9)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 300 150`}
              to={`360 300 150`}
              dur="2.5s"
              begin={`${delay}s`}
              repeatCount="1"
            />
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2.5s"
              begin={`${delay}s`}
              repeatCount="1"
            />
          </circle>
        );
      })}

      {/* MAGIC TEXT */}
      <text
        x="300"
        y="165"
        textAnchor="middle"
        fill="#3B82F6"
        fontSize="52"
        fontWeight="800"
        style={{ letterSpacing: "2px" }}
      >
        <animate
          attributeName="opacity"
          values="0;0;1"
          dur="3.2s"
          repeatCount="1"
        />
        Happy Birthday
      </text>
    </svg>
  );
}

export default MagicDustSVG;
