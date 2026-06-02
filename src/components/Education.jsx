import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      school: 'KMM College of Arts & Science, Thrikkakara',
      university: 'Mahatma Gandhi University',
      year: 'Results Awaited',
      status: '2024-2026',
    },
    {
      degree: 'B.Com Computer Application',
      school: 'SNM College, Maliyankara',
      university: 'Mahatma Gandhi University',
      year: 'Graduated',
      status: '2020-2023',
    }
  ];

  return (
    <section id="education" className="py-24 bg-transparent relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12 py-6 border-l border-zinc-800 hover:border-gold-500/50 transition-colors duration-500 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-8 w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-gold-400 group-hover:shadow-[0_0_10px_#E6B54A] transition-all duration-500"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-zinc-900 text-gold-400 border border-gold-500/20 whitespace-nowrap self-start">
                  {edu.status}
                </span>
              </div>
              
              <h4 className="text-lg font-medium text-slate-300 mb-1">{edu.school}</h4>
              <p className="text-slate-500 text-sm mb-6">{edu.university}</p>
              
              <div className="inline-block px-4 py-1.5 bg-zinc-900 rounded-lg border border-zinc-800 text-slate-400 text-sm font-medium">
                {edu.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
