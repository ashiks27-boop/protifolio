import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: "Languages & Frameworks",
      skills: ["Java", "Python", "JavaScript", "React", "Node.js"]
    },
    {
      title: "Databases & Cloud",
      skills: ["MongoDB", "MySQL", "SQLite"]
    },
    {
      title: "Specializations",
      skills: ["Machine Learning", "Data Science", "IoT"]
    },
    {
      title: "Tools",
      skills: ["Git & GitHub"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="px-6 md:px-20 py-24 bg-[#0d0d14] relative z-10 border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-16 justify-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">Technical Arsenal</h2>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-[#13131c] border border-slate-800/80 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors">
                <h3 className="text-indigo-400 font-semibold mb-4 text-sm uppercase tracking-wider">{category.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="bg-slate-800/50 text-slate-300 px-3 py-1.5 rounded-md text-sm font-medium border border-slate-700/50">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
