import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section className="relative flex items-center justify-center min-h-[90vh] px-6 md:px-20 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content Area */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium text-sm mb-6">
            Available for new opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Ashik Santhosh </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-slate-400 max-w-lg mb-8 leading-relaxed font-light">
            I'm an <strong className="text-slate-200 font-medium">MCA Student</strong> & <strong className="text-slate-200 font-medium">Full Stack Developer</strong> passionate about building intelligent systems, data science, and IoT integrations.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
            <a href="#projects" className="px-8 py-4 rounded-full bg-slate-100 text-slate-900 font-semibold hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              View My Work
            </a>
            <a href="/resume.pdf" target="_blank" className="px-8 py-4 rounded-full border border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 hover:text-white transition-all backdrop-blur-md font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Graphic Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="hidden md:flex justify-center relative"
        >
          <div className="relative w-[400px] h-[400px]">
            {/* Abstract Tech Graphic */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl rotate-6 border border-white/5 backdrop-blur-3xl"></div>
            <div className="absolute inset-0 bg-slate-900/80 rounded-3xl -rotate-3 border border-white/10 shadow-2xl overflow-hidden flex flex-col">
              <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-slate-900">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="p-6 font-mono text-sm text-indigo-300 flex-1 flex flex-col justify-center">
                <p><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                <p className="pl-6">name: <span className="text-yellow-300">'Ashik Santhosh P'</span>,</p>
                <p className="pl-6">role: <span className="text-yellow-300">'Full Stack Developer'</span>,</p>
                <p className="pl-6">passion: <span className="text-yellow-300">'Data Science'</span>,</p>
                <p className="pl-6">status: <span className="text-yellow-300">'Building the future'</span></p>
                <p>{'};'}</p>
                <br />
                <p><span className="text-pink-400">developer</span>.<span className="text-blue-400">execute</span>();</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
