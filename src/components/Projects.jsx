import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Smart Home IoT Control System",
      description: "An integrated hardware-software solution for home automation. Engineered with real-time sensor monitoring and automation controls to enhance energy efficiency and security.",
      tech: ["IoT", "MERN Stack", "Machine Learning", "MongoDB"],
      featured: true,
    },
      {
      title: "Recycling E-Commerce Platform",
      description:
        "Developed a recycling-based e-commerce platform that enables users to buy, sell, and manage recyclable products with an efficient online system.",
      tech: ["Django", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section id="projects" className="px-6 md:px-20 py-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">Featured Projects</h2>
            <div className="h-px bg-slate-800 flex-1 mt-2"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-[#101018] border border-slate-800 hover:border-indigo-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full"
              >
                {/* Simulated Image Header */}
                <div className="h-40 bg-slate-800/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 group-hover:scale-105 transition-transform duration-700"></div>
                  <svg className="w-10 h-10 text-slate-600 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
