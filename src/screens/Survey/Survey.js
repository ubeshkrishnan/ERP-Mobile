// Survey.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Survey = ({
  batch = '2022',
  semester = 'Spring',
  degree = 'Bachelor of Science',
  branch = 'Computer Science',
  surveyName = 'Student Feedback',
  startDate = '2022-01-01',
  endDate = '2022-01-31',
  completedDate = '2022-02-15',
  status = 'Completed',
}) => {
  const fields = [
    {label: 'Batch', value: batch},
    {label: 'Semester', value: semester},
    {label: 'Degree', value: degree},
    {label: 'Branch', value: branch},
    {label: 'Survey Name', value: surveyName},
    {label: 'Start Date', value: startDate},
    {label: 'End Date', value: endDate},
    {label: 'Completed Date', value: completedDate},
    {label: 'Status', value: status},
  ];

  return (
    <View style={styles.cardContainer}>
      {fields.map(({label, value}, index) => (
        <View key={index} style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>{label}:</Text>
          <Text style={styles.fieldValue}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  fieldLabel: {
    fontWeight: 'bold',
    color: 'black',
  },
  fieldValue: {
    color: 'black',
    textAlign: 'start',
  },
});

export default Survey;
