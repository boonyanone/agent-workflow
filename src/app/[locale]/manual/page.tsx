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
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-32 pt-10">
        
        {/* Header */}
        <div className="mb-12 border-b border-[#333] pb-8">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">{t("title")}</h1>
          <p className="text-lg text-gray-400">{t("subtitle")}</p>
        </div>

        {/* Main Content Area - Plain Text Style */}
        <article className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t("install_title")}</h2>
            <p className="mb-4 text-gray-400 leading-relaxed">{t("install_desc")}</p>
            <CodeBlock command="git clone https://github.com/boonyanone/ai-coding-protocol.git" />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">{t("core_commands_title")}</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{t("cmd_check_title")}</h3>
                <p className="mb-3 text-gray-400 leading-relaxed">{t("cmd_check_desc")}</p>
                <CodeBlock command="./ai-protocol.sh check" />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{t("cmd_clean_title")}</h3>
                <p className="mb-3 text-gray-400 leading-relaxed">{t("cmd_clean_desc")}</p>
                <CodeBlock command="./ai-protocol.sh clean" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{t("cmd_handoff_title")}</h3>
                <p className="mb-3 text-gray-400 leading-relaxed">{t("cmd_handoff_desc")}</p>
                <CodeBlock command="./ai-protocol.sh handoff" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t("structure_title")}</h2>
            <CodeBlock multiline command={`/ (Root Project)
├── .ai/
│   ├── STATE.md                    # Active task state machine
│   ├── REFLECTIONS.md              # Historical bug fixes & learnings
│   ├── DECISIONS.md                # Architecture Decision Records
│   ├── templates/                  # Boilerplate blueprints
│   ├── prompts/                    # Bootstrap instructions
│   └── docs/                       # Project knowledge base
├── ai-protocol.sh                   # CLI orchestrator
└── SKILL.md                         # Core agent directives`} />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{t("workflow_title")}</h2>
            <ul className="list-decimal pl-6 space-y-4 text-gray-300">
              <li>{t("workflow_1")}</li>
              <li>{t("workflow_2")}</li>
              <li>{t("workflow_3")}</li>
            </ul>
          </section>

        </article>

      </div>
      <Footer />
    </main>
  );
}
