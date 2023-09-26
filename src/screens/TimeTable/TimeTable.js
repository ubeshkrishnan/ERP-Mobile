import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../../Color';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import LessonPlan from './LesssonPlan';
import { Url } from '../../../Global_Variable/api_link';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const TopTabs = createMaterialTopTabNavigator();

const DayScreen = ({ route }) => {
  const { day } = route.params; // Removed schedules from destructuring
  const [loading, setLoading] = useState(true);
  const [daySchedule, setDaySchedule] = useState([]); // State for day's schedule
  console.log('daySchedule:', daySchedule);
  // Inside the DayScreen component
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

  useEffect(() => {
    // Check if schedules are available before rendering
    if (!route.params.schedules || route.params.schedules.length === 0) {
      setLoading(true); // Set loading to true if schedules are empty
    } else {
      // Find the schedule for the current day
      const currentDaySchedule = route.params.schedules.find(schedule => schedule.day === day);
      if (currentDaySchedule) {
        setDaySchedule(currentDaySchedule.schedule || []); // Set day's schedule
        setLoading(false); // Set loading to false when data is available
      } else {
        setLoading(true); // Set loading to true if schedule not found for the day
      }
    }
  }, [route.params.schedules, day]);

  if (loading) {
    return (
      <View style={styles.dayContainer}>
        <Text style={styles.schedule}>Loading...</Text>

      </View>
    );
  }

  return (
    <View style={styles.dayContainer}>
      <Text style={styles.schedule}>{day} - Schedule</Text>
      {daySchedule.map((event, index) => (
        <TouchableHighlight
          key={index}
          onPress={() => navigation.navigate('LessonPlan', { event })}
          underlayColor="#DDDDDD"
        >
          <View key={index} style={styles.eventCard}>
            <Text style={styles.eventTime}>Time: {event.hour_number}</Text>
            <Text style={styles.eventSubject}>Sub: {event.course_name}</Text>
            <Text style={styles.eventStaff}>Staff: {event.professorName}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const TimeTable = () => {
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
  const [batchId, setBatchId] = useState(null);
  const [degreeBranchId, setDegreeBranchId] = useState(null);
  const [section, setSection] = useState(null);
  const [currentSemester, setCurrentSemester] = useState(null);
  const startDate = '2022-12-26';
  const endDate = '2022-12-31';
  const [schedules, setSchedules] = useState([]); // Initialize schedules as an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the stored values from AsyncStorage
    const fetchDataFromStorage = async () => {
      try {
        const storedBatchId = await AsyncStorage.getItem('batch_id');
        const storedDegreeBranchId = await AsyncStorage.getItem('degree_branch_id');
        const storedSection = await AsyncStorage.getItem('section');
        const storedCurrentSemester = await AsyncStorage.getItem('current_semester');

        if (
          storedBatchId &&
          storedDegreeBranchId &&
          storedSection &&
          storedCurrentSemester
        ) {
          setBatchId(storedBatchId);
          setDegreeBranchId(storedDegreeBranchId);
          setSection(storedSection);
          setCurrentSemester(storedCurrentSemester);
          // setStartDate(storedStartDate);
          // setEndDate(storedEndDate);

          // Now you can fetch the schedules based on the retrieved data
          fetchDataForSchedules();
          console.log("loca", storedBatchId);
          console.log("loca", storedSection);
          console.log("loca", storedDegreeBranchId);
          //   console.log("loca", storedStartDate);
          // console.log("loca", storedEndDate);
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };

    fetchDataFromStorage();
  }, []);

  // Function to fetch schedules based on the retrieved data
  const fetchDataForSchedules = () => {
    fetch(
      Url +
      `/timetable?batch_id=${batchId}&degree_branch_id=${degreeBranchId}&section=${section}&current_semester=${currentSemester}&start_date=2022-12-26&end_date=2022-12-31`
    )
      .then((response) => {

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Process the data from the backend and set it in the state
        setSchedules(data); // Set schedules directly without spreading
        // console.log("Datasss", data)
        setLoading(false); // Set loading to false when data is available
      })
      .catch((error) => {
        console.error('Error fetching data from backend:', error);
      });
  };

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
          initialParams={{ day, schedules: ["...schedules"] }} // Pass the schedules as a parameter
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
