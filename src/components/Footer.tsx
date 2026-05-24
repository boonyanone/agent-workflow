"use client";

import { Terminal, GitBranch, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-space-900 border-t border-glass-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <Terminal size={20} className="text-neon-cyan" />
            <span className="font-bold text-lg text-white">
              Agent <span className="text-neon-cyan">Workflow</span> Hub
            </span>
          </div>

          <div className="text-sm text-gray-500 flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500" /> for the AI Coding Community
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/boonyanone/ai-coding-protocol" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GitBranch size={20} />
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
