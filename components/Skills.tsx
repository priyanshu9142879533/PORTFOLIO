'use client';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

const skillCategories = [
  {
    title: "Languages",
    skills: ["C/C++", "JavaScript", "Python"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Frameworks & Libraries",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Scikit-learn"],
    color: "from-purple-500 to-indigo-400"
  },
  {
    title: "Tools & Platforms",
    skills: ["MySQL", "Jupyter Notebook", "Git", "GitHub", "Kaggle", "Power BI", "Excel"],
    color: "from-pink-500 to-rose-400"
  },
  {
    title: "Core Subjects",
    skills: ["DBMS", "Operating Systems", "Computer Networks", "SQL", "OOPs"],
    color: "from-amber-500 to-orange-400"
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Time Management", "Adaptability", "Problem Solving"],
    color: "from-emerald-500 to-teal-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 z-10">
        <SectionHeading title="My Skills" subtitle="Technologies and tools I work with" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <span className={`w-3 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                {category.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    variants={itemVariants}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
