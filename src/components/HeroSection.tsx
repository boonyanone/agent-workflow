"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight, ShieldCheck, Zap, Database } from "lucide-react";
import { useTranslations } from "next-intl";
import AnimatedTerminal from "./AnimatedTerminal";

export default function HeroSection() {
  const t = useTranslations("HomePage");

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-[#333]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter mb-8 leading-tight">
                {t("hero_title")}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                {t("hero_subtitle")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a href="https://github.com/boonyanone/ai-coding-protocol" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-md bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <Terminal size={20} />
                {t("cta_install")}
              </a>
              <a href="/manual" className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#111] border border-[#333] text-white font-medium hover:bg-[#222] transition-colors flex items-center justify-center gap-2">
                {t("cta_manual")}
                <ArrowRight size={20} />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-[#333] flex flex-col sm:flex-row gap-x-8 gap-y-4 text-xs font-semibold text-gray-500 uppercase tracking-widest"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} /> Write Locks
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} /> No Context Bloat
              </div>
              <div className="flex items-center gap-2">
                <Database size={16} /> Stateful
              </div>
            </motion.div>
          </div>

          {/* Right Column: Animated Terminal */}
          <div className="relative w-full">
            <AnimatedTerminal />
          </div>

        </div>
      </div>
    </section>
  );
}
