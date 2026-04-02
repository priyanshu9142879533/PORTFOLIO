"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    title: "Employment Data Analysis",
    duration: "Mar 2025 - May 2025",
    description: "Built a robust Python-based data analysis pipeline to explore employment datasets. The project uncovers workforce trends, sector distributions, and extracts actionable business insights using data visualization techniques.",
    bullets: [
      "Data cleaning and processing using Pandas.",
      "Extensive visualization using Matplotlib and Seaborn.",
      "Generated actionable insights on workforce growth."
    ],
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    link: "#",
    github: "https://github.com/priyanshuraj402",
    images: [
      { src: "/assets/data_analysis.png", alt: "Data Analysis Overview" },
      { src: "/assets/heatmap.png.jpeg", alt: "Correlation Heatmap" },
      { src: "/assets/line_chart.png", alt: "Employment Trend Line Chart" }
    ]
  },
  {
    title: "Infectious Disease Dashboard",
    duration: "Feb 2025 - Apr 2025",
    description: "Analyzed a comprehensive California infectious disease dataset (2001-2015) comprising 120,969 total cases to identify high-risk regions and seasonal patterns for strategic health planning.",
    bullets: [
      "Built interactive Excel dashboard.",
      "Implemented Pivot Tables, Charts, Slicers, and KPIs.",
      "Identified trends for Campylobacteriosis and Shigellosis."
    ],
    tech: ["Excel", "Data Analysis", "Dashboard Creation"],
    link: "#",
    github: "https://github.com/priyanshuraj402",
    images: [
      { src: "/assets/infectious_disease.png", alt: "Infectious Disease Dashboard" }
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="group relative bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-colors flex flex-col"
            >
              <div className="w-full h-48 sm:h-64 bg-slate-800 relative overflow-hidden border-b border-slate-700/50 flex snap-x snap-mandatory overflow-x-auto scrollbar-hide">
                {project.images?.map((img, i) => (
                  <img key={i} src={img.src} alt={img.alt} className="w-full h-full object-cover shrink-0 snap-center hover:scale-105 transition-transform duration-500" />
                ))}
              </div>
              
              {project.images && project.images.length > 1 && (
                <div className="absolute right-4 top-4 rounded-full px-3 py-1 bg-black/60 backdrop-blur text-xs text-white pointer-events-none tracking-wide z-10 shadow-xl">
                  Swipe
                </div>
              )}

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-indigo-400 font-medium mt-1">{project.duration}</p>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                      <Github size={22} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="mb-8 space-y-2">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-medium rounded-full border border-blue-800/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
