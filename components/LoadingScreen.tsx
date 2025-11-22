"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DecryptedText from "@/components/DecryptedText";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Durasi loading (misal 3 detik)
    const duration = 3000; 
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Robot Container */}
      <div className="relative w-48 h-48 mb-12">
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">
          <defs>
            <clipPath id="robot-clip">
               <path d="M60,60 L140,60 L140,140 L60,140 Z" />
               <rect x="95" y="30" width="10" height="30" />
               <circle cx="100" cy="25" r="10" />
               <rect x="40" y="90" width="20" height="40" />
               <rect x="140" y="90" width="20" height="40" />
            </clipPath>
          </defs>

          {/* Robot Outline (Empty/Dark) */}
          <g className="text-green-900/30">
             <path fill="none" stroke="currentColor" strokeWidth="2" d="M60,60 L140,60 L140,140 L60,140 Z" />
             <rect x="95" y="30" width="10" height="30" fill="none" stroke="currentColor" strokeWidth="2" />
             <circle cx="100" cy="25" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
             <rect x="40" y="90" width="20" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
             <rect x="140" y="90" width="20" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
          </g>

          {/* Filling Animation (Green Liquid) */}
          <g clipPath="url(#robot-clip)">
            <motion.rect
              x="0"
              y="0"
              width="200"
              height="200"
              fill="#22c55e"
              initial={{ y: 150 }}
              animate={{ y: 150 - (progress * 1.6) }}
              transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            />
            {/* Bubbles effect inside liquid */}
            <motion.circle cx="80" cy="120" r="3" fill="#4ade80" animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.circle cx="120" cy="100" r="2" fill="#4ade80" animate={{ y: [0, -15, 0], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
          </g>
          
          {/* Eyes (Always visible on top) */}
          <rect x="75" y="80" width="20" height="20" fill="#020617" />
          <rect x="105" y="80" width="20" height="20" fill="#020617" />
        </svg>
      </div>

      {/* Loading Text */}
      <div className="flex flex-col items-center gap-2 font-mono">
        <div className="text-green-500 text-xl tracking-widest font-bold h-8">
          <DecryptedText 
            text="SYSTEM_RECHARGE" 
            animateOn="view" 
            revealDirection="start" 
            sequential={true}
            speed={100}
            maxIterations={15}
            characters="X#@!%&"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </div>
        <div className="text-green-400/70 text-sm">
          {Math.round(progress)}%
        </div>
        
        {/* Progress Bar Line */}
        <div className="w-64 h-1 bg-green-900/30 mt-4 relative overflow-hidden rounded-full">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-green-500 shadow-[0_0_10px_#22c55e]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
