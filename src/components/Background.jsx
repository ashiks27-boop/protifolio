import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 bg-black pointer-events-none overflow-hidden">
      {/* Background Ambient Aurora (Slow Pulsing Orbs) */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gold-500/10 blur-[150px] rounded-full"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-gold-400/10 blur-[150px] rounded-full"
      ></motion.div>

      {/* Elegant Architectural Grid Overlay (Continuous across whole site) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(230,181,74,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(230,181,74,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_40%,transparent_100%)]"></div>
    </div>
  );
};

export default Background;
