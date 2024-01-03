// YourComponent.js
import React from 'react';
import {View} from 'react-native';
import Survey from './Survey'; // Adjust the path based on your project structure

const YourComponent = () => {
  return (
    <View>
      <Survey
        batch="2022"
        semester="Spring"
        degree="Bachelor of Science"
        branch="Computer Science"
        surveyName="Student Feedback"
        startDate="2022-01-01"
        endDate="2022-01-31"
        completedDate="2022-02-15"
        status="Completed"
      />
    </View>
  );
};

export default YourComponent;
