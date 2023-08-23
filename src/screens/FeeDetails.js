import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const FeeDetails = () => {
  const data = [
    {
      Semester: "I",
      TotalFee: '10,000',
      Paid: '5,000',
      Pending: '5,000',
    },
  ];

  return (
    <View style={styles.container}>
      {data.map((fee, index) => (
        <FeeDetailsCard key={index} fee={fee} />
      ))}
    </View>
  );
};

const FeeDetailsCard = ({ fee }) => {
  let cardColor;
  switch (fee.Semester) {
    case "I":
      cardColor = "#FAF1E5"; // Yellow
      break;
    case "II":
      cardColor = "#4CAF50"; // Green
      break;
    case "III":
      cardColor = "#2196F3"; // Blue
      break;
    default:
      cardColor = "#9E9E9E"; // Gray
      break;
  }

  return (
    <View style={[styles.card, { backgroundColor: cardColor }]}>
      <Text style={styles.cardText}>Semester: {fee.Semester}</Text>
      <Text style={styles.cardText}>Total Fee: {fee.TotalFee}</Text>
      <Text style={styles.cardPaid}>Paid: {fee.Paid}</Text>
      <Text style={styles.cardPending}>Pending: {fee.Pending}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    marginTop:20,
  },
  card: {
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    padding: 15,
  },
  cardText: {
    fontSize: 16,
    marginVertical: 5,
    color: 'black',
  },
  cardPending: {
    color: 'red',
    fontWeight: '600',
    fontSize: 17,
    marginVertical: 5,
  },
  cardPaid: {
    color: 'green',
    fontWeight: '600',
    fontSize: 17,
    marginVertical: 5,
  }
});

export default FeeDetails;
