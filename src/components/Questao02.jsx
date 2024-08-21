import React, { useState } from 'react';

// Componente Questao02
// Este componente renderiza uma imagem de um Pokémon e alterna entre a imagem frontal e traseira ao clicar em um botão.
const Questao02 = () => {
  // Estado para controlar se a imagem exibida é a frontal (true) ou a traseira (false)
  const [isFront, setIsFront] = useState(true);

  // Função para alternar o estado da imagem entre frontal e traseira
  const toggleImage = () => {
    setIsFront(!isFront);
  };

  // URL da imagem do Pokémon, alternando entre a imagem frontal e traseira com base no estado isFront
  const imageUrl = isFront 
    ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' 
    : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png';

  return (
    <div>
      {/* Renderiza a imagem do Pokémon */}
      <img src={imageUrl} alt="Pikachu" />
      {/* Botão para alternar a imagem */}
      <button onClick={toggleImage}>Turn Image</button>
    </div>
  );
};

export default Questao02;