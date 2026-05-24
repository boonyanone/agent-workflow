"use client";

import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, GitBranch, ArrowRight } from "lucide-react";

const skills = [
  {
    name: "Deep Research (NotebookLM)",
    description: "Offload massive documentation to Google NotebookLM. The agent queries the MCP instead of reading 10k lines of code, saving massive tokens.",
    icon: <BookOpen className="text-neon-cyan" />,
    badge: "Built-in"
  },
  {
    name: "Atomic Write Security",
    description: "Enterprise-grade file writing lock. Prevents symlink hijacking and race conditions when automated agents modify your codebase.",
    icon: <ShieldCheck className="text-green-400" />,
    badge: "Built-in"
  },
  {
    name: "Git Pre-commit Guard",
    description: "A strict git hook that recursively scans for .env files to ensure agents never accidentally commit your API keys.",
    icon: <GitBranch className="text-white" />,
    badge: "Built-in"
  }
];

export default function SkillHubTeaser() {
  return (
    <section id="skills" className="py-24 bg-space-800 relative border-y border-glass-border">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-cyan/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Agent Skill Hub</h2>
            <p className="text-gray-400 text-lg">
              The AI Coding Protocol is just the beginning. We are building a centralized registry of "Skills"—standardized tools and prompts that give your agents specific superpowers.
            </p>
          </div>
          <button className="px-6 py-2 rounded-full border border-glass-border bg-white/5 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2 whitespace-nowrap">
            Explore Registry <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-black/50 border border-glass-border flex items-center justify-center">
                  {skill.icon}
                </div>
                <span className="px-2 py-1 rounded text-xs font-medium bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                  {skill.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center p-8 border border-dashed border-gray-700 rounded-xl bg-black/20">
          <p className="text-gray-400 font-medium">More community skills coming soon...</p>
        </div>
      </div>
    </section>
  );
}
