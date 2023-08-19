// MainResCardResult.js
import React from 'react';
import { View } from 'react-native';
import CardResult from './CardResults';

const Result = () => {
  const cards = [
    { id: 1, title: 'BSCE3L-Operation System', description: 'Max Marks Status Score Mark Remarks' },
    { id: 2, title: 'Card 2', description: 'Detailed info about Card 2' },
    // Add more card data here
  ];

  return (
    <View>
      {cards.map((card) => (
        <CardResult
          key={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </View>
  );
};

export default Result;
