import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Url } from '../../../Global_Variable/api_link';

const Library = () => {
  const [bookData, setBookData] = useState([]);
  const [userId, setUserId] = useState(null);

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

  const fetchLibraryData = (userId) => {
    fetch(Url + `/library?user_id=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setBookData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <ScrollView style={styles.container}>
      {bookData.map((book, index) => (
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
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAF1E5',

  },
  card: {
    width: '100%',
    padding: 10,
    elevation: 3,
    marginBottom: 10, // Add margin between cards
    shadowColor: 'black',
    paddingBottom: 10,
  },
  paragraph: {
    marginBottom: 9,
  },
});

export default Library;
