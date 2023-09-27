import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CardResult from './CardResults'; // Correct import statement
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Url } from '../../../Global_Variable/api_link';

const Result = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [registerNo, setRegisterNo] = useState(null);

  useEffect(() => {
    // Fetch the stored values from AsyncStorage
    const fetchDataFromStorage = async () => {
      try {
        const storedRegisterNo = await AsyncStorage.getItem('register_number');

        if (storedRegisterNo) {
          setRegisterNo(storedRegisterNo);
          // Now you can fetch the data from the API using the retrieved values
          fetchResultData(storedRegisterNo);
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchDataFromStorage();
  }, []);

  const fetchResultData = (registerNo) => {
    // Fetch data from the API dynamically
    fetch(`${Url}/e_result?register_number=${registerNo}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the fetched data
        setIsLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false in case of an error
      });
  };

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
