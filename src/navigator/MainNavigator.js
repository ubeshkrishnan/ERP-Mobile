// MainContainer.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Dashboard from "../screens/Dashboard";
import TimeTable from "../screens/TimeTable";
import Attendance from "../screens/Attendance";
import Calendar from "../screens/Calendar";
import Courses from "../screens/Course/Courses";
import Curriculum from "../screens/Curriculum/Curriculum";
import Eschedule from "../screens/E-schedule";
import FeeDetails from "../screens/FeeDetails";
import Library from "../screens/Library/Library";
import Results from "../screens/Results/Results";
import Profile from '../screens/Profile';

import Complete from '../screens/Course/Complete';
import Current from '../screens/Course/Current';
import Future from '../screens/Course/Future';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopBarNavigator() {
  return (
    <TopTab.Navigator
      screenOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 10 },
      }}
    >
      <TopTab.Screen
        name="Complete"
        component={Complete}
        options={{
          tabBarLabel: 'Complete',
        }}
      />
      <TopTab.Screen
        name="Current"
        component={Current}
        options={{
          tabBarLabel: 'Current',
        }}
      />
      <TopTab.Screen
        name="Future"
        component={Future}
        options={{
          tabBarLabel: 'Future',
        }}
      />
    </TopTab.Navigator>
  );
}

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';

            if (route.name === "TimeTable") {
              iconName = focused ? 'time' : 'time-outline';
            } else if (route.name === "Dashboard") {
              iconName = focused ? 'list' : 'list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;

          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
          showLabel: false,
        }}
      >

        <Tab.Screen name="TimeTable" component={TimeTable} />
        <Tab.Screen name="Attendance" component={Attendance} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Courses" component={TopBarNavigator} />
        <Tab.Screen name="Curriculum" component={Curriculum} />
        <Tab.Screen name="Eschedule" component={Eschedule} />
        <Tab.Screen name="FeeDetails" component={FeeDetails} />
        <Tab.Screen name="Library" component={Library} />
        <Tab.Screen name="Results" component={Results} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
