"use client";

import { useTranslations } from "next-intl";
import { HardDrive, RotateCcw, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";

export default function ContextCollapseSection() {
  const t = useTranslations("HomePage");

  const problems = [
    {
      icon: <HardDrive size={24} />,
      title: t("problem_1_title"),
      desc: t("problem_1_desc"),
    },
    {
      icon: <RotateCcw size={24} />,
      title: t("problem_2_title"),
      desc: t("problem_2_desc"),
    },
    {
      icon: <Paintbrush size={24} />,
      title: t("problem_3_title"),
      desc: t("problem_3_desc"),
    }
  ];

  return (
    <section className="py-24 bg-[#050505] border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
            {t("problem_section_title")}
          </h2>
          <p className="text-base text-gray-400 font-medium max-w-2xl mx-auto">
            {t("problem_section_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#0a0a0a] border border-[#222] p-6 rounded-xl flex flex-col items-start hover:border-gray-500 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-white/5 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#111] border border-[#333] flex items-center justify-center text-gray-300 mb-5 group-hover:text-white group-hover:border-gray-500 transition-colors">
                {problem.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {problem.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
