import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@ant-design/icons-react-native';
const Stack = createStackNavigator();

const DayScreen = ({ route, navigation }) => {
  const { day } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>===</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.dayContainer}>
      <Text style={{ color: 'black' }}>{day} Schedule</Text>
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
    justifyContent: 'center',
    color: 'black',
  },
  backButton: {
    marginLeft: 10,
    fontSize: 15,
    color: 'black',
  },
});

export default TimeTable;
