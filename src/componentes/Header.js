import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/imagens/logo.png';

const Header = () => {
  const navigate = useNavigate(); 

  const handleNavigation = (path) => {
    navigate(path); 
    window.scrollTo(0, 0); 
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul>
          <li><a href="#inicio" onClick={() => handleNavigation('/')}>Início</a></li>
          <li><a href="#competencias" onClick={() => handleNavigation('/')}>Competências</a></li>
          <li><a href="#projetos" onClick={() => handleNavigation('/')}>Projetos</a></li>
          <li><Link to="/jogo-senha">Jogo da Senha</Link></li>
          <li><Link to="/repositorios">Repositórios</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
