import React, { useState } from 'react';
import "../App.css";

const Navbar = () => {
  const [showCopied, setShowCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('jesica.susanto@mail.utoronto.ca').then(() => {
      setShowCopied(true);
      setTimeout(() => {
        setShowCopied(false);
      }, 2000); // Modal disappears after 2 seconds
    });
  };

  return (
    <nav className="flex justify-between items-center p-4 sticky top-0 backdrop-blur-lg bg-white/0 z-50">
      <div className="text-[min(4vw,32px)] font-jersey text-soft space-x-7">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </div>

      <div className="flex items-center space-x-4 relative">
        <a
          href="https://www.linkedin.com/in/jesicasusanto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/portfolio/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
        </a>
        <a
          href="https://github.com/jesicasusanto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/portfolio/github.svg" alt="GitHub" className="w-6 h-6 hover:opacity-80" />
        </a>
        <button onClick={copyEmail} title="Copy email to clipboard">
          <img src="/portfolio/email.svg" alt="Email" className="w-6 h-6 hover:opacity-80" />
        </button>

        {showCopied && (
          <div className="absolute left-0 mt-2 bg-eggplant text-soft text-xs px-3 py-1 rounded opacity-90 animate-fade">
            Email copied!
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
