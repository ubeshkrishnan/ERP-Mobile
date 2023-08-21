// MainComponent.js
import React from 'react';
import { View } from 'react-native';
import CardComponent from './CardCurriculum';

const Curriculum = () => {
  const cards = [
    { id: 1, title: '22MLM101- Malayalam - I', description: 'SEM - 1' },
    { id: 2, title: '22ENN101 - English - I', description: 'Faculty - Krishnan ' },
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
