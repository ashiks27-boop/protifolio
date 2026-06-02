import React, { useState, useEffect, useRef } from 'react';

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    {
      type: 'system',
      content: (
        <>
          <p className="mb-4"><span className="text-gold-400">visitor@portfolio:~$</span> whois ashik</p>
          <div className="text-slate-300">
            <p><span className="text-gold-200">Name</span>{"       : Ashik Santhosh P"}</p>
            <p><span className="text-gold-200">Education</span>{"  : MCA Candidate"}</p>
            <p><span className="text-gold-200">Focus</span>{"      : Web Development"}</p>
            <p><span className="text-gold-200">Goal</span>{"       : Building innovative digital solutions"}</p>
            <p><span className="text-gold-200">Status</span>{"     : Available for Hire"}</p>
          </div>
          <p className="mt-4 text-slate-500">Type <span className="text-gold-400 font-bold">'help'</span> to see available commands.</p>
        </>
      )
    }
  ]);
  const [input, setInput] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Small delay to ensure DOM is updated before scrolling
      setTimeout(() => {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }, 10);
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let output = '';

      if (cmd === '') return;

      const newHistory = [...history, { type: 'command', content: <><span className="text-gold-400">visitor@portfolio:~$</span> {input}</> }];

      switch (cmd) {
        case 'help':
          output = "Available commands:\n- about     : Short bio\n- skills    : Technical arsenal\n- projects  : Featured work\n- education : Academic background\n- linkedin  : Open LinkedIn profile\n- github    : Open GitHub profile\n- email     : Send an email\n- clear     : Clear terminal";
          break;
        case 'about':
          output = "I am a recent MCA candidate with a strong interest in building scalable software applications, machine learning, and IoT.";
          break;
        case 'skills':
          output = "Languages : Java, Python, JavaScript\nDBs       : MongoDB, MySQL, SQLite\nFrameworks: React, Node.js, Django\nSpecialties: Machine Learning, IoT";
          break;
        case 'projects':
          output = "1. Smart Home IoT Control System\n2. Recycling E-Commerce Platform\n3. Resume Ranking System";
          break;
        case 'education':
          output = "MCA   - KMM College of Arts & Science (MG University)\nB.Com - SNM College Maliyankara (MG University)";
          break;
        case 'linkedin':
          output = "Opening LinkedIn...";
          window.open("https://www.linkedin.com/in/ashik-santhosh-", "_blank");
          break;
        case 'github':
          output = "Opening GitHub...";
          window.open("https://github.com/ashiks27-boop", "_blank");
          break;
        case 'email':
          output = "Opening Email...";
          window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ashiksanthosh2706@gmail.com", "_blank");
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        default:
          output = `Command not found: ${cmd}. Type 'help' for a list of commands.`;
      }

      setHistory([...newHistory, { type: 'output', content: output }]);
      setInput('');
    }
  };

  return (
    <div className="absolute inset-0 bg-[#09090b]/80 backdrop-blur-xl rounded-2xl border border-gold-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col z-10 transition-transform duration-700 hover:-translate-y-2 group">
      {/* Terminal Header */}
      <div className="h-10 bg-[#000000]/60 border-b border-gold-500/10 flex items-center px-4 gap-2 flex-shrink-0 backdrop-blur-md">
        <div className="w-3.5 h-3.5 rounded-full bg-slate-700 group-hover:bg-[#ff5f56] transition-colors duration-300"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-slate-700 group-hover:bg-[#ffbd2e] transition-colors duration-300 delay-75"></div>
        <div className="w-3.5 h-3.5 rounded-full bg-slate-700 group-hover:bg-[#27c93f] transition-colors duration-300 delay-150"></div>
      </div>
      
      {/* Terminal Body */}
      <div 
        ref={containerRef}
        className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed text-slate-300 flex-1 overflow-y-auto custom-scrollbar"
        onClick={() => document.getElementById('terminal-input').focus()}
      >
        {history.map((line, i) => (
          <div key={i} className="mb-2 whitespace-pre-wrap">
            {line.content}
          </div>
        ))}
        
        <div className="flex items-center">
          <span className="text-gold-400 mr-2">visitor@portfolio:~$</span>
          <input
            id="terminal-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent outline-none text-slate-100 caret-slate-100 min-w-0"
            autoComplete="off"
            spellCheck="false"
            autoFocus
          />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(9, 9, 11, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(230, 181, 74, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(230, 181, 74, 0.4);
        }
      `}} />
    </div>
  );
};

export default InteractiveTerminal;
