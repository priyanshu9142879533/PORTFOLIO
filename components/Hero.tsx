'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const ROLES = ["Python Developer", "Data Analyst", "Java Programmer", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = ROLES[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => 
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        );
      }, typeSpeed);
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 p-1 mb-8 relative"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl md:text-5xl font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] overflow-hidden">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">PR</span>
            </div>
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping -z-10" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-medium tracking-wide mb-2 uppercase"
          >
            Hello, I am
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold mb-4 text-white tracking-tight"
          >
            Priyanshu <span className="text-gradient">Raj</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-12 mb-8 flex items-center justify-center space-x-2"
          >
            <span className="text-xl md:text-3xl text-gray-300 font-light">I am a</span>
            <span className="text-xl md:text-3xl font-semibold text-accent border-r-2 border-accent pr-1 animate-pulse">
              {displayText}
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl text-gray-400 text-base md:text-lg mb-10 leading-relaxed"
          >
            B.Tech CSE student at Lovely Professional University, passionate about AI, Data Visualization, and building scalable software solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
          >
            <a 
              href="#"
              className="group relative flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-medium rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                Download Resume <Download size={18} />
              </span>
            </a>
            
            <a 
              href="#projects"
              className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-cardBg border border-cardBorder text-white font-medium rounded-full backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
            >
              View Projects <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-6"
          >
            <SocialIcon href="https://github.com/priyanshuraj402" icon={<Github size={22} />} />
            <SocialIcon href="https://linkedin.com/in/priyanshuraj402" icon={<Linkedin size={22} />} />
            <SocialIcon href="mailto:priyanshujha782@gmail.com" icon={<Mail size={22} />} />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gray-500 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full p-1">
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-gray-400 rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}

function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110 hover:-translate-y-1 shadow-lg"
    >
      {icon}
    </a>
  );
}
