import React from 'react';
import '../App.css';

const Navbar = () => {
  return (

<nav className="flex justify-between items-center p-4 sticky top-0 backdrop-blur-lg bg-white/0">
  <div className="text-[min(4vw,32px)] font-jersey text-soft space-x-7">
    <a href="/">
      Home
    </a>
    <a href="/">
      About
    </a>
    <a href="/">
      Experience
    </a>
    <a href="/">
      Projects
    </a>
  </div>
  
  <div className="flex items-center space-x-4">
      <a
          href="https://www.linkedin.com/in/jesicasusanto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
        </a>
        <a
          href="https://github.com/jesicasusanto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.svg" alt="GitHub" className="w-6 h-6 hover:opacity-80" />
        </a>
        <a href="mailto:jesica.susanto@mail.utoronto.ca">
          <img src="/email.svg" alt="Email" className="w-6 h-6 hover:opacity-80" />
        </a>
  </div>
</nav>
);
};

export default Navbar;