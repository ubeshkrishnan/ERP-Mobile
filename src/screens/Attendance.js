import React from 'react';
import { View, Text, StyleSheet, Dimensions ,ScrollView} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

const SubjectCard = ({ subjectCode, subjectName, totalClasses, attendedClasses }) => {
  const attendancePercentage = ((attendedClasses / totalClasses) * 100).toFixed(2);

  return (
    <>
    <View style={styles.card}>
      <View style={styles.details}>
        <View style={styles.detailsLeft}>
          <Text style={styles.subjectCode}>{subjectCode}</Text>
          <Text style={styles.subjectName}>{subjectName}</Text>
          <Text style={styles.subjectTotalClass}>Total Classes: {totalClasses}</Text>
          <Text style={styles.subjectAttendClass}>Attended Classes: {attendedClasses}</Text>
          <Text style={styles.subjectAttendancePercentage}>
            Attendance Percentage: {attendancePercentage}%
          </Text>
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
            <Text style={styles.circleText}>{attendancePercentage}%</Text>
          </View>
        </View>
      </View>
    </View>
    </>
  );
};

const Attendance = () => {
  // Example subject data (replace with your actual data)
  const subjects = [
    { subjectCode: 'MATH101', subjectName: 'Mathematics', totalClasses: 30, attendedClasses: 25 },
    { subjectCode: 'SCI201', subjectName: 'Science', totalClasses: 28, attendedClasses: 10 },
    { subjectCode: 'SCI201', subjectName: 'Science', totalClasses: 28, attendedClasses: 10 },
    { subjectCode: 'SCI201', subjectName: 'Science', totalClasses: 28, attendedClasses: 10 },

    // Add more subject data here
  ];

  return (
    <View style={styles.container}>
      {subjects.map((subject, index) => (
        <SubjectCard
          key={index}
          subjectCode={subject.subjectCode}
          subjectName={subject.subjectName}
          totalClasses={subject.totalClasses}
          attendedClasses={subject.attendedClasses}
        />
      ))}
    </View>
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
    borderRadius: (Dimensions.get('window').width * 0.20) / 2,
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
    color: 'black',
  },
  subjectAttendancePercentage: {
    color: 'black',
  },
});

export default Attendance;
