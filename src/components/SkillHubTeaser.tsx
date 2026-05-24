"use client";

import { motion } from "framer-motion";
import { Wrench, TerminalSquare, Database } from "lucide-react";

export default function SkillHubTeaser() {
  return (
    <section className="py-24 relative overflow-hidden bg-space-900 border-t border-glass-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-glass-border text-gray-300 text-sm font-medium mb-6">
          <Wrench size={16} className="text-neon-cyan" />
          Coming Soon
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Agent Skill Hub
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg mb-12"
        >
          An open-source marketplace for AI agent skills. Install pre-configured workflows, MCP servers, and API connectors directly into your `.ai` workspace.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          {[
            { name: "Google Cloud Skill", desc: "Deploy functions and query BigQuery.", icon: <Database className="text-blue-400" /> },
            { name: "GitHub MCP", desc: "Manage PRs and review code automatically.", icon: <TerminalSquare className="text-purple-400" /> },
            { name: "Firebase Toolkit", desc: "Read and write to Firestore securely.", icon: <Database className="text-orange-400" /> }
          ].map((skill, i) => (
            <div key={i} className="glass-panel p-6 rounded-xl border border-glass-border opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-not-allowed">
              <div className="flex items-center gap-3 mb-3">
                {skill.icon}
                <h4 className="font-bold text-white">{skill.name}</h4>
              </div>
              <p className="text-sm text-gray-400">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
