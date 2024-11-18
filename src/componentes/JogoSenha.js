import React, { useState } from 'react';
import './JogoSenha.css';

const JogoSenha = () => {
  const [tentativas, setTentativas] = useState([]);
  const [tentativa, setTentativa] = useState('');
  const combinacao = [1, 2, 3, 4]; // Exemplo de combinação fixa

  const handleTentativa = () => {
    if (tentativa) {
      setTentativas([tentativa, ...tentativas]);
      setTentativa('');
    }
  };

  const exibirCombinacao = () => {
    alert(`A combinação é: ${combinacao.join(' ')}`);
  };

  return (
    <div className="jogo-senha">
      <h2>Jogo da Senha</h2>
      <input
        type="text"
        value={tentativa}
        onChange={(e) => setTentativa(e.target.value)}
        placeholder="Digite sua tentativa"
      />
      <button onClick={handleTentativa}>Enviar</button>
      <button onClick={exibirCombinacao}>Exibir Combinação</button>
      <ul>
        {tentativas.map((t, index) => (
          <li key={index}>Tentativa: {t}</li>
        ))}
      </ul>
    </div>
  );
};

export default JogoSenha;
