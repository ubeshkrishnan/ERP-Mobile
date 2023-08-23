import React from 'react';
import { View } from 'react-native';
import CardEschedule from './CardEschedule'; // Correct import statement

const Eschedule = () => {
  const cards = [
    {
      id: 1,
      title: 'BSCE3L-Operation System',
      description: 'Slot: A \n Exam Date: 27- May-2023 \n Exam Time: 09:30 AM - 11:00 AM \n Venue: B-block \n Seat Details : 21/R1/09:00 AM',
    },
    {
      id: 2,
      title: 'BSCM120-Management System',
      description: 'Slot: B \n Exam Date: 25- May-2023 \n Exam Time: 09:30 AM - 11:00 AM \n Venue: B-block \n Seat Details : 21/R1/09:00 AM',
    },
  ];

  return (
    <View>
      {cards.map((card) => (
        <CardEschedule
          key={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </View>
  );
};


export default Eschedule;
