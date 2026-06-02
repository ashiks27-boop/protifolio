import React from 'react';
import { motion } from 'framer-motion';
import InteractiveTerminal from './InteractiveTerminal';

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

  // Helper for background floating shapes
  const FloatingShape = ({ top, left, right, bottom, delay, duration }) => (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -15, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute w-6 h-6 border-2 border-gold-500/20 rotate-45 rounded-sm pointer-events-none hidden md:block`}
      style={{ top, left, right, bottom }}
    />
  );

  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 md:px-20 overflow-hidden bg-transparent">
      
      {/* Background Floating Diamonds */}
      <FloatingShape top="20%" left="15%" delay={0} duration={4} />
      <FloatingShape top="30%" left="50%" delay={1} duration={5} />
      <FloatingShape bottom="25%" left="30%" delay={2} duration={4.5} />
      <FloatingShape top="15%" right="10%" delay={0.5} duration={5.5} />
      <FloatingShape bottom="20%" right="15%" delay={1.5} duration={4} />
      
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10 pt-20 pb-32">
        
        {/* Left Content Area - Agency Style */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left"
        >
          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-[5rem] font-extrabold mb-6 tracking-tight text-white leading-[1.1]">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-400 drop-shadow-[0_0_15px_rgba(230,181,74,0.3)]">
              Ashik Santhosh
            </span>
          </motion.h1>

          {/* Subtitle / Paragraph */}
          <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-10">
            A passionate <strong className="text-slate-200 font-medium">Software Developer</strong> seeking opportunities to build innovative solutions and grow through real-world challenges.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            
            
            <a href="./resume.pdf" download="Ashik_Santhosh_Resume.pdf" className="px-10 py-4 bg-[#09090b]/50 backdrop-blur-md text-gold-400 font-bold uppercase tracking-wider hover:bg-gold-500/10 hover:scale-[1.02] transition-all rounded-sm text-sm border border-gold-500/30 hover:border-gold-400 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Graphic Area - Interactive Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col items-center justify-center relative w-full mt-12 md:mt-0"
        >
          {/* Terminal Hint for HR/Visitors */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute -top-12 flex items-center gap-2 text-gold-400 text-xs md:text-sm font-medium tracking-widest uppercase bg-[#09090b]/80 backdrop-blur-md px-5 py-2 rounded-full border border-gold-500/30 shadow-[0_0_15px_rgba(230,181,74,0.15)] z-20 animate-bounce"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            ! EasyFind !
          
          </motion.div>

          <div className="relative w-full max-w-md mx-auto aspect-square">
            {/* Back rotated pane */}
            <div className="absolute inset-4 bg-[#0a0a0a] rounded-2xl rotate-6 border border-[#27272a] shadow-2xl transition-transform duration-700 hover:rotate-12 backdrop-blur-md"></div>
            
            {/* Main Interactive Terminal */}
            <InteractiveTerminal />
          </div>
        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-400 text-xs font-medium tracking-widest lowercase">check out my work</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
