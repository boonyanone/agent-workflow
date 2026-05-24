"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight, ShieldCheck, Zap, Database } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("HomePage");

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-glass-border">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-8 leading-tight">
              {t("hero_title")}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
              {t("hero_subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://github.com/boonyanone/ai-coding-protocol" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-md bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Terminal size={20} />
              {t("cta_install")}
            </a>
            <a href="/manual" className="w-full sm:w-auto px-8 py-4 rounded-md bg-transparent border border-glass-border text-white font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              {t("cta_manual")}
              <ArrowRight size={20} />
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-10 flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-semibold text-gray-500 uppercase tracking-widest"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} /> OS-Level Write Locks
            </div>
            <div className="flex items-center gap-2">
              <Zap size={18} /> Zero Context Bloat
            </div>
            <div className="flex items-center gap-2">
              <Database size={18} /> Persistent State Machine
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
