"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Download } from 'lucide-react';

const ROLES = ["Software Developer", "Data Analyst", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = ROLES[roleIndex];

    const typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && text === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timer = setTimeout(() => {
        setText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, typeSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Placeholder for Profile Picture based on reference design */}
        <motion.div
           initial={{ scale: 0, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
           className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl shadow-indigo-900/50 mb-8 bg-slate-900/80 backdrop-blur-sm relative"
        >
          <Image 
            src="/assets/profile.jpg" 
            alt="Priyanshu Raj" 
            fill
            className="object-cover object-top"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
            Priyanshu Raj
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 mb-6"
        >
          <h2 className="text-2xl md:text-4xl text-gray-300 font-medium flex items-center justify-center">
            {text}
            <span className="w-1 h-8 md:h-10 bg-primary ml-1 animate-pulse" />
          </h2>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
        >
          Welcome to my digital playground! I am a Computer Science undergraduate at Lovely Professional University with a strong interest in software development, data analysis, and problem solving.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center"
          >
            View My Work
          </a>
          <a
            href="/cv.pdf"
            download="Priyanshu_Raj_CV.pdf"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download CV
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-slate-700 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
