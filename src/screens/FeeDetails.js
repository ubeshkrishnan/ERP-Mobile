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
    // Add more fee details here
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
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>Semester: {fee.Semester}</Text>
      <Text style={styles.cardText}>Total Fee: {fee.TotalFee}</Text>
      <Text style={styles.cardText}>Paid: {fee.Paid}</Text>
      <Text style={styles.cardText}>Pending: {fee.Pending}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10, // Added border radius
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    margin: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,

  },
  cardText: {
    fontSize: 16,
    margin: 5,
    color: 'black',
  },
});

export default FeeDetails;