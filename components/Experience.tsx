'use client';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-cardBg/30">
      <div className="container mx-auto px-6 z-10">
        <SectionHeading title="Experience & Training" subtitle="Professional journey and bootcamps" />
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent opacity-30" />
            
            <div className="md:flex items-center justify-between w-full mb-8 group">
              <div className="hidden md:block w-5/12 text-right pr-8">
                <span className="text-gray-400 font-medium tracking-wider">2023 - Present</span>
              </div>
              
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              
              <div className="md:w-5/12 md:pl-8">
                <div className="glass-card p-6 relative overflow-hidden group-hover:-translate-y-1 transition-transform">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-primary" size={20} />
                    <h3 className="text-xl font-bold text-white">Java Bootcamp</h3>
                  </div>
                  <h4 className="text-secondary font-medium mb-4">Center for Professional Enhancement</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                    <li>Learned advanced DSA in Java</li>
                    <li>Solved LeetCode problems</li>
                    <li>Practiced competitive programming and debugging</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
