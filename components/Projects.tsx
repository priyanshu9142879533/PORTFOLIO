'use client';
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { ExternalLink, Github, Activity, BarChart2 } from 'lucide-react';

const projects = [
  {
    title: "Python Employment Data Analysis",
    description: "Analyzed employment datasets using Python. Performed data cleaning and visualization using Pandas, Matplotlib, and Seaborn. Extracted workforce trends and business insights.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    github: "#",
    live: "#",
    icon: <Activity className="w-12 h-12 text-primary" />
  },
  {
    title: "Infectious Disease Trend Analysis Dashboard",
    description: "Built an interactive Excel dashboard for California infectious disease data. Used Pivot Tables, Charts, Slicers, KPIs, and Conditional Formatting. Identified high-risk diseases and seasonal patterns.",
    tech: ["Excel", "Data Analysis", "Dashboarding"],
    github: "#",
    live: "#",
    icon: <BarChart2 className="w-12 h-12 text-secondary" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 z-10">
        <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card p-8 group relative overflow-hidden flex flex-col h-full hover:border-primary/50 transition-colors"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-500" />
              
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit inline-block">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-8 flex flex-wrap gap-2">
                {project.tech.map((tech, techIdx) => (
                  <span 
                    key={techIdx} 
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-white transition-colors"
                >
                  <Github size={18} /> Code
                </a>
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary/80 hover:bg-primary rounded-lg text-sm text-white transition-colors"
                >
                  <ExternalLink size={18} /> Preview
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
