import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Dashboard from "../screens/Dashboard";
import Login from '../screens/Login/Login';
import TimeTable from "../screens/TimeTable/TimeTable";
import Attendance from "../screens/Attendance";
import Calendar from "../screens/Calendar";
import Complete from '../screens/Course/Complete';
import Current from '../screens/Course/Current';
import Future from '../screens/Course/Future';
import Curriculum from "../screens/Curriculum/Curriculum";
import Eschedule from "../screens/ExamSchedule.js/E-schedule";
import FeeDetails from "../screens/FeeDetails";
import Library from "../screens/Library/Library";
import Results from "../screens/Results/Results";
import Profile from '../screens/Profile';
import LessonPlan from '../screens/TimeTable/LesssonPlan'; // Replace with the correct path to your LessonPlan module
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderRightComponent from './HeaderRightComponent';


const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();



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
      <Tab.Screen name="TimeTable" component={TimeTable} />
    </TopTab.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ navigation, route }) => ({
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: true,
        tabBarStyle: {
          display: 'flex',
          backgroundColor: '#0c46c3',
        },
        tabBarLabelStyle: {
          color: 'grey',
        },
        headerStyle: {
          backgroundColor: '#0c46c3',
          borderBottomWidth: 0,
        },

        headerTintColor: 'white',
        headerRight: () => <HeaderRightComponent />,
        headerLeft: ({ canGoBack }) => (
          route.name !== 'Dashboard' && (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack(); // Go back to the previous screen
              }}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          )
        ),
      })}
    >

      <BottomTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
          tabBarLabel: 'Profile',
        }}
      />

      {/* <BottomTab.Screen
        name="TimeTable"
        component={TimeTable}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
          tabBarLabel: 'Timetable',
        }} DrawerNavigator
      /> */}
    </BottomTab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';
            if (route.name === 'TimeTable') {
              iconName = focused ? 'time' : 'time-outline';
            } else if (route.name === 'Dashboard') {
              iconName = focused ? 'list' : 'list-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerStyle: {
            backgroundColor: route.name === 'Dashboard' ? '#009FFF' : '#0c46c3',
            borderBottomWidth: 0,
          },
          headerTintColor: 'white',
          headerRight: () => <HeaderRightComponent />,
          headerBackTitleVisible: false,
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          showLabel: false,
        }}
      >
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
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
        <Stack.Screen name="LessonPlan" component={LessonPlan} options={{ title: 'Lesson-P' }}/>
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
