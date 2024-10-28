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
        </div>
      </div>
    </section>
  );
};

export default Sobre;
