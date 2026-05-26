"use client";

import { motion } from "framer-motion";
import { Cpu, History, Palette, ShieldAlert } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("HomePage");

  const features = [
    {
      icon: <Cpu className="text-white" size={28} />,
      title: t("feature_1_title"),
      desc: t("feature_1_desc"),
      prob: t("feature_1_prob"),
      sol: t("feature_1_sol"),
      colorClass: "from-blue-500/20 to-blue-900/5 hover:border-blue-500/50",
      iconClass: "bg-blue-900/30 text-blue-400 border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white"
    },
    {
      icon: <History className="text-white" size={28} />,
      title: t("feature_2_title"),
      desc: t("feature_2_desc"),
      prob: t("feature_2_prob"),
      sol: t("feature_2_sol"),
      colorClass: "from-emerald-500/20 to-emerald-900/5 hover:border-emerald-500/50",
      iconClass: "bg-emerald-900/30 text-emerald-400 border-emerald-500/30 group-hover:bg-emerald-600 group-hover:text-white"
    },
    {
      icon: <Palette className="text-white" size={28} />,
      title: t("feature_3_title"),
      desc: t("feature_3_desc"),
      prob: t("feature_3_prob"),
      sol: t("feature_3_sol"),
      colorClass: "from-purple-500/20 to-purple-900/5 hover:border-purple-500/50",
      iconClass: "bg-purple-900/30 text-purple-400 border-purple-500/30 group-hover:bg-purple-600 group-hover:text-white"
    },
    {
      icon: <ShieldAlert className="text-white" size={28} />,
      title: t("feature_4_title"),
      desc: t("feature_4_desc"),
      prob: t("feature_4_prob"),
      sol: t("feature_4_sol"),
      colorClass: "from-rose-500/20 to-rose-900/5 hover:border-rose-500/50",
      iconClass: "bg-rose-900/30 text-rose-400 border-rose-500/30 group-hover:bg-rose-600 group-hover:text-white"
    }
  ];

  return (
    <section className="py-32 bg-space-900 border-b border-glass-border" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t("features_section_title")}
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            {t("features_section_subtitle")}
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
              <div className="absolute inset-0 bg-blue-900/10 blur-3xl z-0 rounded-2xl"></div>

              <div className={`relative bg-[#0a0a0a] border border-[#222] p-6 sm:p-8 transition-all duration-300 overflow-hidden z-10 h-full rounded-2xl ${feature.colorClass}`}>
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
              
              <div className={`relative w-14 h-14 border flex items-center justify-center mb-6 rounded-xl transition-all duration-300 shadow-lg ${feature.iconClass}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                {feature.desc}
              </p>
              
              <div className="space-y-3 border-t border-[#222] pt-4 text-xs sm:text-sm">
                <div className="flex gap-2 items-start">
                  <span className="text-red-500/80 font-bold shrink-0 mt-0.5">Problem:</span>
                  <span className="text-gray-400">{feature.prob}</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-green-500/80 font-bold shrink-0 mt-0.5">Solution:</span>
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
