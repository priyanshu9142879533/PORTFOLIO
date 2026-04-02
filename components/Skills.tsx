"use client";

import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "C", level: 85 },
    ]
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "NumPy", level: 85 },
      { name: "Pandas", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "Seaborn", level: 80 },
      { name: "Plotly", level: 75 },
      { name: "Scikit-Learn", level: 70 },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Jupyter", level: 90 },
      { name: "Git & GitHub", level: 80 },
      { name: "Kaggle", level: 75 },
      { name: "Power BI", level: 80 },
      { name: "Excel", level: 90 },
    ]
  },
  {
    title: "Core CS",
    skills: [
      { name: "DBMS", level: 85 },
      { name: "SQL", level: 90 },
      { name: "OOPs", level: 85 },
      { name: "OS", level: 80 },
      { name: "Computer Networks", level: 75 },
    ]
  }
];

const SOFT_SKILLS = ["Time Management", "Leadership", "Problem Solving", "Adaptability", "Quick Learner"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#020617]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core Competencies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-slate-800 pb-2">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {SOFT_SKILLS.map((skill) => (
              <span key={skill} className="px-5 py-2.5 bg-slate-900 border border-slate-700 text-gray-300 rounded-lg text-sm font-medium hover:border-indigo-500 hover:text-white transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
