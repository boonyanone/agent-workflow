"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "> ./ai-protocol initialize", delay: 1000 },
  { text: "[System] Booting up state machine...", delay: 800 },
  { text: "[System] Locating .ai/STATE.md... Found.", delay: 600 },
  { text: "[System] Memory context restored. (0.012s)", delay: 800 },
  { text: "> Analyzing frontend UI consistency...", delay: 1200 },
  { text: "[Design System] Intercepting CSS modifications...", delay: 800 },
  { text: "[Security] Enforcing strict write-locks...", delay: 600 },
  { text: "> Agent is ready. Waiting for input...", delay: 1000 }
];

export default function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
      }, lines[visibleLines].delay);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [visibleLines]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-full max-w-3xl mx-auto mt-20 text-left rounded-lg overflow-hidden border border-[#333] shadow-2xl shadow-black/80 bg-[#0a0a0a]"
    >
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
      <div className="p-6 font-mono text-sm sm:text-base leading-relaxed h-[320px] overflow-hidden relative">
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
              ) : line.text.includes("[Design System]") ? (
                <span className="text-gray-400"><span className="text-purple-400">[Design System]</span> {line.text.replace("[Design System] ", "")}</span>
              ) : line.text.includes("[Security]") ? (
                <span className="text-gray-400"><span className="text-red-400">[Security]</span> {line.text.replace("[Security] ", "")}</span>
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
    </motion.div>
  );
}
