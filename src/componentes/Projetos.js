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
          <p>Protótipo de aplicativo de delivery</p>
        </div>
        <div className="projeto-item">
          <img src={projeto2} alt="Projeto 2" />
          <p>Protótipo de aplicativo de desafios saudáveis</p>
        </div>
        <div className="projeto-item">
          <img src={projeto3} alt="Projeto 3" />
          <p>Aplicativo para leitura de livros</p>
        </div>
        <div className="projeto-item">
          <img src={projeto4} alt="Projeto 4" />
          <p>Protótipo de DashBoard</p>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
