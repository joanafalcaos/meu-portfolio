import React from 'react';
import './Sobre.css';
import joana from '../assets/imagens/joana.jpeg';

const Sobre = () => {
  return (
    <section id="inicio" className="sobre">
      <img src= {joana} alt="Joana Falcão" className="profile-pic" />
      <h1>Joana Falcão</h1>
      <p>Estudante de Sistemas para Internet, Designer de produtos e apaixonada por UX/UI.</p>
    </section>
  );
};

export default Sobre;
