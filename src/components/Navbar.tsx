"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { Terminal } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("HomePage");

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="p-1.5 bg-neon-cyan/10 rounded-lg border border-neon-cyan/30">
              <Terminal size={20} className="text-neon-cyan" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">Agent Protocol</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="/#features" className="text-gray-300 hover:text-white transition-colors">{t("nav_features")}</a>
            <a href="/manual" className="text-gray-300 hover:text-white transition-colors">{t("nav_manual")}</a>
            <a href="https://github.com/boonyanone/ai-coding-protocol" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">{t("nav_github")}</a>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
