import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../Color';
import {Url} from '../../../Global_Variable/api_link';

const CurrentCourseCard = ({course}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.courseCode}>Course Code: {course.code}</Text>
        <Text style={styles.cardSem}>Sem: {course.section}</Text>
      </View>
      <Text style={styles.courseName}>Course Name: {course.course_name}</Text>
      <Text style={styles.cardText}>Faculty: {course.prof_name} </Text>
    </View>
  );
};

const Current = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your API or other source here
    fetch(
      Url + `/current_course?user_id=16257&semester_no=3&degree_branch_id=37`,
    )
      .then(response => response.json())
      .then(data => {
        // Assuming 'data' is an array of course objects
        setData(data); // Set the array of course objects
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.LighBlueColor} />
      ) : (
        <View style={styles.cardContainer}>
          {data.map((course, index) => (
            <CurrentCourseCard key={index} course={course} />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 15,
    // fontWeight: 'bold',
    marginTop: 20,
  },
  cardSem: {
    color: Colors.LighBlueColor,
    fontWeight: '700',
    fontSize: 17,
  },
  cardCode: {
    color: Colors.LighBlueColor,
    fontWeight: '500',
  },
  cardContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 10,
  },
  courseCode: {
    color: Colors.LighBlueColor,
    fontSize: 17,
    fontWeight: '800',
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
  courseName: {
    fontSize: 17,
    marginBottom: 5,
    color: 'black',
    fontWeight: '500',
  },
  cardText: {
    fontSize: 17,
    marginBottom: 5,
    color: 'black',
  },
});

export default Current;
