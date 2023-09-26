import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CardResult from './CardResults'; // Correct import statement
import { Url } from '../../../Global_Variable/api_link';

const Result = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Replace '211CS001' with the actual register_number you want to fetch
    const registerNumber = '211CS001';
    // Construct the URL with the register_number
    const apiUrl = `${Url}/e_result?register_number=${registerNumber}`;

    // Fetch data from the API dynamically
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the fetched data
        setIsLoading(false); // Set loading to false
        // console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <ScrollView>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        data.map((item, index) => (
          <CardResult
            key={`${item.assessment_id}-${index}`} // Combine assessment_id with index for uniqueness
            title={`${item.course_code}`}
            description={`Student Name: ${item.student_name}\nRegulation: ${item.regulation}\nExternal : ${item.external}\nInternal : ${item.internal}\nTotal : ${item.total}`}
            register_number={item.register_number}
          />
        ))
      )}

    </ScrollView>
  );

};

export default Result;
