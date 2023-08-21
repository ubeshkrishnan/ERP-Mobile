import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const CurrentCourseCard = ({ sub }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>Course Name: {sub.courseName}</Text>
      <Text style={styles.cardText}>Faculty: {sub.facultyName}</Text>
      <Text style={styles.cardText}>Semester: {sub.semester}</Text>
      <Text style={styles.cardText}>Course Code: {sub.courseCode}</Text>
    </View>
  );
};

const Current = () => {
  const data = [
    {
      courseName: 'Mathematics - II',
      facultyName: 'Mr. UMA',
      semester: '2023',
      courseCode: 'MATH202',
    },
    // Add more courses here
  ];

  return (
    <View>
      {data.map((sub, index) => (
        <CurrentCourseCard key={index} sub={sub} />
      ))}
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
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
    color:'black'
  },
});

export default Current;
