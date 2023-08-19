// MainComponent.js
import React from 'react';
import { View } from 'react-native';
import CardComponent from './CardCurriculum';

const Curriculum = () => {
  const cards = [
    { id: 1, title: 'Card 1', description: 'Detailed info about Card 1' },
    { id: 2, title: 'Card 2', description: 'Detailed info about Card 2' },
    // Add more card data here
  ];

  return (
    <View>
      {cards.map((card) => (
        <CardComponent
          key={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </View>
  );
};

export default Curriculum;
