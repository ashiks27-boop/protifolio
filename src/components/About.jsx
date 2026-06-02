import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Photo Bento Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 bg-gradient-to-br from-[#18181b] to-black border border-gold-500/20 rounded-3xl p-2 shadow-2xl relative overflow-hidden group aspect-square md:aspect-auto min-h-[300px]"
          >
            {/* Subtle metallic reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none z-10"></div>
            
            {/* Image container */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#09090b] flex items-center justify-center">
              <img 
                src="./profile.jpg" 
                alt="Ashik Santhosh" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-0"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback avatar if no image exists yet */}
              <div className="hidden absolute inset-0 bg-[#09090b] items-center justify-center text-gold-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Main Bio Bento Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 bg-[#09090b]/80 border border-gold-500/10 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-gold-500/30 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-gold-500/10 transition-colors duration-700"></div>
            
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-gold-400 mr-3 animate-pulse"></span>
              Who I am
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">
              I'm Ashik Santhosh, an aspiring Software Developer passionate about creating innovative web applications, intelligent systems, and IoT solutions. I love learning new technologies, solving complex problems, and building products that make a real impact. Currently, I am looking for opportunities to grow, contribute, and kick-start my career in software development.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              My expertise spans across the full stack—from designing beautiful, responsive front-ends with <strong className="text-gold-300 font-medium">React</strong> to architecting robust back-ends with <strong className="text-gold-300 font-medium">Node.js</strong> and <strong className="text-gold-300 font-medium">Python</strong>. I am highly motivated, detail-oriented, and eager to contribute to innovative engineering teams.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
