import React, { useMemo } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const text = "Happy Birthday";

function Present() {
  const dustCount = 90;
  const burstCount = 48;

  const colors = [
    "#FFD700",
    "#FF69B4",
    "#7DF9FF",
    "#ADFF2F",
    "#FF8C00",
    "#A78BFA",
  ];

  // 🔒 Randomized ONCE (no rerender chaos)
  const dust = useMemo(
    () =>
      Array.from({ length: dustCount }).map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const dist = 120 + Math.random() * 180;
        return {
          id: i,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          color: colors[i % colors.length],
          delay: Math.random() * 0.8,
        };
      }),
    []
  );

  const burst = useMemo(
    () =>
      Array.from({ length: burstCount }).map((_, i) => {
        const angle = (i / burstCount) * Math.PI * 2;
        return {
          id: i,
          x: Math.cos(angle) * 260,
          y: Math.sin(angle) * 260,
          color: colors[i % colors.length],
        };
      }),
    []
  );

  return (
    <SectionWrapper>
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none">

        {/* ✨ MAGIC DUST — SINGLE PASS */}
        {dust.map((p) => (
          <motion.span
            key={p.id}
            className="absolute w-[3px] h-[3px] rounded-full"
            style={{
              backgroundColor: p.color,
              boxShadow: "0 0 8px currentColor",
            }}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: p.x,
              y: p.y,
            }}
            transition={{
              duration: 2.6,
              delay: p.delay,
              ease: "easeOut",
            }}
          />
        ))}

        {/* 🎆 BURST — SHORT & STRONG */}
        {burst.map((p) => (
          <motion.span
            key={p.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: p.color,
              boxShadow: "0 0 14px currentColor",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.15, 0],
              opacity: [0, 1, 0],
              x: p.x,
              y: p.y,
            }}
            transition={{
              duration: 1.9,
              delay: 1.6,
              ease: "easeOut",
            }}
          />
        ))}

        {/* 🔤 TEXT FORMATION */}
        <motion.h1
          className="absolute flex gap-[2px] text-5xl md:text-6xl font-extrabold text-customBlue"
          style={{
            textShadow:
              "0 0 18px rgba(96,165,250,0.9), 0 0 36px rgba(96,165,250,0.6)",
          }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.085,
                delayChildren: 1.1,
              },
            },
          }}
        >
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{
                type: "spring",
                stiffness: 360,
                damping: 24,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </SectionWrapper>
  );
}

export default Present;
