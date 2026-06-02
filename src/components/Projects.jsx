import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Home IoT Control',
      description: 'Developed an intelligent central control system for IoT devices with real-time sensor monitoring and automated routines.',
      stack: ['Python', 'React', 'MQTT', 'Node.js'],
      link: '#',
      icon: '✦'
    },
    {
      title: 'Recycling E-Commerce',
      description: 'A sustainable marketplace platform connecting recycling centers with bulk buyers, featuring live inventory tracking.',
      stack: ['React', 'MongoDB', 'Express', 'Node.js'],
      link: '#',
      icon: '✦'
    },
   
  ];

  return (
    <section id="projects" className="py-24 bg-transparent relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#09090b] border border-zinc-800 rounded-3xl p-8 flex flex-col h-full hover:-translate-y-2 hover:border-gold-500/40 transition-all duration-500 group relative overflow-hidden shadow-2xl"
            >
              {/* Subtle Gold Hover Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gold-500/0 group-hover:bg-gold-500/5 blur-3xl transition-colors duration-700 pointer-events-none"></div>

              <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-gold-400 mb-8 border border-zinc-800 group-hover:border-gold-500/30 transition-colors">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light mb-8 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-transparent border border-zinc-800 rounded-full text-xs font-semibold text-slate-300 group-hover:border-gold-500/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              <a href={project.link} className="inline-flex items-center text-gold-400 font-semibold text-sm uppercase tracking-widest group-hover:text-gold-300 transition-colors">
                View Project 
                <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
