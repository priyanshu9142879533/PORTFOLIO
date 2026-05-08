'use client';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { Award } from 'lucide-react';

const certificates = [
  { title: "ChatGPT-4 Prompt Engineering", issuer: "Infosys Springboard" },
  { title: "Java Bootcamp", issuer: "LPU" },
  { title: "C and C++ Programming with ChatGPT", issuer: "Udemy" },
  { title: "Computational Theory & Finite Automata", issuer: "Infosys" },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative bg-cardBg/30">
      <div className="container mx-auto px-6 z-10">
        <SectionHeading title="Certifications" subtitle="Professional certifications and courses" />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Award className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-400 mt-auto">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
