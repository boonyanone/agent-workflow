"use client";

import { motion } from "framer-motion";
import { Terminal, Copy, Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "../i18n/routing";

export default function HeroSection() {
  const t = useTranslations("HomePage");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("./ai-protocol.sh install-mcp");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-indigo-900/50 text-blue-700 dark:text-blue-300 font-semibold text-sm mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            v0.1.0 Beta is Live
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white"
          >
            <span className="bg-gradient-to-tr from-blue-500 to-purple-500 bg-clip-text text-transparent">Stop Context Bloat.</span><br />
            Start Coding.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-medium"
          >
            {t("hero_subtitle")}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Terminal Command Box */}
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative flex items-center justify-between gap-4 bg-slate-900 dark:bg-black/50 backdrop-blur-xl border border-slate-800 dark:border-white/10 px-6 py-4 rounded-2xl shadow-xl w-full sm:w-[400px]">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Terminal size={20} className="text-blue-400 flex-shrink-0" />
                  <code className="text-blue-100 font-mono text-sm truncate">
                    <span className="text-purple-400">./</span>ai-protocol.sh install-mcp
                  </code>
                </div>
                <button 
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors text-slate-400 hover:text-white"
                >
                  {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            <Link href="/manual" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto font-bold active:scale-95">
              {t("cta_manual")}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
