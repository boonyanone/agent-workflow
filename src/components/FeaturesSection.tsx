"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Search, BookOpen, FolderSync, Sparkles, Lock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("HomePage");

  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: t("feature_1_title"),
      description: t("feature_1_desc"),
      color: "blue"
    },
    {
      icon: <Search size={32} />,
      title: t("feature_2_title"),
      description: t("feature_2_desc"),
      color: "purple"
    },
    {
      icon: <BookOpen size={32} />,
      title: t("feature_3_title"),
      description: t("feature_3_desc"),
      color: "indigo"
    },
    {
      icon: <FolderSync size={32} />,
      title: t("feature_4_title"),
      description: t("feature_4_desc"),
      color: "blue"
    },
    {
      icon: <Sparkles size={32} />,
      title: t("feature_5_title"),
      description: t("feature_5_desc"),
      color: "purple"
    },
    {
      icon: <Lock size={32} />,
      title: t("feature_6_title"),
      description: t("feature_6_desc"),
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'blue': return "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white";
      case 'purple': return "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 group-hover:bg-purple-500 group-hover:text-white";
      case 'indigo': return "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white";
      default: return "";
    }
  };

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Protocol Features
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Everything you need to build a secure, persistent, and context-aware AI workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-panel p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 cursor-default"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${getColorClasses(feature.color)}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
