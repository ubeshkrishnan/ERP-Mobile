import React, {useState, useEffect} from 'react';
import {Drawer} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const items = [
  {label: 'Transport', key: 'first'},
  {label: 'Hostel', key: 'second'},
  // Add more items as needed
];

const MyComponent = () => {
  const [active, setActive] = React.useState('');
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Define an array of keys you want to retrieve from AsyncStorage
        const AsyncStorageKeys = ['first_name', 'last_name'];

        // Use Promise.all to retrieve multiple values from AsyncStorage
        const retrievedData = await Promise.all(
          AsyncStorageKeys.map(async key => {
            const value = await AsyncStorage.getItem(key);
            return [key, value];
          }),
        );

        // Construct the user data object from retrieved values
        const userDataObject = {};
        retrievedData.forEach(([key, value]) => {
          if (value !== null) {
            userDataObject[key] = value;
          }
        });

        setUserData(userDataObject);
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Drawer.Section
      title={`Hi, ${userData.first_name}`}
      titleStyle={{fontSize: 22}}>
      {items.map(item => (
        <Drawer.Item
          key={item.key}
          label={item.label}
          active={active === item.key}
          onPress={() => setActive(item.key)}
        />
      ))}
    </Drawer.Section>
  );
};

export default MyComponent;
