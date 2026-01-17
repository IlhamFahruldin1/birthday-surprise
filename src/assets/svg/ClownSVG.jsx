import React from "react";

function ClownSVG({ size = 140 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
    >
      {/* Face */}
      <circle cx="100" cy="100" r="60" fill="#FFD6A5" />

      {/* Hair */}
      <circle cx="40" cy="100" r="30" fill="#FF4D6D" />
      <circle cx="160" cy="100" r="30" fill="#FF4D6D" />

      {/* Eyes */}
      <circle cx="80" cy="90" r="6" fill="#000" />
      <circle cx="120" cy="90" r="6" fill="#000" />

      {/* Nose */}
      <circle cx="100" cy="105" r="10" fill="#FF3B3B" />

      {/* Smile */}
      <path
        d="M75 120 Q100 140 125 120"
        stroke="#000"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default ClownSVG;
