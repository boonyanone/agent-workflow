"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight, ShieldCheck, Zap, Database } from "lucide-react";
import { useTranslations } from "next-intl";
import AnimatedTerminal from "./AnimatedTerminal";
import { Link } from "@/i18n/routing";

export default function HeroSection() {
  const t = useTranslations("HomePage");

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-glass-border">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter mb-6 leading-tight">
                {t("hero_title")}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed font-medium">
                {t("hero_subtitle")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a href="https://github.com/boonyanone/ai-coding-protocol" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-md bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <Terminal size={20} />
                {t("cta_install")}
              </a>
              <Link href="/manual" className="w-full sm:w-auto px-8 py-4 rounded-md bg-transparent border border-[#333] text-white font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                {t("cta_manual")}
                <ArrowRight size={20} />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-widest"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} /> OS-Level Write Locks
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} /> Zero Context Bloat
              </div>
              <div className="flex items-center gap-2">
                <Database size={16} /> Persistent State Machine
              </div>
            </motion.div>
          </div>

          {/* Right Column: Video */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full relative rounded-2xl overflow-hidden border border-[#333] shadow-2xl bg-black"
          >
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/lv-JEr-ZgfA" 
                title="Agent Workflow Hub Overview"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
