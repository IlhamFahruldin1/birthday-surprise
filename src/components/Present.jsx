import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const text = "Happy Birthday ";

function Present() {
  const dustCount = 140;
  const burstCount = 80;

  const colors = [
    "#FFD700",
    "#FF69B4",
    "#7DF9FF",
    "#ADFF2F",
    "#FF8C00",
    "#A78BFA",
  ];

  return (
    <SectionWrapper>
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden pointer-events-none">

        {/* ✨ MAGIC DUST (FLOATING) */}
        {Array.from({ length: dustCount }).map((_, i) => {
          const angle = Math.random() * 360;
          const distance = 120 + Math.random() * 200;

          return (
            <motion.span
              key={`dust-${i}`}
              className="absolute w-[3px] h-[3px] rounded-full"
              style={{
                backgroundColor: colors[i % colors.length],
                boxShadow: "0 0 10px currentColor",
              }}
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                delay: Math.random() * 1.2,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* 🎆 FINAL BURST */}
        {Array.from({ length: burstCount }).map((_, i) => {
          const angle = (i / burstCount) * 360;
          const radius = 260;

          return (
            <motion.span
              key={`burst-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: colors[i % colors.length],
                boxShadow: "0 0 16px currentColor",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                x: Math.cos((angle * Math.PI) / 180) * radius,
                y: Math.sin((angle * Math.PI) / 180) * radius,
                scale: [0, 1.2, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.6,
                delay: 2.4,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* 🔤 TEXT BUILD ANIMATION */}
        <motion.h1
          className="absolute flex gap-[2px] text-5xl md:text-6xl font-extrabold text-customBlue"
          style={{
            textShadow:
              "0 0 24px rgba(96,165,250,0.9), 0 0 48px rgba(96,165,250,0.7)",
          }}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 1.6,
              },
            },
          }}
        >
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                  scale: 0.8,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
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
