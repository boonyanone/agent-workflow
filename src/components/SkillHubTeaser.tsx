"use client";

import { motion } from "framer-motion";
import { BookOpen, ShieldCheck, GitBranch, ArrowRight } from "lucide-react";

const skills = [
  {
    name: "Deep Research (NotebookLM)",
    description: "Offload massive documentation to Google NotebookLM. The agent queries the MCP instead of reading 10k lines of code, saving massive tokens.",
    icon: <BookOpen className="text-blue-500" />,
    badge: "Built-in"
  },
  {
    name: "Atomic Write Security",
    description: "Enterprise-grade file writing lock. Prevents symlink hijacking and race conditions when automated agents modify your codebase.",
    icon: <ShieldCheck className="text-green-500" />,
    badge: "Built-in"
  },
  {
    name: "Git Pre-commit Guard",
    description: "A strict git hook that recursively scans for .env files to ensure agents never accidentally commit your API keys.",
    icon: <GitBranch className="text-purple-500" />,
    badge: "Built-in"
  }
];

export default function SkillHubTeaser() {
  return (
    <section id="skills" className="py-24 bg-white/50 dark:bg-indigo-950/50 relative border-y border-slate-200 dark:border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">The Agent Skill Hub</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium text-lg">
              The AI Coding Protocol is just the beginning. We are building a centralized registry of "Skills"—standardized tools and prompts that give your agents specific superpowers.
            </p>
          </div>
          <button className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold hover:shadow-lg hover:-translate-y-1 transition-all shadow-sm border border-slate-200 dark:border-slate-700 flex items-center gap-2 whitespace-nowrap active:scale-95">
            Explore Registry <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-black/30 border border-slate-200 dark:border-white/10 flex items-center justify-center">
                  {skill.icon}
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                  {skill.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{skill.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center p-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-white/40 dark:bg-black/20">
          <p className="text-slate-500 dark:text-slate-400 font-semibold">More community skills coming soon...</p>
        </div>
      </div>
    </section>
  );
}
