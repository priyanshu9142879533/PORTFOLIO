'use client';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 z-10">
        <SectionHeading title="Get In Touch" subtitle="Let's build something amazing together" />
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <a href="mailto:priyanshujha782@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <span>priyanshujha782@gmail.com</span>
              </a>
              <a href="tel:+919142879533" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Phone size={20} className="text-primary" />
                </div>
                <span>+91-9142879533</span>
              </a>
              <a href="https://linkedin.com/in/priyanshuraj402" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={20} className="text-primary" />
                </div>
                <span>linkedin.com/in/priyanshuraj402</span>
              </a>
              <a href="https://github.com/priyanshuraj402" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Github size={20} className="text-primary" />
                </div>
                <span>github.com/priyanshuraj402</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
