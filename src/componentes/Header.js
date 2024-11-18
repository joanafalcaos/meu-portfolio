import React from 'react';
import { Link } from 'react-router-dom';
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
          <li><a href="#inicio">Início</a></li>
          <li><a href="#competencias">Competências</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><Link to="/jogo-senha">Jogo da Senha</Link></li>
          <li><Link to="/repositorios">Repositórios</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;
