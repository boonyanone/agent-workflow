"use client";

import { Terminal, GitBranch, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black/20 border-t border-slate-200 dark:border-white/5 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-blue-500 text-white">
              <Terminal size={18} />
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-white">
              Agent <span className="text-blue-500">Workflow</span> Hub
            </span>
          </div>

          <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
            Built with <Heart size={14} className="text-pink-500 mx-1" /> for the AI Coding Community
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/boonyanone/ai-coding-protocol" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <GitBranch size={20} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
