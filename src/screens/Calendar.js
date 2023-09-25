import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Colors from '../Color';
import { Url } from '../../Global_Variable/api_link';

const Calendar = () => {
  const [searchText, setSearchText] = useState('');
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the URL you want to fetch data from
    const apiUrl = Url + '/calendar'; // Replace with your actual API URL

    // Use the fetch API to make the GET request
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming the response is in JSON format
      })
      .then((data) => {
        // Update the 'days' state with the fetched data
        setDays(data);
        // Set loading to false once the data is fetched
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        // Set loading to false in case of an error
        setLoading(false);
      });
  }, []);

  const renderDays = () => {
    return days.map((day, index) => (
      <View style={[styles.card, day.labels.includes('HOLIDAY') ? styles.cardHoliday : styles.cardWorking]} key={index}>
        <Text style={day.labels.includes('HOLIDAY') ? styles.cardTitleHoliday : styles.cardTitleWorking}>{day.labels}</Text>
        <Text style={{ color: 'grey', fontWeight: 'bold' }}>{day.date}</Text>
        {/* Add more dynamic rendering here */}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search holidays..."
        placeholderTextColor="gray"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      {loading ? ( // Show ActivityIndicator when loading
        <ActivityIndicator size="large" color="blue" style={styles.loader} />
      ) : (
        <ScrollView style={styles.cardContainer}>{renderDays()}</ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  cardContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitleWorking: {
    fontSize: 15,
    fontWeight: '900',
    marginBottom: 5,
    color: 'red',
  },
  cardTitleHoliday: {
    color: 'green',
    fontWeight: '900',
    marginBottom: 5,
    fontSize: 15,
  },
  cardHoliday: {
    color: 'black',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Calendar;
