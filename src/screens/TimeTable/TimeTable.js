import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
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
        {
          time: '9:00 AM - 10:00 AM',
          subject: 'English',
          staff: 'Gokul P',
          Subcode: 'ENH001',
        },
        {
          time: '11:00 AM -  12:00 PM',
          subject: 'Maths',
          staff: 'Siva S',
          Subcode: 'MAT002',
        },
        {
          time: '12:30 PM -  1:00 PM',
          subject: 'Science',
          staff: 'Gokul S',
          Subcode: 'SCI001',
        },
        {
          time: '1:00 AM -  2:00 AM',
          subject: 'Social',
          staff: 'Kiruba P',
          Subcode: 'SOC0032',
        },
        {
          time: '2:00 AM -  3:00 AM',
          subject: 'Economics',
          staff: 'Ganesh S',
          Subcode: 'ECO212',
        },
      ],
    },
    {
      day: 'TUE',
      schedule: [
        {
          time: '10:30 AM - 11:30 AM',
          subject: 'Mathematics',
          staff: 'Krishnan D',
          Subcode: 'MAT0012',
        },
      ],
    },
    {
      day: 'WED',
      schedule: [
        {
          time: '10:30 AM -11:30 AM',
          subject: 'Science - I',
          staff: 'Gopal M',
          Subcode: 'SCI0012',
        },
      ],
    },
    {
      day: 'THU',
      schedule: [
        {
          time: '10:30 AM -  11:30 AM',
          subject: 'OP ',
          staff: 'Mohan L',
          Subcode: 'OP231',
        },
      ],
    },
    {
      day: 'FRI',
      schedule: [
        {
          time: '10:30 AM',
          subject: 'Designing',
          staff: 'Selva K',
          Subcode: 'DES123',
        },
      ],
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
          {() => {
            return (
              <ScrollView contentContainerStyle={styles.dayContainer}>
                <Text style={styles.schedule}>{day} - Schedule</Text>
                {schedules
                  .find(schedule => schedule.day === day)
                  ?.schedule.map((event, index) => {
                    const totalClasses = 24;
                    const attendedClasses = 18;
                    const attendancePercentage =
                      (attendedClasses / totalClasses) * 100;

                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          navigation.navigate('LessonPlan', {
                            /* You can pass params here */
                          });
                        }}
                        style={styles.eventCard}>
                        <Text style={styles.eventTime}>
                          Time : {event.time}
                        </Text>
                        <Text style={styles.eventSubject}>
                          Sub : {event.subject}
                        </Text>
                        <Text style={styles.eventStaff}>
                          Staff : {event.staff}
                        </Text>
                        <Text style={styles.eventStaff}>
                          Sub Code : {event.Subcode}
                        </Text>
                        <Text style={styles.eventTotalclass}>
                          Total Classes - {totalClasses} | Attended Classes -{' '}
                          {attendedClasses}
                        </Text>

                        <View style={styles.eventAttendanceContainer}>
                          <View style={styles.circle}>
                            <Text style={styles.eventAttendanceText}>
                              {attendancePercentage.toFixed(2)}%
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
              </ScrollView>
            );
          }}
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
    marginBottom: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: '95%',
    height: 'auto',
    marginTop: 20,
  },
  eventTime: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: Colors.labelFontBlackColor,
  },
  eventSubject: {
    fontSize: 17,
    marginBottom: 3,
    color: Colors.labelFontBlackColor,
    fontWeight: '400',
  },
  eventStaff: {
    fontSize: 17,
    color: Colors.labelFontBlackColor,
    fontWeight: '400',
  },
  schedule: {
    color: Colors.LighBlueColor,
    fontWeight: 'bold',
    marginTop: 20,
  },
  eventTotalclass: {
    color: Colors.LighBlueColor,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  eventAttendanceContainer: {
    position: 'absolute',
    top: '50%', // Center vertically
    right: 20, // Align to the right
    transform: [{translateY: -25}], // Adjust vertically to center the circle
  },

  eventAttendanceText: {
    fontWeight: '600',
    color: 'black',
  },
  circle: {
    height: Dimensions.get('window').width * 0.17,
    width: Dimensions.get('window').width * 0.17,
    borderRadius: (Dimensions.get('window').width * 0.3) / 2,
    borderWidth: 4, // Border width
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00FF00',
  },
});

export default TimeTable;
