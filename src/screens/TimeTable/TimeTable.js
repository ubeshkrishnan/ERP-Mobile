import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Colors from '../../Color';
import {useNavigation} from '@react-navigation/native';

const TopTab = createMaterialTopTabNavigator();

const TimeTable = () => {
  const navigation = useNavigation();

  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

  const schedules = [
    {
      day: 'MON',
      schedule: [
        {time: '9:00 AM - 10:00 AM', subject: 'English', staff: 'Gokul P'},
        {time: '11:00 AM -  12:00 PM', subject: 'Maths', staff: 'Siva S'},
        {time: '12:30 PM -  1:00 PM', subject: 'Science', staff: 'Gokul S'},
        {time: '1:00 AM -  2:00 AM', subject: 'Social', staff: 'Kiruba P'},
        {time: '2:00 AM -  3:00 AM', subject: 'Economics', staff: 'Ganesh S'},
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
        <TopTab.Screen key={index} name={day}>
          {() => (
            <View style={styles.dayContainer}>
              <Text style={styles.schedule}>{day} Schedule</Text>
              {schedules
                .find(schedule => schedule.day === day)
                ?.schedule.map((event, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      // Use navigation to navigate to LessonPlan with the necessary params
                      navigation.navigate('LessonPlan', {
                        /* You can pass params here */
                      });
                    }}
                    style={styles.eventCard}>
                    <Text style={styles.eventTime}>Time : {event.time}</Text>
                    <Text style={styles.eventSubject}>
                      Sub : {event.subject}
                    </Text>
                    <Text style={styles.eventStaff}>Staff : {event.staff}</Text>
                  </TouchableOpacity>
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
    backgroundColor: 'white',
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
