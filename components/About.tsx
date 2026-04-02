"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col gap-8"
          >
            <div className="w-full flex justify-center lg:justify-start">
               <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-slate-700 shadow-xl shadow-black/50 mx-auto lg:mx-0 bg-slate-900/50 backdrop-blur-md">
                 <Image 
                   src="/assets/profile.jpg" 
                   alt="Priyanshu Raj" 
                   fill
                   className="object-cover object-top"
                 />
               </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-2xl shadow-xl shadow-black/50">
              <h3 className="text-2xl font-semibold text-white mb-6">Who I Am</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I am a passionate Computer Science undergraduate at Lovely Professional University. I design and build highly functional software applications with a keen eye for performance and user experience. 
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I enjoy working with data, building analytical projects, and solving complex algorithmic challenges. Whether I am writing clean backend logic, interactive frontend interfaces, or deriving insights from datasets, I continuously improve my skills through coding practice, real-world projects, and exploring new technologies.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                {['Problem Solving', 'Data Analysis', 'Web Development', 'Quick Learner'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-indigo-900/30 text-indigo-300 border border-indigo-800/50 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
          >
            {[
              { title: "Education", value: "B.Tech CSE" },
              { title: "Location", value: "India" },
              { title: "Problem Solving", value: "150+ LeetCode" },
              { title: "Experience", value: "Projects & Bootcamp" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-2xl text-center hover:bg-slate-800/50 transition-colors cursor-default">
                <H3 className="text-primary font-bold text-xl md:text-2xl mb-2">{stat.value}</H3>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.title}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const H3 = ({ children, className }: { children: React.ReactNode, className?: string }) => <h3 className={className}>{children}</h3>;
