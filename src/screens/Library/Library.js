import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, TextInput, Text} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Url} from '../../../Global_Variable/api_link';

const Library = () => {
  const [bookData, setBookData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  useEffect(() => {
    // Fetch the stored values from AsyncStorage
    const fetchDataFromStorage = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('user_id');

        if (storedUserId) {
          setUserId(storedUserId);
          // Now you can fetch the data from the API using the retrieved values
          fetchLibraryData(storedUserId);
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchDataFromStorage();
  }, []);

  const fetchLibraryData = userId => {
    fetch(Url + `/library?user_id=${userId}`)
      .then(response => response.json())
      .then(data => {
        setBookData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  // Filter book data based on the search query
  const filteredBookData = bookData.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      {/* Search bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search books..."
        placeholderTextColor="black"
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
      />

      <ScrollView>
        {filteredBookData.length === 0 ? ( // Check if there are no records
          <Text style={styles.noRecordsText}>No Records Found</Text>
        ) : (
          filteredBookData.map((book, index) => (
            <Card style={styles.card} key={index}>
              <Card.Content>
                <Paragraph style={styles.paragraph}>
                  Accession No: {book.accession_no}
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  Book: {book.title}
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  Author : {book.author_name}
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  Issued Date: {book.date_issued}
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  Due Date: {book.due_date}
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  Returned Date: {book.date_returned}
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  Fine: {book.fine}
                </Paragraph>
                <Paragraph style={styles.paragraph}>
                  Status: {book.status}
                </Paragraph>
              </Card.Content>
            </Card>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E3E3E3',
  },

  card: {
    width: '100%',
    padding: 10,
    elevation: 3,
    marginBottom: 10,
    // shadowColor: 'black',
    paddingBottom: 10,
    backgroundColor: 'white',
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },

  paragraph: {
    marginBottom: 9,
    color: 'black',
  },

  searchBar: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'white',
  },
  noRecordsText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Library;
