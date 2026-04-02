"use client";

import { motion } from 'framer-motion';
import { Trophy, Star, Target, Code, CheckCircle } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    title: "5-Star on LeetCode",
    description: "Achieved and maintained a top-tier rating on LeetCode platform.",
    icon: <Star className="text-yellow-400 w-8 h-8" />
  },
  {
    title: "150+ Coding Problems Solved",
    description: "Consistently challenged myself with complex algorithmic problems.",
    icon: <Target className="text-red-400 w-8 h-8" />
  },
  {
    title: "Daily Coding Streak",
    description: "Maintained a sharp daily routine of solving coding problems.",
    icon: <Code className="text-green-400 w-8 h-8" />
  }
];

const CERTIFICATIONS = [
  "ChatGPT-4 Prompt Engineering (Infosys Springboard)",
  "Java Bootcamp (Center for Professional Enhancement LPU)",
  "C and C++ Programming with ChatGPT Practical (Udemy)",
  "Computational Theory (Infosys)"
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Achievements Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="text-primary w-8 h-8" />
              <h3 className="text-3xl font-bold text-white">Highlights</h3>
            </div>
            <div className="space-y-6">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="flex bg-slate-900/50 backdrop-blur-md border border-slate-800 p-5 rounded-xl hover:bg-slate-800/50 transition-colors">
                  <div className="shrink-0 mr-4 mt-1 bg-slate-800 p-3 rounded-xl border border-slate-700">
                    {ach.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-200 mb-1">{ach.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="text-secondary w-8 h-8" />
              <h3 className="text-3xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="group relative bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-colors">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start">
                    <span className="text-indigo-400 mr-3 mt-1">
                      <Target size={18} />
                    </span>
                    <p className="text-gray-300 font-medium leading-snug">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
