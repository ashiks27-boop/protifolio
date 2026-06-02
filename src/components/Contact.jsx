import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-transparent relative border-t border-zinc-900 overflow-hidden">
      
      {/* Background luxurious glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Let's Work Together</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full mx-auto mb-10"></div>
          
          <p className="text-xl text-slate-400 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
            I am currently open to new software engineering opportunities. Whether you have a question, a project idea, or just want to connect, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ashiksanthosh2706@gmail.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-black font-bold hover:shadow-[0_0_20px_rgba(230,181,74,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wider text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Say Hello
            </a>

            <a 
              href="https://www.linkedin.com/in/ashik-santhosh-" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-gold-500/30 bg-[#09090b] hover:bg-[#18181b] hover:border-gold-500/60 text-white transition-all duration-300 font-semibold flex items-center justify-center gap-3 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            
            <a 
              href="https://github.com/ashiks27-boop" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-gold-500/30 bg-[#09090b] hover:bg-[#18181b] hover:border-gold-500/60 text-white transition-all duration-300 font-semibold flex items-center justify-center gap-3 shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
