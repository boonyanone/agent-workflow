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
    <div className="relative w-full bg-[#0a0a0a] border border-[#333] rounded-md overflow-hidden group hover:border-gray-500 transition-colors">
      <div className="flex items-center justify-between px-4 py-2 bg-[#000000] border-b border-[#333]">
        <div className="flex gap-2 text-xs font-mono text-gray-500">TERMINAL</div>
        <button 
          onClick={() => copyCommand(command)}
          className="text-gray-500 hover:text-white transition-colors"
        >
          {copiedCmd === command ? <Check size={16} className="text-white" /> : <Copy size={16} />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        {multiline ? (
          <pre className="text-sm text-gray-300 font-mono leading-relaxed">
            <code>{command}</code>
          </pre>
        ) : (
          <div className="flex items-center gap-3">
            <span className="text-gray-500 font-mono flex-shrink-0">$</span>
            <code className="text-sm text-gray-300 font-mono whitespace-nowrap">{command}</code>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#000000] pt-24">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-10">
        
        {/* Header */}
        <div className="mb-16 border-b border-[#333] pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">{t("title")}</h1>
          <p className="text-xl text-gray-400 font-medium">{t("subtitle")}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sticky Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 hidden md:block">
            <div className="sticky top-32">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">On this page</h4>
              <nav className="space-y-4 border-l border-[#333] pl-6">
                <a href="#problems" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_problems")}</a>
                <a href="#notebooklm" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_notebooklm")}</a>
                <a href="#security" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_security")}</a>
                <a href="#structure" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_structure")}</a>
                <a href="#guidelines" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_guidelines")}</a>
                <a href="#themes" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_themes")}</a>
                <a href="#script" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_script")}</a>
                <a href="#workflow" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_workflow")}</a>
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 space-y-24 max-w-3xl">
            
            <section id="problems" className="scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">{t("problems_title")}</h2>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">{t("problems_p1")}</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-500 mb-10 marker:text-gray-500">
                <li><strong className="text-white">Context Size:</strong> {t("problems_li1").split(': ')[1]}</li>
                <li><strong className="text-white">Context Loss:</strong> {t("problems_li2").split(': ')[1]}</li>
                <li><strong className="text-white">Inconsistency:</strong> {t("problems_li3").split(': ')[1]}</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">{t("problems_p2")}</p>
              <div className="bg-[#0a0a0a] border border-[#333] p-8 space-y-5">
                <div className="flex items-start gap-4"><Check className="text-white mt-1 flex-shrink-0" size={20}/> <span className="text-gray-300 font-medium">{t("problems_sol1")}</span></div>
                <div className="flex items-start gap-4"><Check className="text-white mt-1 flex-shrink-0" size={20}/> <span className="text-gray-300 font-medium">{t("problems_sol2")}</span></div>
                <div className="flex items-start gap-4"><Check className="text-white mt-1 flex-shrink-0" size={20}/> <span className="text-gray-300 font-medium">{t("problems_sol3")}</span></div>
              </div>
            </section>

            <section id="notebooklm" className="scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">{t("notebooklm_title")}</h2>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">{t("notebooklm_p1")}</p>
              <div className="bg-[#0a0a0a] border-l-4 border-l-white border-t border-b border-r border-[#333] p-8">
                <ul className="space-y-4 text-gray-300 font-medium">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white" /> {t("notebooklm_li1")}</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white" /> {t("notebooklm_li2")}</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white" /> {t("notebooklm_li3")}</li>
                </ul>
              </div>
            </section>

            <section id="security" className="scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">{t("security_title")}</h2>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">{t("security_p1")}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0a0a0a] border border-[#333] p-8">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2"><Info size={18} className="text-gray-500"/> File Operations</h4>
                  <p className="text-gray-400 leading-relaxed">{t("security_li1").split(': ')[1]}</p>
                </div>
                <div className="bg-[#0a0a0a] border border-[#333] p-8">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2"><Info size={18} className="text-gray-500"/> Secret Scanning</h4>
                  <p className="text-gray-400 leading-relaxed">{t("security_li2").split(': ')[1]}</p>
                </div>
              </div>
            </section>

            <section id="structure" className="scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">{t("structure_title")}</h2>
              <CodeBlock command={t("structure_code")} multiline={true} />
            </section>

            <section id="guidelines" className="scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">{t("guidelines_title")}</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm">{t("guidelines_h3_1")}</h3>
                  <ul className="list-none space-y-4 text-gray-400">
                    <li className="flex gap-4 border-b border-[#222] pb-4"><strong className="text-white w-40 shrink-0">API Contract-First:</strong> {t("guidelines_li1").split(': ')[1]}</li>
                    <li className="flex gap-4 border-b border-[#222] pb-4"><strong className="text-white w-40 shrink-0">Test-Driven:</strong> {t("guidelines_li2").split(': ')[1]}</li>
                    <li className="flex gap-4 border-b border-[#222] pb-4"><strong className="text-white w-40 shrink-0">Security:</strong> {t("guidelines_li3").split(': ')[1]}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm">{t("guidelines_h3_2")}</h3>
                  <ul className="list-none space-y-4 text-gray-400">
                    <li className="flex gap-4 border-b border-[#222] pb-4"><strong className="text-white w-40 shrink-0">Initialization:</strong> {t("guidelines_li4").split(': ')[1]}</li>
                    <li className="flex gap-4 border-b border-[#222] pb-4"><strong className="text-white w-40 shrink-0">Decisions:</strong> {t("guidelines_li5").split(': ')[1]}</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="themes" className="scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">{t("themes_title")}</h2>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">{t("themes_p1")}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <li className="bg-[#0a0a0a] border border-[#333] p-4 text-gray-300 font-medium">🌌 {t("themes_li1").split(': ')[1]}</li>
                <li className="bg-[#0a0a0a] border border-[#333] p-4 text-gray-300 font-medium">📊 {t("themes_li2").split(': ')[1]}</li>
                <li className="bg-[#0a0a0a] border border-white p-4 text-white font-bold">⚪ {t("themes_li3").split(': ')[1]}</li>
                <li className="bg-[#0a0a0a] border border-[#333] p-4 text-gray-300 font-medium">🍭 {t("themes_li4").split(': ')[1]}</li>
              </ul>
              <CodeBlock command={t("themes_code")} />
            </section>

            <section id="script" className="scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">{t("script_title")}</h2>
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">{t("script_p1")}</p>
              <CodeBlock command={t("script_code")} multiline={true} />
            </section>

            <section id="workflow" className="scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-white mb-8 tracking-tight">{t("workflow_title")}</h2>
              <div className="border-l border-[#333] ml-4 pl-10 py-2 space-y-16">
                
                <div className="relative">
                  <div className="absolute -left-[51px] top-0 w-6 h-6 bg-white text-black flex items-center justify-center font-bold text-sm">1</div>
                  <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm">{t("workflow_h3_1")}</h3>
                  <ul className="list-none space-y-4 text-gray-400 font-medium">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-600" /> {t("workflow_li1")}</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-600" /> {t("workflow_li2")}</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-600" /> {t("workflow_li3")}</li>
                  </ul>
                </div>

                <div className="relative">
                  <div className="absolute -left-[51px] top-0 w-6 h-6 bg-gray-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                  <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-sm">{t("workflow_h3_2")}</h3>
                  <ul className="list-none space-y-4 text-gray-400 font-medium">
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-600" /> {t("workflow_li4")}</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-600" /> {t("workflow_li5")}</li>
                    <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-gray-600" /> {t("workflow_li6")}</li>
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
