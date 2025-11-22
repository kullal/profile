"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Terminal, Gamepad2, Brain, Code2, User } from "lucide-react";
import FuzzyText from "@/components/FuzzyText";
import DecryptedText from "@/components/DecryptedText";
import Image from "next/image";

// Data Project diambil dari CV kamu
const projects = [
  {
    title: "NASA Exoplanets Identifier",
    tech: "Python, Flask, ML",
    desc: "Pipeline ML end-to-end mendeteksi exoplanet menggunakan dataset NASA Kepler & TESS.",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    title: "Scaridae Expedition",
    tech: "Unity, C#, Blender",
    desc: "Game RPG Turn-based pixel art tentang ikan kakatua menyelamatkan terumbu karang.",
    icon: <Gamepad2 className="w-8 h-8" />,
  },
  {
    title: "Waste Detection System",
    tech: "YOLOv8, Streamlit",
    desc: "Sistem klasifikasi sampah real-time Organik vs Anorganik menggunakan Computer Vision.",
    icon: <Code2 className="w-8 h-8" />,
  }
];

// Komponen Background Grid Bergerak (Ala React Bits)
const RetroGrid = () => (
  <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
);

// Komponen Robot Retro Background
const RetroBot = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-10">
    <motion.svg
      viewBox="0 0 200 200"
      className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] text-green-500"
      animate={{ 
        y: [0, -15, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Kepala Robot */}
      <path fill="currentColor" d="M60,60 L140,60 L140,140 L60,140 Z" />
      {/* Mata (Berkedip) */}
      <motion.rect 
        x="75" y="80" width="20" height="20" fill="#020617" 
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.rect 
        x="105" y="80" width="20" height="20" fill="#020617" 
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
      />
      {/* Mulut */}
      <rect x="80" y="120" width="40" height="10" fill="#020617" />
      {/* Antena */}
      <rect x="95" y="30" width="10" height="30" fill="currentColor" />
      <motion.circle 
        cx="100" cy="25" r="10" fill="currentColor" 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Telinga */}
      <rect x="40" y="90" width="20" height="40" fill="currentColor" />
      <rect x="140" y="90" width="20" height="40" fill="currentColor" />
    </motion.svg>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden selection:bg-green-900 selection:text-green-100">
      <RetroGrid />

      {/* --- HERO SECTION (FULL SCREEN CENTERED) --- */}
      <section className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
        <RetroBot />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center z-20 relative"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl mb-6 text-green-600 font-bold tracking-[0.2em]"
          >
            <DecryptedText 
              text="System_Online..." 
              animateOn="both" 
              revealDirection="start" 
              sequential={true}
              speed={50}
              maxIterations={20}
              characters="kza#2!911gkc@%#o"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </motion.div>
          
          <div className="mb-8 flex justify-center">
            <FuzzyText 
              baseIntensity={0.2} 
              hoverIntensity={0.5} 
              enableHover={true}
              fontSize="clamp(3.5rem, 12vw, 9rem)"
              fontWeight={900}
              color="#4ade80"
            >
              Riski Yuniar
            </FuzzyText>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            
            <p className="text-slate-400 max-w-xl text-center leading-relaxed text-lg">
              Interest in <span className="text-green-400">Computer Vision</span>, <span className="text-green-400">AI/ML</span>, and <span className="text-green-400">Game Dev</span>. <br className="hidden md:block"/>
              Building automated pipelines & interactive experiences.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="https://github.com/kullal" target="_blank" className="group flex items-center gap-2 bg-green-900/20 border border-green-500/50 px-6 py-3 rounded hover:bg-green-500 hover:text-black transition-all hover:scale-105">
                <Github size={20} className="group-hover:scale-110 transition-transform" /> GitHub
              </a>
              <a href="https://linkedin.com/in/riski-yuniar-pratama" target="_blank" className="group flex items-center gap-2 bg-green-900/20 border border-green-500/50 px-6 py-3 rounded hover:bg-green-500 hover:text-black transition-all hover:scale-105">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 text-green-500/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </motion.div>
      </section>

      <div className="relative z-10 container mx-auto px-6 py-20 max-w-4xl">
        
        {/* --- ABOUT ME SECTION --- */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            {/* Image Container with Retro Frame */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
              <div className="absolute inset-0 border-2 border-green-500/30 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 border-2 border-green-500/30 -translate-x-4 -translate-y-4" />
              <div className="relative h-full w-full border-2 border-green-500 bg-slate-900/80 overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.6)] animate-pulse">
                <Image 
                  src="/fotoku gitar.svg" 
                  alt="Riski Yuniar" 
                  fill
                  className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                />
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <User className="w-6 h-6 text-green-400" />
                <h2 className="text-3xl font-bold text-green-400 tracking-tight">
                  &lt;About_Me /&gt;
                </h2>
              </div>
              
              <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
                <p>
                  Hello I'm <span className="text-green-400">Riksi Yuniar Pratama,</span> I am an undergraduate <span className="text-green-400 font">Computer Science Student</span> and an ordinary human being who loves to explore new things.
                </p>
                <p>
                  I believe that curiosity is the engine of progress. Exploring the unknown is not just a hobby it's what humans are supposed to do. Whether it's code, art, or the mysteries of the universe, I'm always ready for the next discovery.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section>
          <h2 className="text-4xl font-bold mb-12 border-b border-green-800 pb-4 inline-block">
            &lt;Selected_Projects /&gt;
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative bg-slate-900 border border-green-800 p-6 rounded hover:border-green-400 transition-colors"
              >
                {/* Efek Hover Retro */}
                <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="mb-4 text-green-400">{project.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:underline decoration-green-500 decoration-4 underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="text-sm text-green-600 font-mono mb-4">[{project.tech}]</p>
                  <p className="text-slate-300 text-lg">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}