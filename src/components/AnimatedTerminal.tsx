"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "> npx --yes github:boonyanone/ai-coding-protocol init", delay: 1000 },
  { text: "[System] Initializing AI Protocol in the current directory...", delay: 800 },
  { text: "[Copying] Templates, prompts, and default documentation...", delay: 600 },
  { text: "[Success] Created multi-IDE config files.", delay: 800 },
  { text: "[Success] Installed ai-protocol.sh CLI tool.", delay: 1200 },
  { text: "[Success] Instantiated .ai/STATE.md from template.", delay: 800 },
  { text: "[System] 🎉 AI Protocol initialization complete!", delay: 600 },
  { text: "> Agent is ready. Waiting for input...", delay: 1000 }
];

export default function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const isTyping = visibleLines < lines.length;

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
      }, lines[visibleLines].delay);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-full mx-auto relative group"
    >
      {/* Glowing Rotating Aura Wrapper */}
      <div className="absolute -inset-[4px] rounded-2xl overflow-hidden opacity-50 group-hover:opacity-100 blur-2xl transition-all duration-700">
        <div className="absolute inset-[-50%] animate-spin-slow" style={{
          background: 'conic-gradient(from 0deg, transparent 0%, rgba(59, 130, 246, 0.8) 20%, rgba(168, 85, 247, 0.8) 40%, rgba(6, 182, 212, 0.8) 60%, transparent 80%)'
        }}></div>
      </div>

      {/* Terminal Container */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/80 bg-[#0a0a0a] z-10 h-full">
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 bg-[#000000] border-b border-[#333]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto text-xs font-mono text-gray-500 tracking-widest">
            agent-protocol — bash
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm sm:text-base leading-relaxed h-[360px] overflow-hidden relative">
          <div className="space-y-2">
            {lines.slice(0, visibleLines).map((line, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {line.text.startsWith(">") ? (
                  <span className="text-white font-bold">{line.text}</span>
                ) : line.text.includes("[System]") ? (
                  <span className="text-gray-400"><span className="text-blue-400">[System]</span> {line.text.replace("[System] ", "")}</span>
                ) : line.text.includes("[Success]") ? (
                  <span className="text-gray-400"><span className="text-green-400">[Success]</span> {line.text.replace("[Success] ", "")}</span>
                ) : line.text.includes("[Copying]") ? (
                  <span className="text-gray-400"><span className="text-purple-400">[Copying]</span> {line.text.replace("[Copying] ", "")}</span>
                ) : (
                  <span className="text-gray-400">{line.text}</span>
                )}
              </motion.div>
            ))}
            
            {/* Blinking Cursor */}
            <motion.div 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className={`inline-block w-2.5 h-5 bg-white align-middle ml-2 ${isTyping ? "mt-2" : ""}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
