import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../Color';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import LessonPlan from './LesssonPlan';

const Stack = createStackNavigator();

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

  // Get the navigation object using useNavigation hook
  const navigation = useNavigation();

  return (
    <View style={styles.dayContainer}>
      <Text style={styles.schedule}>{day} - Schedule</Text>
      {daySchedule.map((event, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('LessonPlan', { event }) // Navigate to LessonPlan with event data
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

const DayButton = ({ day, onPress }) => (
  <TouchableOpacity
    style={styles.dayButton}
    onPress={onPress}
    activeOpacity={0.3}
  >
    <Text style={styles.dayButtonText}>{day}</Text>
  </TouchableOpacity>
);

const TimeTable = () => {
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
  const today = new Date().toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();

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
        { time: '10:30 AM', subject: 'Designing', staff: 'Selva K' },
        { time: '11:00 AM -  12:00 AM', subject: 'Science', staff: 'Siva S' },
        { time: '1:00 PM -  2:00 PM', subject: 'Social', staff: 'Kiruba P' },
        { time: '3:00 PM -  4:00 PM', subject: 'Math', staff: 'Mohan S' },
      ],
    },
  ];
  // Initialize the selected day state with 'MON'
  const [selectedDay, setSelectedDay] = useState(today);
  return (
    <Stack.Navigator>
      <Stack.Screen name="TimeTableScreen" options={{ headerShown: false }}>
        {({ navigation }) => (
          <View style={styles.container}>
            <View style={styles.daysOfWeekContainer}>
              {daysOfWeek.map((day, index) => (
                <DayButton
                  key={index}
                  day={day}
                  onPress={() => {
                    setSelectedDay(day);
                    navigation.navigate('Day', { day, schedules });
                  }}
                />
              ))}
            </View>
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen name="Day" component={DayScreen} initialParams={{ day: selectedDay, schedules }} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: 'center',
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
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
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
    color: Colors.LighBlueColor
  },
  eventSubject: {
    fontSize: 16,
    marginBottom: 3,
    color: 'grey'
  },
  eventStaff: {
    fontSize: 14,
    color: 'gray',
  },
  schedule: {
    color: Colors.LighBlueColor,
    fontWeight: 'bold',
    marginTop: 20
  }
});

export default TimeTable;
