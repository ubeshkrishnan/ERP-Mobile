import React from 'react';
import { View } from 'react-native';
import CardResult from './CardResults'; // Correct import statement

const Result = () => {
  const cards = [
    {
      id: 1,
      title: 'BSCE3L-Operation System',
      description: 'Max Marks: 30 \nMark Status: Present \nScored Marks: 28 \nRemarks: - \n',
    },
    {
      id: 2,
      title: 'BSCM120-Management System',
      description: 'Max Marks: 30 \nMark Status: Absent \nScored Marks: - \nRemarks: - \n',
    },
   
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
