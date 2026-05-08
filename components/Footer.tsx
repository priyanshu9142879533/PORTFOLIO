'use client';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-8 border-t border-white/10 bg-background/50 backdrop-blur-md z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Priyanshu Raj. All rights reserved.
        </p>
        
        <p className="text-gray-500 text-sm flex items-center gap-1">
          Built with <span className="text-primary font-medium">React</span> & <span className="text-accent font-medium">Tailwind</span>
        </p>

        <button 
          onClick={scrollToTop}
          className="p-3 bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary rounded-full transition-all group"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
