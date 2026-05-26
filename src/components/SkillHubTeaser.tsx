"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Code2, TerminalSquare, Layers, ExternalLink } from "lucide-react";

export default function SkillHubTeaser() {
  const t = useTranslations("HomePage");

  return (
    <section className="py-32 bg-[#000000]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-6"
        >
          {t("portfolio_title")}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto text-base mb-16"
        >
          {t("portfolio_subtitle")}
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          
          {/* Active Project: AI Protocol */}
          <div className="bg-[#0a0a0a] border border-[#555] p-6 hover:border-white transition-colors group relative rounded-xl hover:-translate-y-1 duration-300 shadow-md hover:shadow-xl hover:shadow-white/5">
            <div className="flex justify-between items-start mb-6">
              <Code2 className="text-white group-hover:text-blue-400 transition-colors" size={28} />
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white text-black rounded-full">
                {t("project_1_status")}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{t("project_1_title")}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              {t("project_1_desc")}
            </p>
            <a href="https://github.com/boonyanone/ai-coding-protocol" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-white font-bold hover:underline">
              View Source <ExternalLink size={14} />
            </a>
          </div>

          {/* Coming Soon: CMS */}
          <div className="bg-[#0a0a0a] border border-[#222] p-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-not-allowed rounded-xl">
            <div className="flex justify-between items-start mb-6">
              <Layers className="text-gray-500" size={28} />
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#222] text-gray-400 rounded-full">
                {t("project_2_status")}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{t("project_2_title")}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              {t("project_2_desc")}
            </p>
          </div>

          {/* Coming Soon: MCP Registry */}
          <div className="bg-[#0a0a0a] border border-[#222] p-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-not-allowed rounded-xl">
            <div className="flex justify-between items-start mb-6">
              <TerminalSquare className="text-gray-500" size={28} />
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#222] text-gray-400 rounded-full">
                {t("project_3_status")}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{t("project_3_title")}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              {t("project_3_desc")}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
