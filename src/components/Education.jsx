import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationList = [
    {
      degree: "Master of Computer Applications",
      school: "KMM College of Arts & Science",
      university: "MG University",
      description: "Focused on advanced software engineering principles, full-stack web development, and intelligent systems. Actively participating in technical projects and continuous learning to stay at the forefront of modern technology.",
    },
    {
      degree: "B.Com Computer Application",
      school: "SNM College Maliyankara",
      university: "MG University",
      description: "Built a strong foundation in commerce, accounting, and computer applications, bridging the gap between business processes and technology solutions.",
    }
  ];

  return (
    <motion.section 
      id="education" 
      className="px-6 md:px-20 py-24 bg-[#0d0d14] relative z-10 border-y border-white/5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-12">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch text-left">
          {educationList.map((edu, index) => (
            <div key={index} className="relative flex flex-col bg-[#13131c] border border-slate-800 rounded-3xl p-8 shadow-xl hover:border-indigo-500/30 transition-colors h-full">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-l-3xl"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-indigo-400 font-medium">
                    {edu.school}
                  </p>
                </div>
                {edu.school !== edu.university && (
                  <div className="mt-2 md:mt-0 text-slate-500 font-mono text-sm">
                    {edu.university}
                  </div>
                )}
              </div>
              
              <p className="text-slate-400 font-light leading-relaxed mt-6">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
