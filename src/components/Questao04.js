import React, { useState, useEffect } from 'react';

const Questao04 = () => {
  // Estados para armazenar as capitais com maior e menor população e suas populações
  const [capitalMaiorPopulacao, setCapitalMaiorPopulacao] = useState('');
  const [populacaoMaior, setPopulacaoMaior] = useState(0);
  const [capitalMenorPopulacao, setCapitalMenorPopulacao] = useState('');
  const [populacaoMenor, setPopulacaoMenor] = useState(0);

  useEffect(() => {
    // Função para criar uma Promise que retorna os dados
    const fetchData = async () => {
      try {
        // Cria uma Promise que resolve com o array de dados
        const data = await new Promise((resolve) => {
          resolve([
            { "capital": ["Dublin"], "population": 4994724 },
            { "capital": ["Nicosia"], "population": 1207361 },
            { "capital": ["Madrid"], "population": 47351567 }
          ]);
        });

        // Variáveis para armazenar a maior e menor população e suas respectivas capitais
        let maiorPopulacao = -Infinity;
        let menorPopulacao = Infinity;
        let capitalMaior = '';
        let capitalMenor = '';

        // Percorre os dados para encontrar as capitais com maior e menor população
        data.forEach(country => {
          if (country.population > maiorPopulacao) {
            maiorPopulacao = country.population;
            capitalMaior = country.capital[0];
          }
          if (country.population < menorPopulacao) {
            menorPopulacao = country.population;
            capitalMenor = country.capital[0];
          }
        });

        // Atualiza os estados com as capitais e populações encontradas
        setCapitalMaiorPopulacao(capitalMaior);
        setPopulacaoMaior(maiorPopulacao);
        setCapitalMenorPopulacao(capitalMenor);
        setPopulacaoMenor(menorPopulacao);
      } catch (error) {
        console.log(error);
      }
    };

    // Chama a função para buscar os dados
    fetchData();
  }, []);

  return (
    <div>
      <h1>Capitais com maior e menor população</h1>
      {/* Exibe a capital com maior população e o número de habitantes */}
      <p>Capital com maior população: {capitalMaiorPopulacao} ({populacaoMaior} habitantes)</p>
      {/* Exibe a capital com menor população e o número de habitantes */}
      <p>Capital com menor população: {capitalMenorPopulacao} ({populacaoMenor} habitantes)</p>
    </div>
  );
};

export default Questao04;