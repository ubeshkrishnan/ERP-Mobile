import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions, TextInput } from 'react-native'; // Import TextInput
import { Url } from '../../Global_Variable/api_link';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

const FeeDetails = () => {
  const [feeData, setFeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [studentId, setStudentId] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  useEffect(() => {
    const fetchDataFromStorage = async () => {
      try {
        const storedStudentId = await AsyncStorage.getItem('student_id');

        if (storedStudentId) {
          setStudentId(storedStudentId);
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchDataFromStorage();
  }, []);

  useEffect(() => {
    if (studentId) {
      fetchFeeData(studentId)
        .then((data) => {
          // Organize fee data by fee_name
          const organizedData = organizeData(data);
          setFeeData(organizedData);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching fee data:', error);
          setIsLoading(false);
        });
    }
  }, [studentId]);

  const fetchFeeData = async (studentId) => {
    try {
      const response = await fetch(`${Url}/fee_details?student_id=${studentId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error(`Error fetching fee data: ${error.message}`);
    }
  };

  const organizeData = (data) => {
    // Create an object to group fee data by fee_name
    const groupedData = {};

    data.forEach((fee) => {
      const feeName = fee.fee_name;

      if (!groupedData[feeName]) {
        groupedData[feeName] = [];
      }

      groupedData[feeName].push(fee);
    });

    return groupedData;
  };

  // Filter fee data based on the search query
  const filteredFeeData = Object.keys(feeData)
    .filter((feeName) => feeName.toLowerCase().includes(searchQuery.toLowerCase()))
    .reduce((filtered, feeName) => {
      filtered[feeName] = feeData[feeName];
      return filtered;
    }, {});

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor="black"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="blue" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        // Render fee data for each fee category
        Object.keys(filteredFeeData).map((feeName, index) => (
          <FeeCategory key={index} feeName={feeName} fees={filteredFeeData[feeName]} />
        ))
      )}
    </ScrollView>
  );
};

const FeeCategory = ({ feeName, fees }) => {
  return (
    <ScrollView style={styles.feeCategory}>
      <Text style={styles.feeCategoryTitle}>Fee Type: {feeName}</Text>
      {fees.map((fee, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardText}>Term: {fee.term_number}</Text>
          <Text style={styles.cardText}>Total Fee: {fee.amt_to_be_paid}</Text>
          <Text style={styles.cardText}>Paid: {fee.paid !== null ? fee.paid : 'Not available'}</Text>
          <Text style={styles.cardTextPending}>
            Pending: {fee.paid !== null ? fee.amt_to_be_paid - fee.paid : 'Not available'}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
    color: 'black',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 60,
    color: 'black',
  },
  feeCategory: {
    marginBottom: 20,
  },
  feeCategoryTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    paddingLeft: 20,
  },
  card: {
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
    padding: 15,
    width: windowWidth * 0.9,
    backgroundColor: 'white',
  },
  cardText: {
    fontSize: 16,
    marginVertical: 5,
    color: 'black',
  },
  cardTextPending: {
    color: 'red',
    fontWeight: '800',
    fontSize: 16,
  },
});

export default FeeDetails;


