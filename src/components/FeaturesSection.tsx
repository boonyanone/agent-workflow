"use client";

import { motion } from "framer-motion";
import { BrainCircuit, PaintRoller, DatabaseZap, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("HomePage");

  const pillars = [
    {
      icon: <BrainCircuit size={40} />,
      title: t("feature_1_title"),
      description: t("feature_1_desc"),
      gradient: "from-blue-500 to-cyan-400",
      bgHover: "hover:shadow-cyan-500/20"
    },
    {
      icon: <PaintRoller size={40} />,
      title: t("feature_2_title"),
      description: t("feature_2_desc"),
      gradient: "from-purple-500 to-pink-400",
      bgHover: "hover:shadow-pink-500/20"
    },
    {
      icon: <DatabaseZap size={40} />,
      title: t("feature_3_title"),
      description: t("feature_3_desc"),
      gradient: "from-indigo-500 to-blue-500",
      bgHover: "hover:shadow-blue-500/20"
    },
    {
      icon: <ShieldCheck size={40} />,
      title: t("feature_4_title"),
      description: t("feature_4_desc"),
      gradient: "from-emerald-500 to-teal-400",
      bgHover: "hover:shadow-teal-500/20"
    }
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
          >
            4 Core Pillars of the Protocol
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium text-lg"
          >
            A foundational architecture designed to give your AI agents perfect memory, strict consistency, and unlimited knowledge.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group glass-panel p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl ${pillar.bgHover} overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.gradient} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${pillar.gradient} text-white shadow-lg`}>
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed flex-grow">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
