"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import { Copy, Check } from "lucide-react";
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
    <div className="relative w-full bg-[#111] border border-[#333] rounded overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-[#050505] border-b border-[#333]">
        <div className="text-xs font-mono text-gray-500">BASH</div>
        <button 
          onClick={() => copyCommand(command)}
          className="text-gray-500 hover:text-white transition-colors"
        >
          {copiedCmd === command ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
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
    <main className="min-h-screen bg-[#000000] pt-24 text-gray-300">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-10">
        
        {/* Header */}
        <div className="mb-12 border-b border-[#333] pb-8">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">{t("title")}</h1>
          <p className="text-lg text-gray-400">{t("subtitle")}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sticky Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 hidden md:block">
            <div className="sticky top-32">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">TABLE OF CONTENTS</h4>
              <nav className="space-y-4 border-l border-[#333] pl-6">
                <a href="#sec1" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_1")}</a>
                <a href="#sec2" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_2")}</a>
                <a href="#sec3" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_3")}</a>
                <a href="#sec4" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_4")}</a>
                <a href="#sec5" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_5")}</a>
                <a href="#sec6" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_6")}</a>
                <a href="#sec7" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_7")}</a>
                <a href="#sec8" className="block text-sm font-medium text-gray-500 hover:text-white transition-colors">{t("menu_8")}</a>
              </nav>
            </div>
          </aside>

          {/* Main Content Area - Plain Text Style */}
          <div className="flex-1 max-w-3xl">
            <article className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none space-y-16">
              
              {/* Sec 1 */}
              <section id="sec1" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4">{t("sec_1_title")}</h2>
                <p className="mb-4 text-gray-400 leading-relaxed">{t("sec_1_desc")}</p>
                <ul className="list-decimal pl-6 space-y-3 mb-6">
                  <li>{t("sec_1_step_1")}</li>
                  <li>{t("sec_1_step_2")}
                    <CodeBlock command={t("sec_1_cmd_1")} />
                  </li>
                  <li><strong>{t("sec_1_step_3_title")}</strong>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>{t("sec_1_step_3_a")}</li>
                      <li>{t("sec_1_step_3_b")}</li>
                      <li>{t("sec_1_step_3_c")}</li>
                    </ul>
                  </li>
                </ul>
                <p className="mt-4 mb-2">{t("sec_1_note")}</p>
                <CodeBlock command={t("sec_1_cmd_2")} />
              </section>

              {/* Sec 2 */}
              <section id="sec2" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4">{t("sec_2_title")}</h2>
                <p className="mb-4 text-gray-400 leading-relaxed">{t("sec_2_desc")}</p>
                <CodeBlock command={t("sec_2_cmd_1")} />
                <p className="mt-4 text-sm text-gray-400">{t("sec_2_note")}</p>
              </section>

              {/* Sec 3 */}
              <section id="sec3" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4">{t("sec_3_title")}</h2>
                <p className="mb-4 text-gray-400 leading-relaxed">{t("sec_3_desc")}</p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>{t("sec_3_step_1")}</li>
                  <li>{t("sec_3_step_2")}</li>
                  <li>{t("sec_3_step_3")}</li>
                  <li>{t("sec_3_step_4")}</li>
                </ol>
              </section>

              {/* Sec 4 */}
              <section id="sec4" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4">{t("sec_4_title")}</h2>
                <p className="mb-6 text-gray-400 leading-relaxed">{t("sec_4_desc")}</p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-mono text-white bg-[#111] px-2 py-1 inline-block rounded mb-2">{t("sec_4_file_1")}</h3>
                    <p className="text-gray-400 mb-2">{t("sec_4_desc_1")}</p>
                    <CodeBlock command={t("sec_4_cmd_1")} />
                  </div>
                  <div>
                    <h3 className="font-mono text-white bg-[#111] px-2 py-1 inline-block rounded mb-2">{t("sec_4_file_2")}</h3>
                    <p className="text-gray-400 mb-2">{t("sec_4_desc_2")}</p>
                    <CodeBlock command={t("sec_4_cmd_2")} />
                  </div>
                  <div>
                    <h3 className="font-mono text-white bg-[#111] px-2 py-1 inline-block rounded mb-2">{t("sec_4_file_3")}</h3>
                    <p className="text-gray-400">{t("sec_4_desc_3")}</p>
                  </div>
                </div>
              </section>

              {/* Sec 5 */}
              <section id="sec5" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4">{t("sec_5_title")}</h2>
                <p className="mb-4 text-gray-400 leading-relaxed">{t("sec_5_desc")}</p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>{t("sec_5_step_1")}
                    <CodeBlock command={t("sec_5_cmd_1")} />
                  </li>
                  <li>{t("sec_5_step_2")}</li>
                  <li>{t("sec_5_step_3")}</li>
                  <li>{t("sec_5_step_4")}</li>
                </ol>
              </section>

              {/* Sec 6 */}
              <section id="sec6" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4">{t("sec_6_title")}</h2>
                <p className="mb-4 text-gray-400 leading-relaxed">{t("sec_6_desc")}</p>
                <CodeBlock command={t("sec_6_cmd_1")} />
                <p className="mt-4 text-sm text-gray-400">{t("sec_6_note")}</p>
              </section>

              {/* Sec 7 */}
              <section id="sec7" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4">{t("sec_7_title")}</h2>
                <p className="mb-6 text-gray-400 leading-relaxed">{t("sec_7_desc")}</p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>{t("sec_7_step_1")}</li>
                  <li>{t("sec_7_step_2")}
                    <p className="text-sm text-yellow-500/80 mt-2 bg-yellow-500/10 p-3 rounded">{t("sec_7_step_2_note")}</p>
                  </li>
                  <li>{t("sec_7_step_3")}
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>{t("sec_7_step_3_a")}</li>
                      <li>{t("sec_7_step_3_b")}</li>
                      <li>{t("sec_7_step_3_c")}</li>
                    </ul>
                  </li>
                  <li>{t("sec_7_step_4")}
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>{t("sec_7_step_4_a")}</li>
                      <li>{t("sec_7_step_4_b")}</li>
                    </ul>
                  </li>
                </ol>
              </section>

              {/* Sec 8 */}
              <section id="sec8" className="scroll-mt-32">
                <h2 className="text-2xl font-bold text-white mb-4">{t("sec_8_title")}</h2>
                <p className="mb-6 text-gray-400 leading-relaxed">{t("sec_8_desc")}</p>
                <div className="overflow-x-auto border border-[#333] rounded-lg">
                  <table className="min-w-full divide-y divide-[#333] text-left">
                    <thead className="bg-[#111]">
                      <tr>
                        <th className="px-6 py-4 font-mono text-sm text-white">{t("sec_8_th_1")}</th>
                        <th className="px-6 py-4 text-sm text-white">{t("sec_8_th_2")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#333] bg-[#050505]">
                      {[
                        [t("sec_8_tr_1_1"), t("sec_8_tr_1_2")],
                        [t("sec_8_tr_2_1"), t("sec_8_tr_2_2")],
                        [t("sec_8_tr_3_1"), t("sec_8_tr_3_2")],
                        [t("sec_8_tr_4_1"), t("sec_8_tr_4_2")],
                        [t("sec_8_tr_5_1"), t("sec_8_tr_5_2")],
                        [t("sec_8_tr_6_1"), t("sec_8_tr_6_2")],
                        [t("sec_8_tr_7_1"), t("sec_8_tr_7_2")],
                        [t("sec_8_tr_8_1"), t("sec_8_tr_8_2")],
                        [t("sec_8_tr_9_1"), t("sec_8_tr_9_2")],
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-[#111] transition-colors">
                          <td className="px-6 py-4 font-mono text-sm text-blue-400">{row[0]}</td>
                          <td className="px-6 py-4 text-sm text-gray-300">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

            </article>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
