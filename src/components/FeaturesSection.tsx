"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BrainCircuit, PaintRoller, ShieldCheck, Link } from "lucide-react";

export default function FeaturesSection() {
  const t = useTranslations("HomePage");

  const features = [
    {
      icon: <BrainCircuit size={24} className="text-neon-cyan" />,
      title: t("feature_1_title"),
      description: t("feature_1_desc"),
      problem: t("feature_1_prob"),
      solution: t("feature_1_sol")
    },
    {
      icon: <Link size={24} className="text-neon-purple" />,
      title: t("feature_2_title"),
      description: t("feature_2_desc"),
      problem: t("feature_2_prob"),
      solution: t("feature_2_sol")
    },
    {
      icon: <PaintRoller size={24} className="text-neon-cyan" />,
      title: t("feature_3_title"),
      description: t("feature_3_desc"),
      problem: t("feature_3_prob"),
      solution: t("feature_3_sol")
    },
    {
      icon: <ShieldCheck size={24} className="text-neon-purple" />,
      title: t("feature_4_title"),
      description: t("feature_4_desc"),
      problem: t("feature_4_prob"),
      solution: t("feature_4_sol")
    }
  ];

  return (
    <section id="features" className="py-24 relative bg-space-900 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Problems We Solve</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Coding with AI is amazing until the context window fills up. We built the protocol to handle the messy parts so you can focus on shipping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl flex flex-col h-full hover:border-neon-cyan/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-glass-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">{feature.description}</p>
              
              <div className="bg-black/40 rounded-lg p-5 text-sm border border-glass-border">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-red-400 font-bold mt-0.5">❌</span>
                  <span className="text-gray-400">{feature.problem}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-neon-cyan font-bold mt-0.5">✅</span>
                  <span className="text-white font-medium">{feature.solution}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
