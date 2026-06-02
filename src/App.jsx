import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Background from './components/Background';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-200 font-sans selection:bg-gold-500/30">
      <Background />
      
      <div className="fixed top-6 w-full flex justify-center z-50 px-4 pointer-events-none">
        <nav className="flex items-center justify-center bg-[#09090b]/60 backdrop-blur-xl border border-gold-500/20 px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-full max-w-3xl pointer-events-auto">
          <ul className="hidden md:flex gap-10 text-sm font-medium tracking-wide">
            <li><a href="#about" className="text-slate-300 hover:text-gold-400 transition-colors">About</a></li>
            <li><a href="#skills" className="text-slate-300 hover:text-gold-400 transition-colors">Skills</a></li>
            <li><a href="#projects" className="text-slate-300 hover:text-gold-400 transition-colors">Projects</a></li>
            <li><a href="#education" className="text-slate-300 hover:text-gold-400 transition-colors">Education</a></li>
            <li><a href="#contact" className="text-slate-300 hover:text-gold-400 transition-colors">Contact</a></li>
          </ul>
          
          <a href="#contact" className="md:hidden px-4 py-2 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20 text-xs font-bold uppercase tracking-widest">
            Contact
          </a>
        </nav>
      </div>

      <main className="relative z-10 pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="relative z-10 text-center py-8 border-t border-white/5 text-slate-500 text-sm">
        <p>Designed & Built by Ashik S. © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
