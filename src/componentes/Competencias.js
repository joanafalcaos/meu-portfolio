import React from 'react';
import './Competencias.css';
import figmaIcon from '../assets/imagens/figma.svg';
import canvaIcon from '../assets/imagens/canva.svg';
import htmlIcon from '../assets/imagens/html.svg';
import flutterIcon from '../assets/imagens/flutter.svg';

const Competencias = () => {
  return (
    <section id="competencias" className="competencias">
      <h2>Competências</h2>
      <div className="competencias-grid">
        <div className="competencia-item">
          <img src={figmaIcon} alt="Figma" />
          <p>Figma: Criação de protótipos e interfaces</p>
        </div>
        <div className="competencia-item">
          <img src={canvaIcon} alt="Canva" />
          <p>Canva: Edição de imagens e conteúdo visual</p>
        </div>
        <div className="competencia-item">
          <img src={htmlIcon} alt="HTML" />
          <p>HTML: Criação de sites responsivos</p>
        </div>
        <div className="competencia-item">
          <img src={flutterIcon} alt="Flutter" />
          <p>Flutter: Criação de soluções móveis</p>
        </div>
      </div>
    </section>
  );
};

export default Competencias;
