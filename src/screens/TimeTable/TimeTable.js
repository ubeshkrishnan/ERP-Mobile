import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '../../Color';

const TopTab = createMaterialTopTabNavigator();

const TimeTable = () => {
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

  const schedules = [
    {
      day: 'MON',
      schedule: [
        {time: '9:00 AM - 10:00 AM', subject: 'English', staff: 'Gokul P'},
        {time: '11:00 AM -  12:00 AM', subject: 'Science', staff: 'Siva S'},
      ],
    },
    {
      day: 'TUE',
      schedule: [
        {
          time: '10:30 AM - 11:30 AM',
          subject: 'Mathematics',
          staff: 'Krishnan D',
        },
      ],
    },
    {
      day: 'WED',
      schedule: [
        {time: '10:30 AM -11:30 AM', subject: 'Science - I', staff: 'Gopal M'},
      ],
    },
    {
      day: 'THU',
      schedule: [
        {time: '10:30 AM -  11:30 AM', subject: 'OP ', staff: 'Mohan L'},
      ],
    },
    {
      day: 'FRI',
      schedule: [{time: '10:30 AM', subject: 'Designing', staff: 'Selva K'}],
    },
  ];

  return (
    <TopTab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.LighBlueColor,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},
        tabBarIndicatorStyle: {backgroundColor: Colors.LighBlueColor},
      })}>
      {daysOfWeek.map((day, index) => (
        <TopTab.Screen
          key={index}
          name={day}
          // Use children prop instead of component
        >
          {() => (
            <View style={styles.dayContainer}>
              <Text style={styles.schedule}>{day} Schedule</Text>
              {schedules
                .find(schedule => schedule.day === day)
                ?.schedule.map((event, index) => (
                  <View key={index} style={styles.eventCard}>
                    <Text style={styles.eventTime}>Time : {event.time}</Text>
                    <Text style={styles.eventSubject}>
                      Sub : {event.subject}
                    </Text>
                    <Text style={styles.eventStaff}>Staff : {event.staff}</Text>
                  </View>
                ))}
            </View>
          )}
        </TopTab.Screen>
      ))}
    </TopTab.Navigator>
  );
};

const styles = StyleSheet.create({
  dayContainer: {
    flex: 1,
    alignItems: 'center',
    color: 'black',
  },
  eventCard: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: '80%',
    height: 'auto',
    marginTop: 30,
  },
  eventTime: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Colors.LighBlueColor,
  },
  eventSubject: {
    fontSize: 16,
    marginBottom: 3,
    color: 'grey',
  },
  eventStaff: {
    fontSize: 14,
    color: 'gray',
  },
  schedule: {
    color: Colors.LighBlueColor,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default TimeTable;
