import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Color'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Url } from '../../../Global_Variable/api_link'

const CourseCard = ({ course }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>Semester: {course.exam_sem_no}</Text>
      <Text style={styles.courseName}>Course Code: {course.code}</Text>
      <Text style={styles.courseName}>Course Name: {course.course_name}</Text>
      <Text style={styles.cardText}>Internal Mark: {course.internal_mark}</Text>
      <Text style={styles.cardText}>External Mark: {course.external_mark}</Text>
      <Text style={styles.cardText}>Grade Point: {course.lg}</Text>
      <Text style={styles.cardText}>Result : {course.result}</Text>
      <Text style={styles.cardText}>Pass Month : {course.pass_month}</Text>



    </View>
  )
}

const Complete = () => {
  const [data, setData] = useState([])
  const [UserId, setUserId] = useState(null)
  const [degreeBranchId, setDegreeBranchId] = useState(null)
  const [studentId, setStudentId] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Fetch the stored values from AsyncStorage
    const fetchDataFromStorage = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('user_id');
        const storedDegreeBranchId = await AsyncStorage.getItem('degree_branch_id');
        const storedStudentId = await AsyncStorage.getItem('student_id');

        if (storedUserId && storedDegreeBranchId && storedStudentId) {
          setUserId(storedUserId);
          setDegreeBranchId(storedDegreeBranchId);
          setStudentId(storedStudentId);

          // Now you can fetch the data from the API using the retrieved values
          fetchCourseData(storedUserId, storedStudentId, storedDegreeBranchId);
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchDataFromStorage();
  }, []);

  const fetchCourseData = (userId, studentId, degreeBranchId) => {
    fetch(Url + `/course_complete?user_id=${userId}&student_id=${studentId}&degree_branch_id=${degreeBranchId}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log('Fetched data:', data); // Log the data here
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  // const coursesData = [
  //   {
  //     courseName: 'Mathematics - I',
  //     facultyName: 'KK',
  //     semester: 'Fall 2023',
  //     courseCode: 'MATH101',
  //   },
  //   {
  //     courseName: 'Physics - I',
  //     facultyName: 'Srinithi',
  //     semester: 'Fall 2023',
  //     courseCode: 'PHYS201',
  //   },
  // ]

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color={Colors.LighBlueColor} />
      ) : (
        <ScrollView>
          <View style={styles.cardContainer}>
            {data.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
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
      color: 'black',
    },
    courseName: {
      fontSize: 16,
      marginBottom: 5,
      color: 'black',
    },
  })

  export default Complete
