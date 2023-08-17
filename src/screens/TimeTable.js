import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();

const DayScreen = ({ route }) => {

  const { day } = route.params;
  // Customize the content for each day
  // You can fetch data or render specific components based on the day

  return (
    <View style={styles.dayContainer}>
      <Text style={{ color: 'black' }} >{day} Schedule</Text>
    </View>
  );
};

const DayButton = ({ day, onPress }) => (
  <TouchableOpacity
    style={styles.dayButton}
    onPress={onPress}
    activeOpacity={0.3} // This sets the opacity when pressed
  >
    <Text style={styles.dayButtonText}>{day}</Text>
  </TouchableOpacity>
);

const TimeTable = () => {
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <Stack.Navigator>
      <Stack.Screen name="TimeTable" options={{ headerShown: false }}>
        {({ navigation }) => (
          <View style={styles.container}>
            <View style={styles.daysOfWeekContainer}>
              {daysOfWeek.map((day, index) => (
                <DayButton
                  key={index}
                  day={day}
                  onPress={() => navigation.navigate('Day', { day })}
                />
              ))}
            </View>
          </View>
        )}
      </Stack.Screen>
      <Stack.Screen name="Day" component={DayScreen} />
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
    // Apply box shadow for a touchable effect (Android)
    elevation: 3,
    // Apply shadow for a touchable effect (iOS)
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
    justifyContent: 'center',
    color: 'black',
  },
});

export default TimeTable;
