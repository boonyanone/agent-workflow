"use client";

import { motion } from "framer-motion";
import { Copy, TerminalSquare, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("git clone https://github.com/boonyanone/ai-coding-protocol.git");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
              </span>
              v1.1.13 Available Now
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
              Build alongside AI, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                without the chaos.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              A strict, memory-persistent workflow framework for cursor, windsurf, and cline. 
              Eliminate context bloat, hallucination, and UI inconsistency forever.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              {/* Terminal Command Box */}
              <div 
                className="flex items-center justify-between w-full sm:w-auto bg-black/50 border border-glass-border rounded-lg p-1 group hover:border-neon-cyan/50 transition-colors cursor-pointer"
                onClick={copyCommand}
              >
                <div className="flex items-center gap-3 px-4 py-2">
                  <span className="text-neon-cyan font-mono">$</span>
                  <code className="text-sm text-gray-300 font-mono select-all">git clone .../ai-coding-protocol</code>
                </div>
                <button className="p-2 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white">
                  {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                </button>
              </div>
              
              <a 
                href="https://github.com/boonyanone/ai-coding-protocol#readme" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
              >
                Read Docs <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-panel rounded-xl overflow-hidden shadow-2xl border border-glass-border">
              {/* Mac Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-glass-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto flex items-center gap-2 text-xs text-gray-400 font-mono">
                  <TerminalSquare size={14} /> ai-protocol.sh check
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 bg-[#050510]/80 font-mono text-sm leading-relaxed">
                <div className="text-gray-300 mb-2"><span className="text-neon-cyan">~</span> $ ./ai-protocol.sh check</div>
                <div className="text-gray-400">🤖 Running AI Protocol Compliance Check...</div>
                <div className="text-green-400 mt-2">✅ .gitignore secures .env files</div>
                <div className="text-green-400">✅ STATE.md size is optimal (12 lines).</div>
                <div className="text-green-400">✅ REFLECTIONS.md has 3 entries.</div>
                <div className="text-white mt-4 font-bold flex items-center gap-2">
                  <span className="text-xl">🎉</span> All checks passed! Your AI workspace is optimized.
                </div>
                <div className="text-gray-300 mt-4 flex items-center">
                  <span className="text-neon-cyan">~</span> $ <span className="w-2 h-4 bg-gray-400 ml-2 animate-pulse"></span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
