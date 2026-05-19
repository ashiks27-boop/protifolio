import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="px-6 md:px-20 py-24 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">About Me</h2>
          <div className="h-px bg-slate-800 flex-1 mt-2"></div>
        </div>

        <div className="bg-[#101018] border border-slate-800/60 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-slate-700/50 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Optional: Replace with actual photo later */}
              <svg className="w-20 h-20 text-indigo-400/50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="text-slate-400 text-lg leading-relaxed font-light mb-6">
              I am a recent <strong className="text-slate-200 font-medium">MCA</strong> candidate with a strong interest in building scalable software applications, designing intelligent machine learning solutions, and creating innovative IoT systems. I enjoy solving real-world problems through technology and continuously improving my skills in full-stack development, data science, and emerging technologies. My goal is to contribute to impactful projects while growing as a software engineer and technology enthusiast. 
            </p>
          
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
