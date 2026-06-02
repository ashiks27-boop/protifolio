import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '✨',
      skills: ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5/CSS3']
    },
    {
      title: 'Backend Engineering',
      icon: '⚙️',
      skills: ['Node.js', 'Express', 'Python', 'Java']
    },
    {
      title: 'Databases & Tools',
      icon: '💾',
      skills: ['MongoDB', 'MySQL', 'Git & GitHub', 'REST APIs']
    },
    {
      title: 'Specializations',
      icon: '🚀',
      skills: ['Internet of Things (IoT)', 'Machine Learning', 'Data Science', 'Problem Solving']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-transparent relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#09090b]/50 border border-gold-500/10 rounded-2xl p-8 hover:bg-[#09090b] hover:border-gold-500/30 transition-all duration-300 shadow-lg hover:shadow-gold-500/5 group"
            >
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-4 opacity-80 group-hover:opacity-100 transition-opacity">{category.icon}</span>
                <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-transparent border border-gold-500/20 text-gold-300 rounded-lg text-sm font-medium shadow-inner"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
