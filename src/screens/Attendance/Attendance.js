import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../../Color';
import { Url } from '../../../Global_Variable/api_link';

const TextStyles = StyleSheet.create({
  subjectCode: {
    fontSize: 18,
    fontWeight: '800',
    color: '#009FFF',
  },
  subjectName: {
    marginVertical: 4,
    color: 'black',
    fontWeight: '700',
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
    fontWeight: '800',
  },
  subjectAttendancePercentage: {
    color: Colors.LighBlueColor,
    fontWeight: '800'
  },
  profName: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500'
  },
});

const SubjectCard = ({ subjectCode, subjectName, profName, attendancePercentage }) => {
  const formattedAttendancePercentage = `${(attendancePercentage * 1).toFixed(1)}%`;

  return (
    <View style={styles.card}>
      <View style={styles.details}>
        <View style={styles.detailsLeft}>
          <Text style={TextStyles.subjectCode}>{subjectCode}</Text>
          <Text style={TextStyles.subjectName}>{subjectName}</Text>
          <Text style={TextStyles.profName}>Professor: {profName !== null ? profName : "Not available"}</Text>
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
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(true);

        // console.log('Fetched data:', data); // Log the data here
        setSubjects(data);
        setIsLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <ScrollView>
      {isLoading ? (
        <View style={{ alignItems: 'center', marginTop: 80 }}>
          <ActivityIndicator size="large" color={Colors.LighBlueColor} />
          <Text style={{ color: 'black' }}>Loading...</Text>
        </View>
      ) : (
        <View style={styles.container}>
          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              subjectCode={subject.code}
              subjectName={subject.course_name}
              profName={subject.prof_name}
              totalClasses={subject.totalClasses}
              attendancePercentage={subject.present_percentage}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E3E3E3'
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
    borderWidth: 4, // Border width
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Attendance;
