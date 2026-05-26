"use client";

import { motion } from "framer-motion";
import { Cpu, History, Palette, ShieldAlert } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("HomePage");

  const features = [
    {
      icon: <Cpu className="text-white" size={32} />,
      title: t("feature_1_title"),
      desc: t("feature_1_desc"),
      prob: t("feature_1_prob"),
      sol: t("feature_1_sol"),
    },
    {
      icon: <History className="text-white" size={32} />,
      title: t("feature_2_title"),
      desc: t("feature_2_desc"),
      prob: t("feature_2_prob"),
      sol: t("feature_2_sol"),
    },
    {
      icon: <Palette className="text-white" size={32} />,
      title: t("feature_3_title"),
      desc: t("feature_3_desc"),
      prob: t("feature_3_prob"),
      sol: t("feature_3_sol"),
    },
    {
      icon: <ShieldAlert className="text-white" size={32} />,
      title: t("feature_4_title"),
      desc: t("feature_4_desc"),
      prob: t("feature_4_prob"),
      sol: t("feature_4_sol"),
    }
  ];

  return (
    <section className="py-32 bg-space-900 border-b border-glass-border" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
            Engineered for Extreme Performance.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Traditional AI chats collapse under their own weight. We built a framework that scales with your ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="relative group"
            >
              {/* Static Background Glow */}
              <div className="absolute inset-0 bg-blue-900/20 blur-3xl z-0 rounded-2xl"></div>

              <div className="relative bg-[#0a0a0a] border border-[#333] p-10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden z-10 h-full rounded-lg">
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-16 h-16 bg-[#171717] border border-[#333] group-hover:border-blue-500/50 group-hover:text-blue-400 flex items-center justify-center mb-8 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                {feature.desc}
              </p>
              
              <div className="space-y-4 border-t border-[#333] pt-6">
                <div className="flex gap-3">
                  <span className="text-red-500 font-bold shrink-0">Problem:</span>
                  <span className="text-gray-400">{feature.prob}</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-500 font-bold shrink-0">Solution:</span>
                  <span className="text-gray-300 font-medium">{feature.sol}</span>
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
