"use client";

import { Terminal, Mail, Phone, Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToSection = (id: string) => {
    // Check if we are on the home page
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on home page, navigate to home with hash
      window.location.href = `/#${id}`;
    }
  };

  const navItems = [
    { name: "home.sh", id: "hero", path: "/" },
    { name: "about_me.md", id: "about", path: "/#about" },
    { name: "projects.exe", id: "projects", path: "/#projects" },
    { name: "achievements.log", id: "achievements", path: "/achievements" },
    { name: "stack.json", id: "tech-stack", path: "/#tech-stack" }
  ];

  return (
    <footer className="border-t border-green-900/50 bg-slate-950 pt-8 pb-4 relative overflow-hidden">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      
      <div className="w-full px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6 group cursor-default">
              <div className="p-2 bg-green-900/20 border border-green-500/30 rounded group-hover:bg-green-500/20 transition-colors">
                <Terminal className="text-green-500 w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-green-400 tracking-wider font-mono">RY_SYSTEM</span>
                <span className="text-sm text-green-600 font-mono">v2.0.25 [STABLE]</span>
              </div>
            </div>
            <div className="text-slate-400 leading-relaxed max-w-md mb-6 font-mono text-base space-y-2">
              <p><span className="text-green-500/50">&gt;</span> Initializing connection...</p>
              <p><span className="text-green-500/50">&gt;</span> Crafting digital experiences...</p>
              <p><span className="text-green-500/50">&gt;</span> Status: <span className="text-green-400 animate-pulse">Ready for new challenges.</span></p>
            </div>
            
            {/* System Status Widget */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/10 border border-green-500/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-green-500 font-mono tracking-widest">SYSTEM ONLINE</span>
            </div>
          </div>

          <div>
            <h3 className="text-green-400 font-bold mb-6 font-mono text-xl flex items-center gap-2">
              <span className="text-green-600">./</span>navigation
            </h3>
            <ul className="space-y-4 font-mono text-base">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.id === "achievements" ? (
                     <Link 
                     href="/achievements"
                     className="text-slate-400 hover:text-green-400 transition-colors hover:translate-x-2 transform duration-200 flex items-center gap-2 group w-full text-left"
                   >
                     <span className="text-green-500/30 group-hover:text-green-500 transition-colors">$</span> 
                     cd {item.name}
                   </Link>
                  ) : (
                    <button 
                      onClick={() => scrollToSection(item.id)}
                      className="text-slate-400 hover:text-green-400 transition-colors hover:translate-x-2 transform duration-200 flex items-center gap-2 group w-full text-left"
                    >
                      <span className="text-green-500/30 group-hover:text-green-500 transition-colors">$</span> 
                      cd {item.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-green-400 font-bold mb-6 font-mono text-xl flex items-center gap-2">
              <span className="text-green-600">./</span>contact_info
            </h3>
            <div className="flex flex-col gap-5">
              <a href="mailto:riskiyu007@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors group font-mono text-base">
                <Mail className="w-5 h-5 text-green-500/70 group-hover:text-green-400" />
                <span>riskiyu007@gmail.com</span>
              </a>
              <div className="flex gap-4 mt-2">
                <a href="https://wa.me/6285643065955" target="_blank" className="p-3 bg-slate-900 border border-green-900/50 rounded hover:border-green-500/50 hover:text-green-400 text-slate-400 transition-all hover:scale-110 group">
                  <Phone className="w-6 h-6 group-hover:animate-bounce" />
                </a>
                <a href="https://instagram.com/yu_niar007" target="_blank" className="p-3 bg-slate-900 border border-green-900/50 rounded hover:border-green-500/50 hover:text-green-400 text-slate-400 transition-all hover:scale-110 group">
                  <Instagram className="w-6 h-6 group-hover:animate-spin" />
                </a>
                <a href="https://linkedin.com/in/riski-yuniar-pratama" target="_blank" className="p-3 bg-slate-900 border border-green-900/50 rounded hover:border-green-500/50 hover:text-green-400 text-slate-400 transition-all hover:scale-110 group">
                  <Linkedin className="w-6 h-6 group-hover:animate-pulse" />
                </a>
                <a href="https://github.com/kullal" target="_blank" className="p-3 bg-slate-900 border border-green-900/50 rounded hover:border-green-500/50 hover:text-green-400 text-slate-400 transition-all hover:scale-110 group">
                  <Github className="w-6 h-6 group-hover:animate-pulse" />
                </a>
              </div>
            </div>
          </div>
        </div>

      <div className="border-t border-green-900/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-sm">
        <p className="text-slate-600">
          root@riski-portfolio:~$ © {new Date().getFullYear()} Riski Yuniar.
        </p>
        <div className="flex gap-8 text-slate-600">
          <span className="hover:text-green-400 transition-colors cursor-pointer">[ git status ]</span>
          <span className="hover:text-green-400 transition-colors cursor-pointer">[ view logs ]</span>
        </div>
      </div>
    </div>
  </footer>
  );
}
