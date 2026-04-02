"use client";

import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award } from 'lucide-react';

const EDUCATION = [
  {
    institution: "Lovely Professional University, Punjab",
    degree: "Bachelor of Technology – Computer Science and Engineering",
    duration: "Aug 2023 – Present",
    score: "CGPA: 6.55",
    icon: <GraduationCap size={24} className="text-primary" />
  },
  {
    institution: "Sarla Birla Public School, Ranchi",
    degree: "Intermediate",
    duration: "Completed",
    score: "Percentage: 72.2%",
    icon: <BookOpen size={24} className="text-secondary" />
  },
  {
    institution: "Vikas Vidyalaya, Ranchi",
    degree: "Matriculation",
    duration: "Completed",
    score: "Percentage: 76.4%",
    icon: <BookOpen size={24} className="text-purple-400" />
  },
  {
    institution: "Center for Professional Enhancement (LPU)",
    degree: "Java Bootcamp",
    duration: "Jun 2025 – Jul 2025",
    score: "DSA, Comp Programming",
    icon: <Award size={24} className="text-yellow-500" />
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#020617]/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education & Training</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          {EDUCATION.map((ed, idx) => (
            <motion.div
              key={ed.institution}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-[.is-active]:bg-slate-800 text-slate-500 group-[.is-active]:text-indigo-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                {ed.icon}
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800 shadow-xl group-hover:border-indigo-500/30 transition-colors">
                <div className="flex flex-col mb-2">
                  <h3 className="font-bold text-lg text-white">{ed.degree}</h3>
                  <div className="text-primary font-medium text-sm my-1">{ed.institution}</div>
                  <time className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{ed.duration}</time>
                </div>
                <div className="text-gray-400 mt-2">
                  <span className="inline-block px-3 py-1 bg-slate-800 text-gray-300 rounded-md text-sm font-medium">
                    {ed.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
