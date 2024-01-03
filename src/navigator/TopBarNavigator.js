import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TimeTable from '../screens/TimeTable/TimeTable';
import Colors from '../../Color';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TopBarNavigator = () => {
  const TimeTableStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="TimeTable"
        options={{
          headerLeft: () => null, // Remove the back button
          headerTitle: 'Time Table',
          headerTitleAlign: 'center',
        }}>
        {() => <TimeTable />}
      </Stack.Screen>
    </Stack.Navigator>
  );

  return (
    <TopTab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.LighBlueColor,
        inactiveTintColor: 'gray',
        labelStyle: {fontSize: 14, fontWeight: 'bold'},
        indicatorStyle: {backgroundColor: Colors.LighBlueColor},
      }}>
      <TopTab.Screen name="MON">{() => <TimeTableStack />}</TopTab.Screen>
      <TopTab.Screen name="TUE">{() => <TimeTableStack />}</TopTab.Screen>
      <TopTab.Screen name="WED">{() => <TimeTableStack />}</TopTab.Screen>
      <TopTab.Screen name="THU">{() => <TimeTableStack />}</TopTab.Screen>
      <TopTab.Screen name="FRI">{() => <TimeTableStack />}</TopTab.Screen>
    </TopTab.Navigator>
  );
};

export default TopBarNavigator;
