"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const navItems = [
    { name: "About", id: "about", path: "/#about" },
    { name: "Projects", id: "projects", path: "/#projects" },
    { name: "Achievements", id: "achievements", path: "/achievements" },
    { name: "Tech_Stack", id: "tech-stack", path: "/#tech-stack" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-900/90 backdrop-blur-md border-b border-green-900/50 py-4 shadow-[0_0_15px_rgba(34,197,94,0.1)]" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="p-2 bg-green-900/20 rounded border border-green-500/30 group-hover:border-green-500 transition-colors">
            <Terminal className="text-green-500 w-5 h-5" />
          </div>
          <span className="text-green-500 font-bold tracking-wider font-mono group-hover:text-green-400 transition-colors">
            RY_SYSTEM
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.id === "achievements" ? (
              <Link
                key={item.name}
                href="/achievements"
                className="text-slate-400 hover:text-green-400 text-sm font-mono tracking-widest uppercase transition-colors relative group"
              >
                <span className="text-green-500/50 mr-1 opacity-0 group-hover:opacity-100 transition-opacity">&lt;</span>
                {item.name}
                <span className="text-green-500/50 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">/&gt;</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-400 hover:text-green-400 text-sm font-mono tracking-widest uppercase transition-colors relative group"
              >
                <span className="text-green-500/50 mr-1 opacity-0 group-hover:opacity-100 transition-opacity">&lt;</span>
                {item.name}
                <span className="text-green-500/50 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">/&gt;</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
              </button>
            )
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
