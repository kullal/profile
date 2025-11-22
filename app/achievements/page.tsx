"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RetroGrid from "@/components/RetroGrid";
import Image from "next/image";

// Achievement Data
const achievements = [
  {
    title: "NASA International Space Apps Global Nominee",
    issuer: "NASA Space Apps Jakarta",
    date: "2025",
    desc: "Selected as a Global Nominee representing NASA Space Apps Jakarta for the “Best Mission Concept” category.",
    image: "/fotbar nasa.jpeg",
    icon: <Award className="w-8 h-8 text-blue-400" />
  }
];

// Certificate Data
const certificates = [
  {
    title: "Belajar Dasar DevOps",
    issuer: "Dicoding Indonesia",
    date: "2024",
    desc: "Completed the foundational course on DevOps methodologies and practices.",
    image: "/sertificat course dicoding devops.jpg",
    icon: <Award className="w-8 h-8 text-yellow-400" />
  },
  {
    title: "CCNA Introduction to Networks",
    issuer: "Cisco",
    date: "2024",
    desc: "Certified in network fundamentals, IP connectivity, and network access.",
    image: "/CCNA Introduction to Network.jpg",
    icon: <Award className="w-8 h-8 text-green-400" />
  }
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen relative overflow-hidden selection:bg-green-900 selection:text-green-100 bg-slate-950">
      <Navbar />
      <RetroGrid />

      <div className="relative z-10 container mx-auto px-6 py-32 max-w-4xl">
        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-12 border-b border-green-800 pb-4 inline-block text-green-400">
            &lt; Achievements /&gt;
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((item, i) => (
              <AchievementCard key={i} item={item} i={i} />
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-12 border-b border-green-800 pb-4 inline-block text-green-400">
            &lt; Certificates /&gt;
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((item, i) => (
              <AchievementCard key={i} item={item} i={i} />
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

function AchievementCard({ item, i }: { item: any, i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: i * 0.1 }}
      className="bg-slate-900/50 border border-green-900/50 p-6 rounded-xl hover:border-green-500/50 transition-colors group relative overflow-hidden h-full flex flex-col"
    >
      <div className="relative z-10 flex flex-col h-full">
        {/* Image Container */}
        <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg border border-green-900/50 group-hover:border-green-500/50 transition-colors shrink-0">
          <Image 
            src={item.image} 
            alt={item.title} 
            fill 
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
          />
          {/* Scanline overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none opacity-40" />
        </div>

        <h3 className="text-2xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">
          {item.title}
        </h3>
        <div className="flex justify-between items-center text-sm font-mono text-slate-500 mb-4 border-b border-green-900/30 pb-3">
          <span>{item.issuer}</span>
          <span>{item.date}</span>
        </div>
        <p className="text-slate-400 text-base leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}
