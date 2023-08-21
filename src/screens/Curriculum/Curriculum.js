// MainComponent.js
import React from 'react';
import { View } from 'react-native';
import CardComponent from './CardCurriculum';

const Curriculum = () => {
  const cards = [
    {
      id: 1,
      title: '22MLM101 - Malayalam - I',
      description: 'SEM - 1',
      faculty: 'Faculty - John Doe', // Additional property
      schedule: 'Mon, Wed, Fri 10:00 AM - 11:00 AM', // Additional property
    },
    {
      id: 2,
      title: '22ENN101 - English - I',
      description: 'SEM - 1',
      faculty: 'Faculty - Jane Smith', // Additional property
      schedule: 'Tue, Thu 11:00 AM - 12:30 PM', // Additional property
    },
   
  ];

  return (
    <View>
      {cards.map((card) => (
        <CardComponent
          key={card.id}
          title={card.title}
          description={card.description}
          faculty={card.faculty} // Pass additional property
          schedule={card.schedule} // Pass additional property
        />
      ))}
    </View>
  );
};

export default Curriculum;
