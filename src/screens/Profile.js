import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    reg_No: '',
    gender: '',
    course: '',
    programme: '',
    mobile_no: '',
    address: '',
    email: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataFromStorage = await AsyncStorage.getItem('userData'); // Corrected key
        if (userDataFromStorage) {
          const parsedUserData = JSON.parse(userDataFromStorage);
          setUserData(parsedUserData);
          console.log('Retrieved user data:', parsedUserData);
        }
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>
          {userData.first_name} {userData.last_name}
        </Text>
        <Text style={styles.employeeId}>{userData.reg_No}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.card}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{userData.gender}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Course:</Text>
          <Text style={styles.value}>{userData.course}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Programme</Text>
          <Text style={styles.value}>{userData.programme}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Mobile No</Text>
          <Text style={styles.value}>{userData.mobile_no}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{userData.email}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#888',
  },
  employeeId: {
    fontSize: 16,
    color: '#888',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#888',
  },
  value: {
    color: '#555',
  },
});
