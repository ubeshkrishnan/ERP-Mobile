import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../Color';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import LessonPlan from './LesssonPlan';

const Stack = createStackNavigator();
const TopTabs = createMaterialTopTabNavigator();

const DayScreen = ({ route }) => {
  const { day, schedules } = route.params;

  const daySchedule = schedules.find(schedule => schedule.day === day)?.schedule || [];

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ paddingLeft: 10 }}>
            <AntDesign name="arrowleft" size={32} color="#111" />
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const navigation = useNavigation();

  return (
    <View style={styles.dayContainer}>
      <Text style={styles.schedule}>{day} - Schedule</Text>
      {daySchedule.map((event, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('LessonPlan', { event })
          }
        >
          <View key={index} style={styles.eventCard}>
            <Text style={styles.eventTime}>Time: {event.time}</Text>
            <Text style={styles.eventSubject}>Sub: {event.subject}</Text>
            <Text style={styles.eventStaff}>Staff: {event.staff}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const TimeTable = () => {
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

  const schedules = [
    {
      day: 'MON',
      schedule: [
        { time: '9:00 AM - 10:00 AM', subject: 'English', staff: 'Gokul P' },
        { time: '11:00 AM -  12:00 AM', subject: 'Science', staff: 'Siva S' },
        { time: '1:00 PM -  2:00 PM', subject: 'Social', staff: 'Kiruba P' },
        { time: '3:00 PM -  4:00 PM', subject: 'Math', staff: 'Mohan S' },
      ],
    },

    {
      day: 'TUE',
      schedule: [
        { time: '10:30 AM - 11:30 AM', subject: 'Mathematics', staff: 'Krishnan D' },
        { time: '11:00 AM -  12:00 AM', subject: 'Science', staff: 'Siva S' },
        { time: '1:00 PM -  2:00 PM', subject: 'Social', staff: 'Kiruba P' },
        { time: '3:00 PM -  4:00 PM', subject: 'Math', staff: 'Mohan S' },
      ],
    },
    {
      day: 'WED',
      schedule: [
        { time: '10:30 AM -11:30 AM', subject: 'Science - I', staff: 'Gopal M' },
        { time: '11:00 AM -  12:00 AM', subject: 'Science', staff: 'Siva S' },
        { time: '1:00 PM -  2:00 PM', subject: 'Social', staff: 'Kiruba P' },
        { time: '3:00 PM -  4:00 PM', subject: 'Math', staff: 'Mohan S' },
      ],
    },
    {
      day: 'THU',
      schedule: [
        { time: '10:30 AM -  11:30 AM', subject: 'OP ', staff: 'Mohan L' },
        { time: '11:00 AM -  12:00 AM', subject: 'Science', staff: 'Siva S' },
        { time: '1:00 PM -  2:00 PM', subject: 'Social', staff: 'Kiruba P' },
        { time: '3:00 PM -  4:00 PM', subject: 'Math', staff: 'Mohan S' },
      ],
    },
    {
      day: 'FRI',
      schedule: [
        { time: '10:30 AM - 12:00 AM', subject: 'Designing', staff: 'Selva K' },
        { time: '11:00 AM -  12:00 AM', subject: 'Science', staff: 'Siva S' },
        { time: '1:00 PM -  2:00 PM', subject: 'Social', staff: 'Kiruba P' },
        { time: '3:00 PM -  4:00 PM', subject: 'Math', staff: 'Mohan S' },
      ],
    },
  ]

  return (
<TopTabs.Navigator
  screenOptions={{
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'gray',
    tabBarLabelStyle: {
      fontSize: 16,
      fontWeight: '900',
    },
    tabBarStyle: {
      backgroundColor: '#0c46c3',
    },
  }}
>
  {daysOfWeek.map((day, index) => (
    <TopTabs.Screen
      key={index}
      name={day}
      component={DayScreen}
      initialParams={{ day, schedules }}
      options={{ tabBarLabel: day }}
    />
  ))}
</TopTabs.Navigator>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25,
  },
  daysOfWeekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  dayButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    elevation: 3,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  dayButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  dayContainer: {
    flex: 1,
    alignItems: 'center',
    color: 'black',
  },
  backButton: {
    marginLeft: 10,
    fontSize: 15,
    color: 'black',
  },
  eventCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: 330,
    marginBottom: 15,
  },
  eventTime: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Colors.LighBlueColor
  },
  eventSubject: {
    fontSize: 16,
    marginBottom: 3,
    color: 'black'
  },
  eventStaff: {
    fontSize: 14,
    color: 'black',
  },
  schedule: {
    color: Colors.LighBlueColor,
    fontWeight: 'bold',
    margin: 20
  }
})

export default TimeTable;
