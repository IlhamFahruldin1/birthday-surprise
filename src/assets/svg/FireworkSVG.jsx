import React from "react";

function FireworkTextSVG({ size = 420 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 600 300"
      fill="none"
    >
      {/* Firework particles */}
      {[...Array(24)].map((_, i) => {
        const angle = (i * 360) / 24;
        return (
          <line
            key={i}
            x1="300"
            y1="150"
            x2="300"
            y2="30"
            stroke="gold"
            strokeWidth="4"
            strokeLinecap="round"
            transform={`rotate(${angle} 300 150)`}
          >
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1.6s"
              repeatCount="1"
              begin="0s"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              values="0;1.3;0"
              dur="1.6s"
              repeatCount="1"
              additive="sum"
            />
          </line>
        );
      })}

      {/* Text reveal */}
      <text
        x="300"
        y="165"
        textAnchor="middle"
        fill="#3B82F6"
        fontSize="48"
        fontWeight="800"
        style={{ letterSpacing: "2px" }}
      >
        <animate
          attributeName="opacity"
          values="0;0;1"
          dur="2.2s"
          repeatCount="1"
        />
        Happy Birthday
      </text>
    </svg>
  );
}

export default FireworkTextSVG;
