import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0e] text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <nav className="fixed top-0 w-full px-8 py-5 flex justify-between items-center bg-[#0a0a0e]/80 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
          Ashik Santhosh 
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <li><a href="#about" className="hover:text-indigo-400 transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
          <li><a href="#education" className="hover:text-indigo-400 transition-colors">Education</a></li>
          <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
        </ul>
        <a href="#contact" className="md:hidden px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-sm font-medium">
          Say Hi
        </a>
      </nav>

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
