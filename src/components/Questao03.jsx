import React, { useState, useEffect } from 'react';

const Questao03 = () => {
  // Estados para armazenar as capitais com maior e menor população e suas populações
  const [capitalMaiorPopulacao, setCapitalMaiorPopulacao] = useState('');
  const [populacaoMaior, setPopulacaoMaior] = useState(0);
  const [capitalMenorPopulacao, setCapitalMenorPopulacao] = useState('');
  const [populacaoMenor, setPopulacaoMenor] = useState(0);

  useEffect(() => {
    // Função assíncrona para buscar os dados da API
    const fetchData = async () => {
      try {
        // Faz a requisição para a API
        const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
        const data = await response.json();

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

export default Questao03;