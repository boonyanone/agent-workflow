"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { Palette } from "lucide-react";

export default function DesignShowcase() {
  const t = useTranslations("HomePage");

  const templates = [
    { name: "Shadcn UI (Minimal)", image: "/images/shadcn.png" },
    { name: "Aceternity UI (Glassmorphism)", image: "/images/aceternity.png" },
    { name: "NextUI (Vibrant)", image: "/images/nextui.png" },
    { name: "Ant Design (Enterprise)", image: "/images/antdesign.png" }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Palette className="w-4 h-4" />
            <span>{t("showcase_badge")}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {t("showcase_title_1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{t("showcase_title_2")}</span>
          </h2>
          <p className="text-lg text-gray-400">
            {t("showcase_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((tpl, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden border border-[#222] bg-[#111]"
            >
              <div className="aspect-square relative overflow-hidden bg-black/40">
                <Image 
                  src={tpl.image} 
                  alt={tpl.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-xl font-bold text-white">{tpl.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
