"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020617] py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <span className="font-bold text-2xl tracking-tighter">
              <span className="text-primary">PR</span> Portfolio
            </span>
            <p className="text-gray-400 mt-2 text-sm text-center md:text-left">
              Building elegant solutions through code.
            </p>
          </motion.div>
          
          <div className="flex gap-4">
            <a href="https://github.com/priyanshuraj402" target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-slate-700 transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/priyanshuraj402" target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-slate-700 transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:priyanshujha782@gmail.com" className="p-2 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-slate-700 transition">
              <Mail size={20} />
            </a>
            <a href="tel:+919142879533" className="p-2 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-slate-700 transition">
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-10 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Priyanshu Raj. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
