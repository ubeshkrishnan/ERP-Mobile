import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Url } from '../../Global_Variable/api_link';

const FeeDetails = () => {
  const [feeData, setFeeData] = useState([]); // State to hold fee data
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Fetch fee data from the specified URL
    fetchFeeData()
      .then((data) => {
        setFeeData(data);
        setIsLoading(false); // Set loading to false when data is available
      })
      .catch((error) => {
        console.error('Error fetching fee data:', error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, []);

  // Function to fetch fee data from the specified URL
  const fetchFeeData = async () => {
    try {
      const response = await fetch(Url + '/fee_details');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching fee data: ${error.message}`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {isLoading ? ( // Render loading indicator while data is loading
        <View style={styles.loadingContainer}>
          <ActivityIndicator  size="large" color="blue" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        // Render fee data when available
        feeData.map((fee, index) => (
          <FeeDetailsCard key={index} fee={fee} />
        ))
      )}
    </ScrollView>
  );
};

const FeeDetailsCard = ({ fee }) => {
  let cardColor;
  switch (fee.term_number) {
    case "1":
      cardColor = "#FAF1E5"; // Yellow for term 1
      break;
    case "2":
      cardColor = "#4CAF50"; // Green for term 2
      break;
    default:
      cardColor = "#9E9E9E"; // Gray for other terms
      break;
  }

  return (
    <View style={[styles.card, { backgroundColor: cardColor }]}>
      <Text style={styles.cardText}>Semester: {fee.term_number}</Text>
      <Text style={styles.cardText}>Total Fee: {fee.amt_to_be_paid}</Text>
      <Text style={styles.cardPaid}>Paid: {fee.paid}</Text>
      <Text style={styles.cardPending}>Pending: {fee.amt_to_be_paid - fee.paid}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 20,
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 60,
    color:'black'
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
  },
});

export default FeeDetails;
