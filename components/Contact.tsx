"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617] to-indigo-950/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Let&apos;s talk about your project</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you have a question, want to collaborate, or just want to connect—I&apos;m always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div className="ml-6">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:priyanshujha782@gmail.com" className="text-lg font-medium text-gray-200 hover:text-primary transition-colors">
                    priyanshujha782@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div className="ml-6">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+919142879533" className="text-lg font-medium text-gray-200 hover:text-secondary transition-colors">
                    +91-9142879533
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div className="ml-6">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-lg font-medium text-gray-200">
                    Punjab, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="/cv.pdf"
                download="Priyanshu_Raj_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-purple-500/30"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-2xl shadow-xl shadow-black/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Thank you for your message! This is a static demo, so no email is sent.');
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-4 px-8 rounded-lg transition-all shadow-lg shadow-blue-900/50"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
