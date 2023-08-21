import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const Profile = () => {
 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>{userData.first_name} {userData.last_name}</Text>
        <Text style={styles.employeeId}>{userData.employee_id}</Text>
      </View>
      <View style={styles.body}>
      <View style={styles.card}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{userData.gender}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Region:</Text>
          <Text style={styles.value}>{userData.region_name}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Blood Group</Text>
          <Text style={styles.value}>{userData.blood_group}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{userData.phone_no}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{userData.address}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Designation:</Text>
          <Text style={styles.value}>
          {userData.designation}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

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
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
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


