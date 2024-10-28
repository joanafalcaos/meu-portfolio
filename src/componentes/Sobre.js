// src/components/Sobre.js
import React from 'react';
import './Sobre.css';
import joana from '../assets/imagens/joana.jpeg';

const Sobre = () => {
  return (
    <section id="inicio" className="sobre">
      <div className="sobre-container">
        <img src={joana} alt="Joana Falcão" className="profile-pic" />
        <div className="sobre-texto">
          <h1>Joana Falcão</h1>
          <p>Estudante de Sistemas para Internet, Designer de produtos e apaixonada por UX/UI.</p>
          <p> Iniciei minha trajetória no mundo da tecnológia em 2023, e desde então sigo apaixonada pela área, em especial pela esféra do Design. Tenho também experiência com desenvolvimento de aplicações com o Framework Flutter e criação de sites responsivos com HTML, CSS, JavaScript e React.</p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
