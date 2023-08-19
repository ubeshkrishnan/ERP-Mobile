import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

const Library = () => {
  const bookdata = [
    { key: 'Accession No', value: '12345' },
    { key: 'Book Name', value: 'Introduction to React Native' },
    { key: 'Issue Date', value: '2023-08-20' },
    { key: 'Due Date', value: '2023-09-10' },
    { key: 'Return Date', value: '2023-09-05' },
    { key: 'Status', value: 'Returned' },
  ];

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          {bookdata.map(({ key, value }, indexLib) => (
            <Paragraph style={styles.paragraph} key={indexLib}>
              {key}: {value}
            </Paragraph>
          ))}
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Paragraph style={styles.paragraph}>
            Another Field: Another Value
          </Paragraph>
          {/* Add more Paragraph components as needed */}
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    width: '100%',
    padding: 10,
    elevation: 3,
    marginBottom: 10, // Add margin between cards
  },
  paragraph: {
    marginBottom: 5,
  },
});

export default Library;
