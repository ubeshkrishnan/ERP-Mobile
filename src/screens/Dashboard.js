import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuCard = ({ name, icon, backgroundColor, iconColor }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(name)}
    >
      <View
        style={[
          styles.iconContainer,
          { backgroundColor }, // Set the background color here
        ]}
      >
        <Icon name={icon} size={32} color={iconColor} />
      </View>
      <Text style={styles.cardText}>{name}</Text>
    </TouchableOpacity>
  );
};

const Dashboard = () => {
  const menuItems = [
    { name: 'TimeTable', icon: 'clipboard', backgroundColor: '#E65100', iconColor: 'white' },
    { name: 'Attendance', icon: 'hand-left', backgroundColor: '#3949AB', iconColor: 'white' },
    { name: 'Calendar', icon: 'calendar', backgroundColor: 'green', iconColor: 'white' },
    { name: 'Courses', icon: 'layers', backgroundColor: '#3949AB', iconColor: 'white' },
    { name: 'Eschedule', icon: 'pencil', backgroundColor: 'orange', iconColor: 'white' },
    { name: 'FeeDetails', icon: 'wallet', backgroundColor: 'purple', iconColor: 'white' },
    { name: 'Library', icon: 'file-tray', backgroundColor: 'brown', iconColor: 'white' },
    { name: 'Results', icon: 'trophy', backgroundColor: 'green', iconColor: 'white' },
    { name: 'Cafeteria', icon: 'fast-food', backgroundColor: '#4527A0', iconColor: 'white' },
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
            <MenuCard
              key={item.name}
              name={item.name}
              icon={item.icon}
              backgroundColor={item.backgroundColor}
              iconColor={item.iconColor}
            />
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
