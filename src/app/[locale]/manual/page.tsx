"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { Terminal, Copy, Check, Info } from "lucide-react";
import { useState } from "react";

export default function ManualPage() {
  const t = useTranslations("ManualPage");
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const CodeBlock = ({ command, multiline = false }: { command: string, multiline?: boolean }) => (
    <div className="relative w-full bg-[#0b0f19] border border-glass-border rounded-xl overflow-hidden group hover:border-neon-cyan/50 transition-colors">
      <div className="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-glass-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <button 
          onClick={() => copyCommand(command)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {copiedCmd === command ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        {multiline ? (
          <pre className="text-sm text-gray-300 font-mono leading-relaxed">
            <code>{command}</code>
          </pre>
        ) : (
          <div className="flex items-center gap-3">
            <span className="text-neon-cyan font-mono flex-shrink-0">$</span>
            <code className="text-sm text-gray-300 font-mono whitespace-nowrap">{command}</code>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-space-900 selection:bg-neon-cyan/30 selection:text-white pt-24">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-10">
        
        {/* Header */}
        <div className="mb-16 border-b border-glass-border pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">{t("title")}</h1>
          <p className="text-xl text-gray-400 font-medium">{t("subtitle")}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sticky Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 hidden md:block">
            <div className="sticky top-32">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">On this page</h4>
              <nav className="space-y-3 border-l-2 border-glass-border pl-4">
                <a href="#problems" className="block text-sm text-gray-400 hover:text-neon-cyan hover:translate-x-1 transition-all">{t("menu_problems")}</a>
                <a href="#notebooklm" className="block text-sm text-gray-400 hover:text-neon-purple hover:translate-x-1 transition-all">{t("menu_notebooklm")}</a>
                <a href="#security" className="block text-sm text-gray-400 hover:text-red-400 hover:translate-x-1 transition-all">{t("menu_security")}</a>
                <a href="#structure" className="block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all">{t("menu_structure")}</a>
                <a href="#guidelines" className="block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all">{t("menu_guidelines")}</a>
                <a href="#themes" className="block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all">{t("menu_themes")}</a>
                <a href="#script" className="block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all">{t("menu_script")}</a>
                <a href="#workflow" className="block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all">{t("menu_workflow")}</a>
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 space-y-24 max-w-3xl">
            
            <section id="problems" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-white mb-6 text-neon-cyan">{t("problems_title")}</h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">{t("problems_p1")}</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-400 mb-8 marker:text-neon-cyan">
                <li><strong className="text-white">Context Size:</strong> {t("problems_li1").split(': ')[1]}</li>
                <li><strong className="text-white">Context Loss:</strong> {t("problems_li2").split(': ')[1]}</li>
                <li><strong className="text-white">Inconsistency:</strong> {t("problems_li3").split(': ')[1]}</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">{t("problems_p2")}</p>
              <div className="bg-white/5 border border-glass-border p-6 rounded-xl space-y-4">
                <div className="flex items-start gap-3"><Check className="text-green-400 mt-1 flex-shrink-0" size={18}/> <span className="text-gray-300">{t("problems_sol1")}</span></div>
                <div className="flex items-start gap-3"><Check className="text-green-400 mt-1 flex-shrink-0" size={18}/> <span className="text-gray-300">{t("problems_sol2")}</span></div>
                <div className="flex items-start gap-3"><Check className="text-green-400 mt-1 flex-shrink-0" size={18}/> <span className="text-gray-300">{t("problems_sol3")}</span></div>
              </div>
            </section>

            <section id="notebooklm" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-white mb-6 text-neon-purple">{t("notebooklm_title")}</h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">{t("notebooklm_p1")}</p>
              <div className="glass-panel border-l-4 border-l-neon-purple p-6 rounded-r-xl mb-8">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-neon-purple" /> {t("notebooklm_li1")}</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-neon-purple" /> {t("notebooklm_li2")}</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-neon-purple" /> {t("notebooklm_li3")}</li>
                </ul>
              </div>
            </section>

            <section id="security" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-white mb-6 text-red-400">{t("security_title")}</h2>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">{t("security_p1")}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#1a0f14] border border-red-500/20 p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Info size={16} className="text-red-400"/> File Operations</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{t("security_li1").split(': ')[1]}</p>
                </div>
                <div className="bg-[#1a0f14] border border-red-500/20 p-6 rounded-xl">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Info size={16} className="text-red-400"/> Secret Scanning</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{t("security_li2").split(': ')[1]}</p>
                </div>
              </div>
            </section>

            <section id="structure" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-white mb-6">{t("structure_title")}</h2>
              <CodeBlock command={t("structure_code")} multiline={true} />
            </section>

            <section id="guidelines" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-white mb-6">{t("guidelines_title")}</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-200 mb-4">{t("guidelines_h3_1")}</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-400 marker:text-gray-600">
                    <li><strong className="text-white">API Contract-First:</strong> {t("guidelines_li1").split(': ')[1]}</li>
                    <li><strong className="text-white">Test-Driven:</strong> {t("guidelines_li2").split(': ')[1]}</li>
                    <li><strong className="text-white">Security:</strong> {t("guidelines_li3").split(': ')[1]}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-200 mb-4">{t("guidelines_h3_2")}</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-400 marker:text-gray-600">
                    <li><strong className="text-white">Startup:</strong> {t("guidelines_li4").split(': ')[1]}</li>
                    <li><strong className="text-white">Decisions:</strong> {t("guidelines_li5").split(': ')[1]}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="themes" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-white mb-6">{t("themes_title")}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{t("themes_p1")}</p>
              <ul className="space-y-3 text-gray-400 mb-8">
                <li className="flex items-center gap-3">🌌 <span className="text-gray-300">{t("themes_li1")}</span></li>
                <li className="flex items-center gap-3">📊 <span className="text-gray-300">{t("themes_li2")}</span></li>
                <li className="flex items-center gap-3">⚪ <span className="text-gray-300">{t("themes_li3")}</span></li>
                <li className="flex items-center gap-3">🍭 <span className="text-gray-300">{t("themes_li4")}</span></li>
              </ul>
              <CodeBlock command={t("themes_code")} />
            </section>

            <section id="script" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-white mb-6">{t("script_title")}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{t("script_p1")}</p>
              <CodeBlock command={t("script_code")} multiline={true} />
            </section>

            <section id="workflow" className="scroll-mt-32">
              <h2 className="text-3xl font-bold text-white mb-6">{t("workflow_title")}</h2>
              <div className="relative border-l-2 border-glass-border ml-4 pl-8 py-2 space-y-12">
                
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-neon-cyan text-black flex items-center justify-center font-bold text-sm">1</div>
                  <h3 className="text-xl font-bold text-neon-cyan mb-4">{t("workflow_h3_1")}</h3>
                  <ul className="list-none space-y-3 text-gray-400">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" /> {t("workflow_li1")}</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" /> {t("workflow_li2")}</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" /> {t("workflow_li3")}</li>
                  </ul>
                </div>

                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">2</div>
                  <h3 className="text-xl font-bold text-white mb-4">{t("workflow_h3_2")}</h3>
                  <ul className="list-none space-y-3 text-gray-400">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" /> {t("workflow_li4")}</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" /> {t("workflow_li5")}</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 flex-shrink-0" /> {t("workflow_li6")}</li>
                  </ul>
                </div>

              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
