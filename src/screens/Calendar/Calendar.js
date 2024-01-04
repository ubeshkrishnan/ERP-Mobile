import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Url} from '../../../Global_Variable/api_link';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Calendar = () => {
  const [searchText, setSearchText] = useState('');
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Fetch the stored values from AsyncStorage
    const fetchDataFromStorage = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('user_id');

        if (storedUserId) {
          setUserId(storedUserId);
          // Now that we have the userId, fetch data from the API
          fetchCalendarData(storedUserId);
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchDataFromStorage();
  }, []);

  const fetchCalendarData = userId => {
    // Use the fetch API to make the GET request
    fetch(Url + `/calendar?user_id=${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming the response is in JSON format
      })
      .then(data => {
        // Update the 'days' state with the fetched data
        setDays(data);
        // Set loading to false once the data is fetched
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        // Set loading to false in case of an error
        setLoading(false);
      });
  };

  const renderDays = () => {
    return days.map((day, index) => (
      <View
        style={[
          styles.card,
          day.labels.includes('HOLIDAY')
            ? styles.cardHoliday
            : styles.cardWorking,
        ]}
        key={index}>
        <Text
          style={
            day.labels.includes('HOLIDAY')
              ? styles.cardTitleHoliday
              : styles.cardTitleWorking
          }>
          {day.labels}
        </Text>
        <Text style={{color: 'grey', fontWeight: 'bold'}}>{day.date}</Text>
        {/* Add more dynamic rendering here */}
      </View>
    ));
  };

  // Filter function based on dd/mm/yyyy format
  const filterByDate = date => {
    return days.filter(day => day.date.includes(date));
  };

  useEffect(() => {
    // Filter data when searchText changes
    if (searchText) {
      const filteredData = filterByDate(searchText);
      setDays(filteredData);
    }
  }, [searchText]);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.searchBar, {color: 'black'}]}
        placeholder="Search holidays (dd/mm/yyyy)..."
        placeholderTextColor="gray"
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />

      {loading ? (
        <View style={{alignItems: 'center', marginTop: 80}}>
          <ActivityIndicator size="large" style={styles.loader} />
          <Text style={{color: 'black'}}>Loading...</Text>
        </View>
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
    color: 'green',
  },
  cardTitleHoliday: {
    color: 'red',
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
    marginBottom: 30,
    color: 'blue',
  },
});

export default Calendar;
