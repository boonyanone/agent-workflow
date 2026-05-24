"use client";

import { motion } from "framer-motion";
import { Terminal, GitBranch } from "lucide-react";
import { Link } from "../i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("HomePage");

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-panel border-b-0"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
              <Terminal size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white">
              Agent <span className="text-blue-500">Workflow</span> Hub
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/manual" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors hidden md:block">
              {t("nav_manual")}
            </Link>
            <LanguageSwitcher />
            <a 
              href="https://github.com/boonyanone/ai-coding-protocol" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <GitBranch size={16} />
              <span className="hidden sm:inline">{t("nav_github")}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
