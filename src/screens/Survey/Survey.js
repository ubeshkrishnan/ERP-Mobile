// Survey.js
import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SurveyData from './SurveyData';

const Survey = ({
  branch = 'B.E. Computer Science',
  surveyName = '2023_academic_survey',
  startDate = '2022-01-01',
  endDate = '04-01-2024 00:00:00',
  completedDate = '2022-02-15',
  status = 'Completed',
}) => {
  const navigation = useNavigation();
  const fields = [
    {label: 'Branch', value: branch},
    {label: 'Survey Name', value: surveyName},
    {label: 'Start Date', value: startDate},
    {label: 'End Date', value: endDate},
    {label: 'Completed Date', value: completedDate},
    {label: 'Status', value: status},
  ];
  const handleButtonClick = () => {
    // Use navigation.navigate to navigate to 'SurveyData' screen
    navigation.navigate('SurveyData');
  };
  return (
    <View>
      <View style={styles.cardContainer}>
        {fields.map(({label, value}, index) => (
          <View key={index} style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>{label}:</Text>
            <Text style={styles.fieldValue}>{value}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleButtonClick}>
        <Text style={styles.buttonLabelSave}>Click to start</Text>
      </TouchableOpacity>
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
    padding: 5,
    margin: 8,
    marginTop: 16,
    fontSize: 17,
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  fieldLabel: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
  },
  fieldValue: {
    color: 'black',
    // textAlign: 'start',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 7,
    width: 102,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40, // Change the height to a numeric value
    // flex:1
    alignSelf: 'center',
  },

  buttonLabelSave: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Survey;
