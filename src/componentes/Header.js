import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#competencias">Competências</a></li>
          <li><a href="#projetos">Projetos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
