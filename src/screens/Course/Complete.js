import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Color';

const CourseCard = ({ course }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.courseName}> Course Name: {course.courseName}</Text>
      <Text style={styles.cardText}>Faculty: {course.facultyName}</Text>
      <Text style={styles.cardText}>Semester: {course.semester}</Text>
      <Text style={styles.cardText}>Course Code: {course.courseCode}</Text>
    </View>
  );
}

const Complete = () => {
  const coursesData = [
    {
      courseName: 'Mathematics -  I',
      facultyName: 'KK',
      semester: 'Fall 2023',
      courseCode: 'MATH101'
    },
    {
      courseName: 'Physics - I',
      facultyName: 'Srinithi',
      semester: 'Fall 2023',
      courseCode: 'PHYS201'
    },

  ];

  return (
    <View>
      <View style={styles.cardContainer}>
        {coursesData.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </View>
    </View>
  )
}

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
    color: 'black'
  },
  courseName: {
    fontSize: 16,
    marginBottom: 5,
    color: Colors.LighBlueColor,
  }
});

export default Complete;
