import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../Color';

const FutureCourseCard = ({sub}) => {
  return (
    <View style={styles.card}>
      <View style={styles.HeaderCard}>
        <Text style={styles.courseName}>Course Name: {sub.courseName}</Text>
        <Text style={styles.cardSem}>Sem: {sub.semester}</Text>
      </View>
      <Text style={styles.cardText}>Faculty: {sub.facultyName}</Text>

      <Text style={styles.cardText}>Course Code: {sub.courseCode}</Text>
    </View>
  );
};

const Future = () => {
  const data = [
    {
      courseName: 'BIO - II',
      facultyName: 'Mr. Raj',
      semester: '2023',
      courseCode: 'BIO101',
    },
    // Add more courses here
  ];

  return (
    <View>
      <View style={styles.cardContainer}>
        {data.map((sub, index) => (
          <FutureCourseCard key={index} sub={sub} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  cardContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  HeaderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 3,
  },
  cardText: {
    fontSize: 17,
    marginBottom: 5,
    color: 'black',
  },
  courseName: {
    fontSize: 17,
    marginBottom: 5,
    color: Colors.LighBlueColor,
    fontWeight: '600',
  },
  cardSem: {
    color: Colors.LighBlueColor,
    fontWeight: '600',
    fontSize: 17,
  },
});

export default Future;
