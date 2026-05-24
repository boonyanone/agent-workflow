"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { Terminal, Copy, Check, Info, AlertTriangle, Layers, Settings, Wrench, Shield } from "lucide-react";
import { useState } from "react";

export default function ManualPage() {
  const t = useTranslations("ManualPage");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const CodeBlock = ({ command, multiLine = false }: { command: string, multiLine?: boolean }) => (
    <div className="relative group w-full mb-6">
      <div className="relative flex items-start justify-between gap-4 bg-slate-900 dark:bg-black/50 border border-slate-800 px-6 py-4 rounded-2xl shadow-lg">
        <div className="flex items-start gap-3 overflow-x-auto w-full">
          <Terminal size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
          <pre className="text-blue-100 font-mono text-sm whitespace-pre-wrap break-all">
            <code>{command}</code>
          </pre>
        </div>
        <button 
          onClick={() => copyCommand(command)}
          className="p-2 hover:bg-white/10 rounded-xl transition-colors text-slate-400 hover:text-white flex-shrink-0"
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
              <a href="#intro" className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">{t("menu_intro")}</a>
              <a href="#install" className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">{t("menu_install")}</a>
              <a href="#auth" className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">{t("menu_auth")}</a>
              <a href="#usage" className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">{t("menu_usage")}</a>
              <a href="#tools" className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">{t("menu_tools")}</a>
              <a href="#notes" className="block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">{t("menu_notes")}</a>
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
            
            {/* Intro Section */}
            <section id="intro" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl"><Layers size={20} /></div>
                {t("intro_title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{t("intro_desc")}</p>
            </section>

            {/* Install Section */}
            <section id="install" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl"><Terminal size={20} /></div>
                {t("install_title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium leading-relaxed">{t("install_desc")}</p>
              <CodeBlock command={`${t("install_cmd_1")}\n${t("install_cmd_2")}`} multiLine />
            </section>

            {/* Auth Section */}
            <section id="auth" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl"><Shield size={20} /></div>
                {t("auth_title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium leading-relaxed">{t("auth_desc")}</p>
              
              <div className="mb-8">
                <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">{t("auth_sub_1")}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{t("auth_sub_1_desc")}</p>
                <CodeBlock command={t("auth_cmd_1")} />
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">{t("auth_sub_2")}</h3>
                <p className="text-slate-600 dark:text-slate-400">{t("auth_sub_2_desc")}</p>
              </div>
            </section>

            {/* Usage/Config Section */}
            <section id="usage" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl"><Settings size={20} /></div>
                {t("usage_title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium leading-relaxed">{t("usage_desc")}</p>
              <CodeBlock command={`{\n  "mcpServers": {\n    "notebooklm": {\n      "command": "node",\n      "args": ["/absolute/path/to/antigravity-notebooklm-mcp/build/index.js"]\n    }\n  }\n}`} multiLine />
            </section>

            {/* Tools Section */}
            <section id="tools" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl"><Wrench size={20} /></div>
                {t("tools_title")}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium leading-relaxed">{t("tools_desc")}</p>
              
              <div className="grid gap-4">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="glass-panel p-6 rounded-2xl bg-white/40 dark:bg-slate-900/40">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 font-mono text-sm px-3 py-1 bg-slate-200 dark:bg-slate-800 inline-block rounded-md">
                      {t(`tool_${num}_name` as any)}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">{t(`tool_${num}_desc` as any)}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Notes Section */}
            <section id="notes" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl"><AlertTriangle size={20} /></div>
                {t("notes_title")}
              </h2>
              <div className="glass-panel p-6 rounded-2xl bg-orange-50/50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800">
                <ul className="space-y-4 text-slate-700 dark:text-slate-300 font-medium list-disc pl-5">
                  <li>{t("notes_desc_1")}</li>
                  <li>{t("notes_desc_2")}</li>
                </ul>
              </div>
            </section>

          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
