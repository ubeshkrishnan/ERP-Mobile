import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const MenuCard = ({ name, icon }) => { // Change 'name' prop to 'name'
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
    { name: 'TimeTable', icon: 'infocirlce' },
    { name: 'Attendance', icon: 'infocirlce' },
    { name: 'Calendar', icon: 'calendar' },
    { name: 'Courses', icon: 'infocirlce' },
    { name: 'Curriculum', icon: 'infocirlce' },
    { name: 'Eschedule', icon: 'infocirlce' },
    { name: 'FeeDetails', icon: 'infocirlce' },
    { name: 'Library', icon: 'infocirlce' },
    { name: 'Results', icon: 'infocirlce' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {menuItems.map(item => (
          <MenuCard key={item.name} name={item.name} icon={item.icon} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4', // Set your desired background color
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white', // Customize the color
    borderRadius: 8,
    marginVertical: 10,
    width: '30%',
  },
  iconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#e5e5e5', // Set your desired background color for the icon container
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#111', // Set your desired text color
  },
});

export default Dashboard;
