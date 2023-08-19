import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const Calendar = () => {
  const [searchText, setSearchText] = useState('');
  const [days, setDays] = useState([
    { date: '08-01-2023', type: 'Holiday', name: 'Labor Day', description: 'A day to celebrate workers', cycle: 1, dayOrder: 'I', isWorkingDay: true },
    // Add more days here
  ]);

  const filteredDays = days.filter(day =>
    day.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderWorkingDaysWithCounts = () => {
    const workingDayCounts = {};
    days.forEach(day => {
      if (day.isWorkingDay) {
        const dateParts = day.date.split('-');
        const month = parseInt(dateParts[0]);
        if (workingDayCounts[month]) {
          workingDayCounts[month]++;
        } else {
          workingDayCounts[month] = 1;
        }
      }
    });

    return Object.keys(workingDayCounts).map(month => (
      <Text key={month} style={{ color: "black" }}>{`Month ${month} Working Days: ${workingDayCounts[month]}`}</Text>
    ));
  };

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
        {filteredDays.map((day, index) => (
          <View style={styles.card} key={index}>
            <Text style={day.isWorkingDay ? styles.cardTitleWorking : styles.cardTitleHolidays}>{day.type}</Text>
            <Text style={{ color: "black", fontWeight: 'bold' }}>{`${day.date} - ${day.name}`}</Text>
            <Text style={{ color: "black", fontWeight: 'bold' }}>{`Description: ${day.description}`}</Text>
            <Text style={{ color: "black", fontWeight: 'bold' }}>{`Cycle: ${day.cycle}`}</Text>
            <Text style={{ color: "black", fontWeight: 'bold' }}>{`Day Order: ${day.dayOrder}`}</Text>
            <Text style={{ color: "black", fontWeight: 'bold' }}>{`Working Day: ${day.isWorkingDay ? 'Yes' : 'No'}`}</Text>
          </View>
        ))}
        <View style={styles.card}>
          <Text style={styles.cardTitleWorking}>Working Day Counts:</Text>
          {renderWorkingDaysWithCounts()}
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
  cardTitleWorking: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'red'
  },
  cardTitleHolidays: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 15,
  }
});

export default Calendar;
