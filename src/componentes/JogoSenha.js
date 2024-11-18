import React, { useState } from 'react';


function JogoSenha() {
  const [tentativas, setTentativas] = useState([]);
  const [entrada, setEntrada] = useState('');
  const [senha, setSenha] = useState(generateSenha());

  function generateSenha() {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Gera uma senha de 4 dígitos
  }

  function handleInputChange(event) {
    setEntrada(event.target.value);
  }

  function handleTentativa() {
    if (entrada.length !== 4) {
      alert('Digite uma senha de 4 dígitos!');
      return;
    }

    const resultado = entrada === senha ? 'Correto!' : 'Incorreto';
    setTentativas([{ tentativa: entrada, resultado }, ...tentativas]);
    setEntrada('');
  }

  function revelarSenha() {
    alert(`A senha é: ${senha}`);
  }

  return (
    <div className="jogo-senha">
      <h1>Jogo da Senha</h1>
      <input
        type="text"
        value={entrada}
        onChange={handleInputChange}
        placeholder="Digite sua tentativa"
        maxLength="4"
      />
      <button onClick={handleTentativa}>Tentar</button>
      <button onClick={revelarSenha}>Revelar Senha</button>
      <h2>Tentativas</h2>
      <ul>
        {tentativas.map((item, index) => (
          <li key={index}>
            <strong>{item.tentativa}</strong>: {item.resultado}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JogoSenha;
