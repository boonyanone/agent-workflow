"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { Terminal, Copy, Check, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ManualPage() {
  const t = useTranslations("ManualPage");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const CodeBlock = ({ command }: { command: string }) => (
    <div className="relative group w-full mb-6">
      <div className="relative flex items-center justify-between gap-4 bg-slate-900 dark:bg-black/50 border border-slate-800 px-6 py-4 rounded-2xl shadow-lg">
        <div className="flex items-center gap-3 overflow-hidden">
          <Terminal size={20} className="text-blue-400 flex-shrink-0" />
          <code className="text-blue-100 font-mono text-sm truncate">
            {command}
          </code>
        </div>
        <button 
          onClick={() => copyCommand(command)}
          className="p-2 hover:bg-white/10 rounded-xl transition-colors text-slate-400 hover:text-white"
        >
          {copiedCmd === command ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
        </button>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-indigo-950 selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-32 glass-panel p-6 rounded-3xl">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Table of Contents</h3>
            <nav className="space-y-2">
              <a href="#install" className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">{t("menu_install")}</a>
              <a href="#auth" className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">{t("menu_auth")}</a>
              <a href="#usage" className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">{t("menu_usage")}</a>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{t("title")}</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">{t("subtitle")}</p>
          </div>

          <div className="space-y-16">
            {/* Install Section */}
            <section id="install" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm">1</span>
                {t("install_title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium">{t("install_desc")}</p>
              <CodeBlock command="./ai-protocol.sh install-mcp" />
              <div className="glass-panel p-6 rounded-2xl bg-white/40 dark:bg-slate-900/40">
                <h4 className="font-bold mb-2 flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500"/> Success Output</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">The script will automatically clone the NotebookLM MCP server, install dependencies, and configure your IDE settings (.cursor/mcp.json).</p>
              </div>
            </section>

            {/* Auth Section */}
            <section id="auth" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm">2</span>
                {t("auth_title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium">{t("auth_desc")}</p>
              <CodeBlock command="./ai-protocol.sh auth-mcp" />
            </section>

            {/* Usage Section */}
            <section id="usage" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm">3</span>
                {t("usage_title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium">{t("usage_desc")}</p>
              <div className="glass-panel p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800">
                <p className="text-slate-700 dark:text-slate-300 italic font-medium">
                  "ช่วยเชื่อมต่อ NotebookLM แล้วเข้าไปดึงข้อมูลจากสมุดโน้ตชื่อ 'AI Coding Protocol' มาให้หน่อย จากนั้นเอาข้อมูลมาช่วยฉันอธิบายหน้าเว็บให้ที"
                </p>
              </div>
            </section>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
