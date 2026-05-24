"use client";

import { motion } from "framer-motion";
import { BrainCircuit, PaintRoller, Zap, ArrowRight } from "lucide-react";

const features = [
  {
    title: "No More Context Bloat",
    description: "Instead of feeding the AI your entire codebase, the protocol uses STATE.md to maintain a lightweight, always-accurate RAM of the current task.",
    icon: <BrainCircuit size={24} className="text-neon-cyan" />,
    problem: "Chats get too long, slow down, and cost too many tokens.",
    solution: "A 20-line STATE.md file keeps the AI focused and lightning fast."
  },
  {
    title: "Cure Agent Amnesia",
    description: "When a chat breaks or gets too long, our One-Click Handoff script packs up the context and sends it to a new session perfectly.",
    icon: <Zap size={24} className="text-yellow-400" />,
    problem: "Starting a new chat means the AI forgets your rules and past bugs.",
    solution: "Seamless handoffs preserve architectural decisions and lessons learned."
  },
  {
    title: "Consistent UI Design",
    description: "Enforce a Single Source of Truth for your design system. The AI reads your UI guidelines before writing any frontend code.",
    icon: <PaintRoller size={24} className="text-neon-purple" />,
    problem: "The AI invents new colors and layouts that break your design.",
    solution: "Strict design tokens ensure pixel-perfect consistency."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-space-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Problems We Solve</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Coding with AI is amazing until the context window fills up. We built the protocol to handle the messy parts so you can focus on shipping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-panel p-8 rounded-2xl flex flex-col h-full hover:border-neon-cyan/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-glass-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow">{feature.description}</p>
              
              <div className="bg-black/40 rounded-lg p-4 text-sm border border-glass-border">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-red-400 font-bold">❌</span>
                  <span className="text-gray-300">{feature.problem}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">✅</span>
                  <span className="text-white">{feature.solution}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
