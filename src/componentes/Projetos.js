import React from 'react';
import './Projetos.css';
import projeto1 from '../assets/imagens/projeto1.jpg';
import projeto2 from '../assets/imagens/projeto2.jpg';
import projeto3 from '../assets/imagens/projeto3.jpg';
import projeto4 from '../assets/imagens/projeto4.jpg';

const Projetos = () => {
  return (
    <section id="projetos" className="projetos">
      <h2>Projetos</h2>
      <div className="projetos-grid">
        <div className="projeto-item">
          <img src={projeto1} alt="Projeto 1" />
          <p>Projeto de aplicativo de mobilidade</p>
        </div>
        <div className="projeto-item">
          <img src={projeto2} alt="Projeto 2" />
          <p>Projeto de sistema de delivery</p>
        </div>
        <div className="projeto-item">
          <img src={projeto3} alt="Projeto 3" />
          <p>Projeto de app educacional</p>
        </div>
        <div className="projeto-item">
          <img src={projeto4} alt="Projeto 4" />
          <p>Projeto de painel de controle</p>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
