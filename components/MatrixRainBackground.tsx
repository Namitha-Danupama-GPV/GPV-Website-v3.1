"use client";

import React, { useEffect, useRef } from "react";

interface MatrixRainBackgroundProps {
  color?: string;
  fontSize?: number;
  speed?: number;
}

export default function MatrixRainBackground({
  color = "#00FF66",
  fontSize = 16,
  speed = 33,
}: MatrixRainBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const chars = "01010101010101010101010101010101";
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array.from({ length: columns }).map(() => Math.floor(Math.random() * -50));

    let lastTime = 0;

    const draw = (currentTime: number) => {
      if (currentTime - lastTime >= speed) {
        lastTime = currentTime;

        // Semi-transparent black fill to create fading trailing effect
        ctx.fillStyle = "rgba(2, 11, 5, 0.12)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = color;
        ctx.font = `${fontSize}px monospace`;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;

        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Brighter lead character
          if (Math.random() > 0.85) {
            ctx.fillStyle = "#FFFFFF";
          } else {
            ctx.fillStyle = color;
          }

          ctx.fillText(char, x, y);

          if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }

          drops[i]++;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, fontSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
