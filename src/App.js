import React from 'react';
import { Questao01A } from './components/Questao01';
import Questao02 from './components/Questao02';
import Questao03 from './components/Questao03';
import Questao04 from './components/Questao04';

function App() {
  return (
    <div>
      <h1>Questao 01</h1>
      <Questao01A />

      <h1> Questao 02</h1>
      <Questao02 />

      <h1> Questao 03</h1>
      <Questao03 />

      <h1>Questao 04</h1>
      <Questao04 />
    </div>
  );
}

export default App;
