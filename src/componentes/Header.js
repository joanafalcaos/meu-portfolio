import React from 'react';
import './Header.css';
import logo from '../assets/imagens/logo.png'; 

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#competencias">Competências</a></li>
          <li><a href="#projetos">Projetos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
