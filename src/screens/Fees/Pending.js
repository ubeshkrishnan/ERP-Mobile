import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {Url} from '../../../Global_Variable/api_link';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

const Pending = () => {
  const [pendingData, setPendingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [studentId, setStudentId] = useState(null);

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
      fetchPendingData(studentId)
        .then(data => {
          setPendingData(data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching pending data:', error);
          setIsLoading(false);
        });
    }
  }, [studentId]);

  const fetchPendingData = async studentId => {
    try {
      const response = await fetch(
        `${Url}/fee_details?student_id=${studentId}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching pending data: ${error.message}`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="blue" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        // Render pending data
        pendingData.map((fee, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardText}>Term: {fee.term_number}</Text>
            <Text style={styles.cardText}>Total Fee: {fee.amt_to_be_paid}</Text>
            <Text style={styles.cardText}>
              Paid: {fee.paid !== null ? fee.paid : 'Not available'}
            </Text>
            <Text style={styles.cardTextPending}>
              Pending:{' '}
              {fee.paid !== null
                ? fee.amt_to_be_paid - fee.paid
                : 'Not available'}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    padding: 16,
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
  card: {
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
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

export default Pending;
