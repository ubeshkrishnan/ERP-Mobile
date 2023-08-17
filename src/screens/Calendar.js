import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const StudentCalendar = () => {
  const [searchText, setSearchText] = useState('');
  const [holidays, setHolidays] = useState([
    { date: '2023-08-20', type: 'Holiday', name: 'Labor Day' },
    { date: '2023-09-04', type: 'Holiday', name: 'Labor Day' },
    // Add more holidays here
  ]);
  const [workingDays, setWorkingDays] = useState([
    { date: '2023-08-21', type: 'Working Day' },
    { date: '2023-08-22', type: 'Working Day' },
    // Add more working days here
  ]);

  const filteredHolidays = holidays.filter(holiday =>
    holiday.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search holidays..."
        placeholderTextColor="gray"
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      <ScrollView style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Holidays</Text>
          {filteredHolidays.map((holiday, index) => (
            <Text style={{ color: "black", fontWeight: 'bold' }} key={index}>{`${holiday.date} - ${holiday.name}`}</Text>
          ))}
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Working Days</Text>
          {workingDays.map((day, index) => (
            <Text style={{ color: "black", fontWeight: 'bold' }} key={index}>{`${day.date} - ${day.type}`}</Text>
          ))}
        </View>
      </ScrollView>
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
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default StudentCalendar;
