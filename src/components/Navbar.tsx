"use client";

import { motion } from "framer-motion";
import { Terminal, GitBranch } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-panel border-b border-glass-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-neon-cyan/10 text-neon-cyan">
              <Terminal size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Agent <span className="text-neon-cyan">Workflow</span> Hub
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden md:block">
              Features
            </Link>
            <Link href="#skills" className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden md:block">
              Skill Registry
            </Link>
            <a 
              href="https://github.com/boonyanone/ai-coding-protocol" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all"
            >
              <GitBranch size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
