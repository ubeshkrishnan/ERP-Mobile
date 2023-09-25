import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../../Color';
import { Url } from '../../../Global_Variable/api_link';

const CurrentCourseCard = ({ course }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.courseName}>Course Name: {course.course_name}</Text>
      <Text style={styles.cardText}>Faculty: {course.prof_name}</Text>
      <Text style={styles.cardText}>Semester: {course.section}</Text>
      <Text style={styles.cardText}>Course Code: {course.code}</Text>
    </View>
  );
};

const Current = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API or other source here
    fetch(Url + `/current_course?user_id=16257&semester_no=3&degree_branch_id=37`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("Data", data); // Log the parsed data
        // Assuming 'data' is an array of course objects
        setData(data); // Set the array of course objects
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        {data.map((course, index) => (
          <CurrentCourseCard key={index} course={course} />
        ))}
      </View>
    </ScrollView>
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
  courseName: {
    fontSize: 16,
    marginBottom: 5,
    color: Colors.LighBlueColor,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
});

export default Current;
