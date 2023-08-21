import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from "../screens/Dashboard";
import TimeTable from "../screens/TimeTable";
import Attendance from "../screens/Attendance";
import Calendar from "../screens/Calendar";
import Complete from '../screens/Course/Complete';
import Current from '../screens/Course/Current';
import Future from '../screens/Course/Future';
import Curriculum from "../screens/Curriculum/Curriculum";
import Eschedule from "../screens/E-schedule";
import FeeDetails from "../screens/FeeDetails";
import Library from "../screens/Library/Library";
import Results from "../screens/Results/Results";
import Profile from '../screens/Profile';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const BottomTab = createBottomTabNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const headerRightComponent = () => (
  <Ionicons
    name="notifications-outline"
    size={24}
    color="white"
    style={{ marginRight: 15 }}
  />
);

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

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        showLabel: false,
      }}
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
    >
      <BottomTab.Screen
        name="MainContainer"
        component={MainContainer}
        options={{ tabBarLabel: 'Home' }}
      />
     <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarLabel: 'Profile' }}
      />
    </BottomTab.Navigator>
  );
}

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
          headerStyle: {
            backgroundColor: '#0c46c3',
            borderBottomWidth: 0,
          },
          headerTintColor: 'white',
          headerRight: headerRightComponent,
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          showLabel: false,
        }}
      >
        <Stack.Screen
          name="TimeTable"
          component={TimeTable}
          options={{
            headerShown: true,
            title: 'Time Table'
          }}
        />
        <Stack.Screen
          name="Attendance"
          component={Attendance}
          options={{ title: 'Attendance' }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{ title: 'Calendar' }}
        />
        <Stack.Screen name="Courses" component={TopBarNavigator} options={{ title: 'Course' }} />
        <Stack.Screen name="Curriculum" component={Curriculum} />
        <Stack.Screen name="Eschedule" component={Eschedule} />
        <Stack.Screen name="FeeDetails" component={FeeDetails} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="Profile" component={Profile} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
