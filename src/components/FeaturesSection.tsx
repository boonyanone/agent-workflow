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
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#0a0a0a] border border-[#333] p-10 hover:border-gray-500 transition-colors"
            >
              <div className="w-16 h-16 bg-[#171717] border border-[#333] flex items-center justify-center mb-8">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
