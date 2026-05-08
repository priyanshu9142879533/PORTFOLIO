'use client';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { BookOpen, Code, Lightbulb, Users } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: <BookOpen className="text-primary" size={24}/>, title: "Continuous Learner", desc: "Quick learner with a passion for emerging technologies." },
  { icon: <Code className="text-secondary" size={24}/>, title: "Clean Code", desc: "Writing efficient, maintainable, and readable code." },
  { icon: <Lightbulb className="text-accent" size={24}/>, title: "Problem Solver", desc: "Strong analytical skills to tackle complex challenges." },
  { icon: <Users className="text-blue-400" size={24}/>, title: "Leadership", desc: "Proven leadership qualities and teamwork skills." },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 z-10">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 relative overflow-hidden group h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-150" />
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full inline-block" /> Who am I?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I am a <span className="text-white font-semibold">B.Tech Computer Science Engineering student</span> at Lovely Professional University. I am deeply passionate about Python, Data Analytics, Java, and Problem Solving.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              My main areas of interest include <span className="text-white font-semibold">AI, Data Visualization, and Software Development</span>. I consider myself a quick learner equipped with strong analytical abilities and leadership qualities, constantly seeking opportunities to build impactful solutions and grow professionally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col items-start hover:-translate-y-2 transition-transform cursor-pointer group"
              >
                <div className="p-3 bg-white/5 rounded-xl mb-4 group-hover:scale-110 transition-transform group-hover:bg-white/10">
                  {item.icon}
                </div>
                <h4 className="text-white font-medium mb-2 text-lg">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
