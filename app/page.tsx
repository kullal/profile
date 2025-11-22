"use client";

import { useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Terminal, Gamepad2, Brain, Code2, User, Phone, Instagram, Mail } from "lucide-react";
import FuzzyText from "@/components/FuzzyText";
import DecryptedText from "@/components/DecryptedText";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import RetroGrid from "@/components/RetroGrid";
import Image from "next/image";

// Data Project diambil dari CV kamu
const projects = [
  {
    title: "NASA Exoplanets Identifier",
    tech: "Python, Flask, ML",
    desc: "End to end ML pipeline detecting exoplanets using NASA Kepler & TESS datasets.",
    icon: <Brain className="w-8 h-8" />,
    image: "/Exoplantropy.png"
  },
  {
    title: "NeuroScan AI",
    tech: "Deep Learning, CNN, Medical Imaging",
    desc: "MRI based brain tumor detection system using advanced CNN architecture.",
    icon: <Brain className="w-8 h-8" />,
    image: "/MRI classification.png"
  },
  {
    title: "EPL Predictor",
    tech: "Python, Scikit-learn, Data Analysis",
    desc: "Premier League match result prediction using historical data analysis.",
    icon: <Gamepad2 className="w-8 h-8" />,
    image: "/Premier League Predict.png"
  },
  {
    title: "Waste Detection System",
    tech: "YOLOv8, Streamlit",
    desc: "Real-time Organic vs Inorganic waste classification system using Computer Vision.",
    icon: <Code2 className="w-8 h-8" />,
    image: "/wasteClassification.png"
  }
];

// Tech Stack Data
const techStack = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python/4ade80" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/4ade80" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/4ade80" },
  { name: "C#", icon: "https://cdn.simpleicons.org/dotnet/4ade80" },
  { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/4ade80" },
  { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/4ade80" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/4ade80" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/4ade80" },
  { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs/4ade80" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/4ade80" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/4ade80" },
  { name: "Flask", icon: "https://cdn.simpleicons.org/flask/4ade80" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/4ade80" },
  { name: "Unity", icon: "https://cdn.simpleicons.org/unity/4ade80" },
  { name: "Blender", icon: "https://cdn.simpleicons.org/blender/4ade80" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/4ade80" },
  { name: "YOLOv8", icon: "https://cdn.simpleicons.org/ultralytics/4ade80" },
];

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

function ProjectCard({ project, i }: { project: any, i: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-slate-900 border border-green-900/50 rounded-xl overflow-hidden"
    >
      {/* Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 197, 94, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full p-6">
        {/* Project Image */}
        <div className="relative h-48 w-full mb-6 overflow-hidden rounded border border-green-900/50 group-hover:border-green-500/50 transition-colors">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
          />
          {/* Scanline overlay for image */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="flex items-center gap-3 mb-4 text-green-400">
          {project.icon}
          <h3 className="text-2xl font-bold group-hover:underline decoration-green-500 decoration-4 underline-offset-4">
            {project.title}
          </h3>
        </div>
        
        <p className="text-sm text-green-600 font-mono mb-4">[{project.tech}]</p>
        <p className="text-slate-300 text-lg">{project.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <main className="min-h-screen relative overflow-hidden selection:bg-green-900 selection:text-green-100">
          <Navbar />
          <RetroGrid />

          {/* --- HERO SECTION (FULL SCREEN CENTERED) --- */}
          <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
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
        <section id="about" className="mb-32 scroll-mt-24">
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
                  &lt; About_Me /&gt;
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
        <section id="projects" className="mb-32 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-12 border-b border-green-800 pb-4 inline-block">
            &lt; Recent Project /&gt;
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} i={i} />
            ))}
          </div>
        </section>

        {/* --- TECH STACK SECTION --- */}
        <section id="tech-stack" className="mb-32 scroll-mt-24">
           <h2 className="text-4xl font-bold mb-12 border-b border-green-800 pb-4 inline-block">
            &lt; Tech_Stack /&gt;
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="relative w-16 h-16 flex items-center justify-center bg-slate-900 border border-green-500/30 rounded-xl p-3 group-hover:border-green-500 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300">
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    width={40} 
                    height={40} 
                    unoptimized
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-green-400/70 font-mono text-sm group-hover:text-green-400 transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* --- CONNECT WITH ME (FOOTER) --- */}
      <Footer />
    </main>
      )}
    </>
  );
}