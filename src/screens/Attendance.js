import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../Color';
import { Url } from '../../Global_Variable/api_link';

const SubjectCard = ({ subjectCode, subjectName, profName, totalClasses, attendedClasses, attendancePercentage }) => {
  const formattedAttendancePercentage = `${(attendancePercentage * 1).toFixed(1)}%`;

  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <View style={styles.detailsLeft}>
          <Text style={styles.subjectCode}>{subjectCode}</Text>
          <Text style={styles.subjectName}>{subjectName}</Text>
          <Text style={styles.profName}>Professor:{profName}</Text>
          <Text style={styles.subjectTotalClass}>Total Classes: {totalClasses}</Text>
          <Text style={styles.subjectAttendClass}>Attended Classes: {attendedClasses}</Text>

        </View>
        <View style={styles.circleContainer}>
          <View
            style={[
              styles.circle,
              {
                borderColor: '#00FF00', // Green border color
                width: Dimensions.get('window').width * 0.20, // Set the width of the circle
              },
            ]}
          >
            <Text style={styles.circleText}>{formattedAttendancePercentage}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Attendance = () => {
  const [subjects, setSubjects] = useState([]);
  const [UserId, setUserId] = useState(null);
  const [degreeBranchId, setDegreeBranchId] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [currentSemester, setCurrentSemester] = useState(null);

  useEffect(() => {
    // Fetch the stored values from AsyncStorage
    const fetchDataFromStorage = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('user_id');
        const storedDegreeBranchId = await AsyncStorage.getItem('degree_branch_id');
        const storedStudentId = await AsyncStorage.getItem('student_id');
        const storedCurrentSemester = await AsyncStorage.getItem('current_semester');

        if (
          storedUserId &&
          storedDegreeBranchId &&
          storedStudentId &&
          storedCurrentSemester
        ) {
          setUserId(storedUserId);
          setDegreeBranchId(storedDegreeBranchId);
          setStudentId(storedStudentId);
          setCurrentSemester(storedCurrentSemester);

          // Now you can fetch the data from the API using the retrieved values
          fetchAttendanceData(storedUserId, storedStudentId, storedCurrentSemester, storedDegreeBranchId);
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchDataFromStorage();
  }, []);

  const fetchAttendanceData = (userId, studentId, semester, degreeBranchId) => {
    // Fetch data from your API endpoint using the retrieved values
    fetch(Url + `/attendance?user_id=${userId}&student_id=${studentId}&semester=${semester}&degree_branch_id=${degreeBranchId}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log('Fetched data:', data); // Log the data here
        setSubjects(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {subjects.map((subject, index) => (
          <SubjectCard
            key={index}
            subjectCode={subject.code}
            subjectName={subject.course_name}
            profName={subject.prof_name}
            totalClasses={subject.totalClasses}
            attendedClasses={subject.attendedClasses}
            attendancePercentage={subject.present_percentage}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 3,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsLeft: {
    flex: 1,
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: Dimensions.get('window').width * 0.20,
    width: Dimensions.get('window').width * 0.20,
    borderRadius: (Dimensions.get('window').width * 0.30) / 2,
    borderWidth: 2, // Border width
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  subjectCode: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  subjectName: {
    fontSize: 16,
    marginVertical: 4,
    color: 'black',
  },
  subjectTotalClass: {
    fontSize: 16,
    marginVertical: 4,
    color: 'black',
  },
  subjectAttendClass: {
    fontSize: 16,
    marginVertical: 4,
    color: Colors.LighBlueColor,
    fontWeight: '800'
  },
  subjectAttendancePercentage: {
    color: Colors.LighBlueColor,
    fontWeight: '800'
  },
  profName: {
    color: 'black'
  }
});

export default Attendance;
