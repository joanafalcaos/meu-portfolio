import React from 'react';
import Header from './componentes/Header';
import Sobre from './componentes/Sobre';
import Competencias from './componentes/Competencias';
import Projetos from './componentes/Projetos';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Sobre />
      <Competencias />
      <Projetos />
    </div>
  );
}

export default App;
