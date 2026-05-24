"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Code2, TerminalSquare, Layers, ExternalLink } from "lucide-react";

export default function SkillHubTeaser() {
  const t = useTranslations("HomePage");

  return (
    <section className="py-24 relative overflow-hidden bg-space-900 border-t border-glass-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          {t("portfolio_title")}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg mb-16"
        >
          {t("portfolio_subtitle")}
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          
          {/* Active Project: AI Protocol */}
          <div className="glass-panel p-8 rounded-2xl border border-neon-cyan/30 hover:border-neon-cyan/60 transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="p-3 bg-neon-cyan/10 rounded-xl border border-neon-cyan/20">
                <Code2 className="text-neon-cyan" size={24} />
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                {t("project_1_status")}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 relative z-10">{t("project_1_title")}</h3>
            <p className="text-gray-400 mb-6 relative z-10 leading-relaxed">
              {t("project_1_desc")}
            </p>
            <a href="https://github.com/boonyanone/ai-coding-protocol" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-neon-cyan hover:text-white transition-colors relative z-10 font-medium">
              View Repository <ExternalLink size={14} />
            </a>
          </div>

          {/* Coming Soon: CMS */}
          <div className="glass-panel p-8 rounded-2xl border border-glass-border opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-not-allowed">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white/5 rounded-xl border border-glass-border">
                <Layers className="text-gray-300" size={24} />
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 text-yellow-500/70 border border-yellow-500/20">
                {t("project_2_status")}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t("project_2_title")}</h3>
            <p className="text-gray-400 leading-relaxed">
              {t("project_2_desc")}
            </p>
          </div>

          {/* Coming Soon: MCP Registry */}
          <div className="glass-panel p-8 rounded-2xl border border-glass-border opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-not-allowed">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white/5 rounded-xl border border-glass-border">
                <TerminalSquare className="text-gray-300" size={24} />
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 text-yellow-500/70 border border-yellow-500/20">
                {t("project_3_status")}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t("project_3_title")}</h3>
            <p className="text-gray-400 leading-relaxed">
              {t("project_3_desc")}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
