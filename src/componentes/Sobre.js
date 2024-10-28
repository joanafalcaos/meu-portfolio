import React from 'react';
import './Sobre.css';
import joana from '../assets/imagens/joana.png';

const Sobre = () => {
  return (
    <section id="inicio" className="sobre">
      <div className="sobre-container">
        <div className="sobre-left">
          <img src={joana} alt="Joana Falcão" className="profile-pic" />
        </div>
        <div className="sobre-right">
          <h1>Sobre Mim</h1>
          <p>
            Olá! Sou Joana Falcão, estudante de Sistemas para Internet. 
            Iniciei minha trajetória no mundo da tecnológia em <span className="highlight">2023</span> e desde então tenho me aprofundado em diversas áreas, 
            especialmente na esfera do <span className="highlight">Design</span>.
          </p>
          <p>
            Tenho experiência no desenvolvimento de aplicações utilizando o <span className="highlight">Flutter</span> e sou apaixonada por 
            criar sites responsivos com <span className="highlight">HTML</span>, <span className="highlight">CSS</span>, <span className="highlight">JavaScript</span> e <span className="highlight">React</span>.
          </p>
          <p>
            Meu objetivo é combinar habilidades técnicas com uma forte sensibilidade estética, 
            criando soluções que não apenas funcionem bem, mas que também proporcionem uma 
            experiência incrível ao usuário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
