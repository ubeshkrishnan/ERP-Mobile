import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuCard = ({ name, icon }) => {
  const navigation = useNavigation();

  return (

    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(name)}
    >
      <View style={styles.iconContainer}>
        <AntDesign name={icon} size={32} color="#111" />
      </View>
      <Text style={styles.cardText}>{name}</Text>
    </TouchableOpacity>
  );
};

const Dashboard = () => {
  const menuItems = [
    { name: 'TimeTable', icon: 'clipboard', color: 'red' },
    { name: 'Attendance', icon: 'hand-left', color: 'blue' },
    { name: 'Calendar', icon: 'calendar', color: 'green' },
    { name: 'Courses', icon: 'layers', color: 'yellow' },
    { name: 'Eschedule', icon: 'pencil' },
    { name: 'FeeDetails', icon: 'wallet' },
    { name: 'Library', icon: 'file-tray' },
    { name: 'Results', icon: 'trophy' },
    { name: 'Logout', icon: 'log-out' }, // Add the logout menu item
  ];

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.profileCard}>
          <View style={styles.circularProfile}>
            <Image
              source={require('../assets/profile.png')}
              style={styles.profilePicture}
            />
          </View>
          <Text style={styles.profileText}>Anish Krish</Text>
          <Text style={styles.studentId}>STD - 210003</Text>
        </View>
        <View style={styles.cardContainer}>
          {menuItems.map(item => (
            <MenuCard key={item.name} name={item.name} icon={item.icon} />
          ))}
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    marginTop: 0, // Change to 0
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0, // Take up the entire height
    height: '20%', // Adjust the height of the red background
    backgroundColor: '#0c46c3',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: -20,
    paddingVertical: 10,
    backgroundColor: '#FAFAFA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 10,
    width: '30%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#e5e5e5',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#111',
  },
  profileCard: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#f7f8f9',
    borderRadius: 10,
    marginBottom: 40,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    width: '90%', // Adjust the width as desired
    // height:'40%',
    alignSelf: 'center', // Center the profile card horizontally
  },
  circularProfile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    color: 'red'
  },
  profileText: {
    fontSize: 18,
    color: '#111',
    marginTop: 10,
    fontWeight: '900',
  },
  studentId: {
    fontSize: 14,
    color: 'grey',
    marginTop: 5,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,

  },
});

export default Dashboard;
