import React from 'react';

// Componente Questao01B (função clássica)
// Este componente recebe uma lista de objetos via props e exibe o maior valor de cada objeto.
function Questao01B({ lista }) {
  // Calcula o maior valor de cada objeto na lista
  const maiores = lista.map(obj => Math.max(obj.a, obj.b, obj.c));

  return (
    <div>
      <h1>Maiores elementos</h1>
      <ul>
        {/* Renderiza cada maior valor em uma lista */}
        {maiores.map((maior, index) => (
          <li key={index}>{maior}</li>
        ))}
      </ul>
    </div>
  )
}

// Componente Questao01A (função arrow)
// Este componente define uma lista de objetos e passa essa lista para o componente Questao01B.
const Questao01A = () => {
  // Define a lista de objetos
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 }
  ];

  return (
    <div>
      <h1>Componente Questao01A</h1>
      {/* Passa a lista para o componente Questao01B via props */}
      <Questao01B lista={lista} />
    </div>
  );
};

export { Questao01A, Questao01B };
