'use client';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science & Engineering",
    score: "CGPA: 6.55",
    year: "2023 – Present"
  },
  {
    institution: "Sarla Birla Public School",
    degree: "Intermediate",
    score: "Percentage: 72.2%",
    year: "Graduated"
  },
  {
    institution: "Vikas Vidyalaya",
    degree: "Matriculation",
    score: "Percentage: 76.4%",
    year: "Graduated"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 z-10">
        <SectionHeading title="Education" subtitle="My academic background" />
        
        <div className="max-w-4xl mx-auto grid gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between group hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div className="p-3 bg-white/5 rounded-xl text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <h4 className="text-gray-400 font-medium mb-2">{edu.institution}</h4>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {edu.score}
                  </span>
                </div>
              </div>
              <div className="text-left md:text-right">
                <span className="text-gray-500 font-semibold tracking-wide block md:inline">{edu.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
