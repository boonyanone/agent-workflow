"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { Terminal, Copy, Check } from "lucide-react";
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
    <div className="flex items-center justify-between w-full bg-black/60 border border-glass-border rounded-lg p-2 group hover:border-neon-cyan/50 transition-colors">
      <div className="flex items-center gap-3 px-2 overflow-x-auto">
        <span className="text-neon-cyan font-mono flex-shrink-0">$</span>
        <code className="text-sm text-gray-300 font-mono whitespace-nowrap">{command}</code>
      </div>
      <button 
        onClick={() => copyCommand(command)}
        className="p-2 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white flex-shrink-0"
      >
        {copiedCmd === command ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
      </button>
    </div>
  );

  return (
    <main className="min-h-screen bg-space-900 selection:bg-neon-cyan/30 selection:text-white pt-24">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-10">
        <div className="mb-12 border-b border-glass-border pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">{t("title")}</h1>
          <p className="text-xl text-gray-400 font-medium">{t("subtitle")}</p>
        </div>

        <div className="space-y-16">
          
          {/* Intro */}
          <section id="intro">
            <h2 className="text-2xl font-bold text-white mb-4 text-neon-cyan">{t("intro_title")}</h2>
            <p className="text-gray-300 leading-relaxed bg-white/5 p-6 rounded-xl border border-glass-border">{t("intro_desc")}</p>
          </section>

          {/* Commands Table */}
          <section id="install">
            <h2 className="text-2xl font-bold text-white mb-4 text-neon-purple">{t("install_title")}</h2>
            <p className="text-gray-400 mb-6">{t("install_desc")}</p>
            
            <div className="overflow-x-auto glass-panel rounded-xl border border-glass-border">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/40 border-b border-glass-border">
                    <th className="py-4 px-6 text-sm font-semibold text-gray-300 w-1/2">{t("cmd_col_1")}</th>
                    <th className="py-4 px-6 text-sm font-semibold text-gray-300 w-1/2">{t("cmd_col_2")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glass-border">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6"><CodeBlock command={t("cmd_val_1")} /></td>
                    <td className="py-4 px-6 text-gray-300">{t("cmd_desc_1")}</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6"><CodeBlock command={t("cmd_val_2")} /></td>
                    <td className="py-4 px-6 text-gray-300">{t("cmd_desc_2")}</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6"><CodeBlock command={t("cmd_val_3")} /></td>
                    <td className="py-4 px-6 text-gray-300">{t("cmd_desc_3")}</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6"><CodeBlock command={t("cmd_val_4")} /></td>
                    <td className="py-4 px-6 text-gray-300">{t("cmd_desc_4")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* MCP Tools Table */}
          <section id="tools">
            <h2 className="text-2xl font-bold text-white mb-4 text-neon-blue">{t("tools_title")}</h2>
            <p className="text-gray-400 mb-6">{t("tools_desc")}</p>
            
            <div className="overflow-x-auto glass-panel rounded-xl border border-glass-border">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/40 border-b border-glass-border">
                    <th className="py-4 px-6 text-sm font-semibold text-gray-300 w-1/4">{t("tool_col_1")}</th>
                    <th className="py-4 px-6 text-sm font-semibold text-gray-300 w-2/4">{t("tool_col_2")}</th>
                    <th className="py-4 px-6 text-sm font-semibold text-gray-300 w-1/4">{t("tool_col_3")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-glass-border">
                  {[1, 2, 3, 4].map((num) => (
                    <tr key={num} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6">
                        <span className="font-mono text-neon-cyan bg-neon-cyan/10 px-2 py-1 rounded text-sm">
                          {t(`tool_${num}_name` as any)}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-300">{t(`tool_${num}_desc` as any)}</td>
                      <td className="py-4 px-6 text-green-400 text-sm">{t(`tool_${num}_res` as any)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}
