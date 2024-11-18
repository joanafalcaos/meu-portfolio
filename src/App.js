import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Sobre from './componentes/Sobre';
import Competencias from './componentes/Competencias';
import Projetos from './componentes/Projetos';
import JogoSenha from './componentes/JogoSenha'; 
import Repositorios from './componentes/Repositorios'; 
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<div><Sobre /><Competencias /><Projetos /><Repositorios /></div>} /> 
          <Route path="/jogo-senha" element={<JogoSenha />} />
          <Route path="/repositorios" element={<Repositorios />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
