"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { Terminal, Copy, Check, Layers, Settings, Wrench, Shield, ArrowRight } from "lucide-react";
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
    <div className="relative group w-full mb-8">
      <div className="relative flex items-start justify-between gap-4 bg-slate-900 border border-slate-800 px-6 py-5 rounded-2xl shadow-sm">
        <div className="flex items-start gap-3 overflow-x-auto w-full">
          <Terminal size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />
          <pre className="text-slate-300 font-mono text-sm whitespace-pre-wrap break-all leading-relaxed">
            <code>{command}</code>
          </pre>
        </div>
        <button 
          onClick={() => copyCommand(command)}
          className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-500 hover:text-white flex-shrink-0"
        >
          {copiedCmd === command ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
        </button>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
        
        {/* Sticky Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0 hidden md:block">
          <div className="sticky top-32">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider text-xs">Table of Contents</h3>
            <nav className="space-y-1 border-l-2 border-slate-200 dark:border-slate-800">
              <a href="#intro" className="block text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors py-2 pl-4 border-l-2 border-transparent hover:border-slate-400 -ml-[2px]">{t("menu_intro")}</a>
              <a href="#install" className="block text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors py-2 pl-4 border-l-2 border-transparent hover:border-slate-400 -ml-[2px]">{t("menu_install")}</a>
              <a href="#auth" className="block text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors py-2 pl-4 border-l-2 border-transparent hover:border-slate-400 -ml-[2px]">{t("menu_auth")}</a>
              <a href="#usage" className="block text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors py-2 pl-4 border-l-2 border-transparent hover:border-slate-400 -ml-[2px]">{t("menu_usage")}</a>
              <a href="#tools" className="block text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors py-2 pl-4 border-l-2 border-transparent hover:border-slate-400 -ml-[2px]">{t("menu_tools")}</a>
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 max-w-4xl">
          <div className="mb-16 border-b border-slate-200 dark:border-slate-800 pb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">{t("title")}</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{t("subtitle")}</p>
          </div>

          <div className="space-y-20">
            
            {/* Intro Section */}
            <section id="intro" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Layers size={28} className="text-blue-500" />
                {t("intro_title")}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{t("intro_desc")}</p>
            </section>

            {/* Install Section */}
            <section id="install" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Terminal size={28} className="text-purple-500" />
                {t("install_title")}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{t("install_desc")}</p>
              <CodeBlock command={`${t("install_cmd_1")}\n${t("install_cmd_2")}`} multiLine />
            </section>

            {/* Auth Section */}
            <section id="auth" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Shield size={28} className="text-emerald-500" />
                {t("auth_title")}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">{t("auth_desc")}</p>
              
              <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl mb-8">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">{t("auth_sub_1")}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg">{t("auth_sub_1_desc")}</p>
                <CodeBlock command={t("auth_cmd_1")} />
              </div>
            </section>

            {/* Usage/Config Section */}
            <section id="usage" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Settings size={28} className="text-orange-500" />
                {t("usage_title")}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{t("usage_desc")}</p>
              <CodeBlock command={`{\n  "mcpServers": {\n    "notebooklm": {\n      "command": "node",\n      "args": ["/absolute/path/to/antigravity-notebooklm-mcp/build/index.js"]\n    }\n  }\n}`} multiLine />
            </section>

            {/* Tools Section */}
            <section id="tools" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Wrench size={28} className="text-sky-500" />
                {t("tools_title")}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">{t("tools_desc")}</p>
              
              <div className="space-y-12">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="bg-white dark:bg-[#111] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
                    {/* Tool Header */}
                    <div className="bg-slate-50 dark:bg-slate-900/40 px-8 py-6 border-b border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-4">
                        <h4 className="font-mono text-xl font-bold text-blue-600 dark:text-blue-400">
                          {t(`tool_${num}_name` as any)}
                        </h4>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mt-2 text-lg font-medium">{t(`tool_${num}_desc` as any)}</p>
                    </div>
                    
                    {/* Tool Details Grid */}
                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">{t("tool_what")}</h5>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{t(`tool_${num}_what` as any)}</p>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">{t("tool_how")}</h5>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{t(`tool_${num}_how` as any)}</p>
                      </div>
                      
                      <div className="md:col-span-2 bg-slate-50 dark:bg-slate-900/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                        <div className="flex items-start gap-3">
                          <ArrowRight className="text-blue-500 mt-1 flex-shrink-0" size={20} />
                          <div>
                            <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{t("tool_usage")}</h5>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t(`tool_${num}_usage` as any)}</p>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-2 flex items-start gap-3">
                        <div className="p-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg mt-0.5">
                          <Check size={16} />
                        </div>
                        <div>
                          <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{t("tool_result")}</h5>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{t(`tool_${num}_result` as any)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
