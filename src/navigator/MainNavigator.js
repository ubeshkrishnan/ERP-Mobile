import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login/Login';
import TimeTable from '../screens/TimeTable/TimeTable';
import Attendance from '../screens/Attendance';
import Calendar from '../screens/Calendar';
import Complete from '../screens/Course/Complete';
import Current from '../screens/Course/Current';
import Future from '../screens/Course/Future';
import Eschedule from '../screens/ExamSchedule.js/E-schedule';
import FeeDetails from '../screens/FeeDetails';
import Library from '../screens/Library/Library';
import Results from '../screens/Results/Results';
import Profile from '../screens/Profile';
import LessonPlan from '../screens/TimeTable/LesssonPlan';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HeaderRightComponent from './HeaderRightComponent';
import Courses from '../screens/Course/Courses';
import Cafeteria from '../screens/Cafeteria';
import CustomDrawerContent from './CustomDrawerContent';
import {Text} from 'react-native-paper';
import Miscellaneous from '../screens/Miscellaneous/Miscellaneous';
import PersonalInfo from '../screens/Miscellaneous/PersonalInfo';
import EducationDetail from '../screens/Miscellaneous/EducationDetail';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TopBarNavigator() {
  return (
    <TopTab.Navigator
      screenOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {fontSize: 10},
      }}>
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
      {/* <TopTab.Screen name="TimeTable" component={Courses} /> */}
    </TopTab.Navigator>
  );
}

function MiscellaneousTopBarNavigator() {
  return (
    <TopTab.Navigator
      screenOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {fontSize: 10},
      }}>
      <TopTab.Screen
        name="Miscellaneous"
        component={Miscellaneous}
        options={{
          tabBarLabel: 'Miscellaneous',
        }}
      />
      <TopTab.Screen
        name="PersonalInfo"
        component={PersonalInfo}
        options={{
          tabBarLabel: 'Personal Info',
        }}
      />
      <TopTab.Screen
        name="EducationDetails"
        component={EducationDetail}
        options={{
          tabBarLabel: 'Education Details',
        }}
      />
    </TopTab.Navigator>
  );
}

function BottomTabNavigator({navigation}) {
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, you can clear user authentication state and navigate to the login screen
    // You should replace the following lines with your actual logout code
    console.log('Logout button pressed');
    navigation.navigate('Login'); // Navigate to the login screen
  };

  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
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
        headerBackTitleVisible: false,
        headerRight: () => (
          <View style={{marginRight: 40}}>
            <TouchableOpacity onPress={handleLogout}>
              {/* <Text style={{fontSize:16}}>LogOut</Text> */}
              <AntDesign name="logout" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ),
      })}>
      <BottomTab.Screen
        name="Welcome !"
        component={Dashboard}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />

      <BottomTab.Screen
        name="Drawer"
        component={CustomDrawerContent}
        options={{
          title: 'Menu',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="menu" size={size} color={color} />
          ),
          tabBarLabel: 'Menu',
        }}
      />
    </BottomTab.Navigator>
  );
}

// Define your MainContainer using Stack Navigator
function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login" // Set the initial route to BottomTabNavigator
        screenOptions={({route}) => ({
          headerStyle: {
            backgroundColor:
              route.name === 'DashboardStack' ? '#0c46c3' : '#0c46c3',
            borderBottomWidth: 0,
          },
          headerTintColor: 'white',
          headerBackTitleVisible: false,
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          showLabel: false,
        }}>
        <Stack.Screen
          name="DashboardStack"
          component={BottomTabNavigator}
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
        {/* <Stack.Screen
      name="Drawer"
      component={DrawerNavigator}
      options={{
        headerShown: false,
      }}
    /> */}
        <Stack.Screen
          name="Attendance"
          component={Attendance}
          options={{title: 'Attendance', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{
            title: 'Calendar',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LessonPlan"
          component={LessonPlan}
          options={{title: 'Lesson-P'}}
        />
        <Stack.Screen
          name="Courses"
          component={TopBarNavigator}
          options={{title: 'Course', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Miscellaneous"
          component={MiscellaneousTopBarNavigator}
          options={{
            title: 'Miscellaneous',
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name="Eschedule"
          component={Eschedule}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="FeeDetails"
          component={FeeDetails}
          options={{title: 'Fee Details', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Library"
          component={Library}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Results"
          component={Results}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="TimeTable"
          component={TimeTable}
          options={{title: 'Time Table', headerTitleAlign: 'center'}}
        />
        <Stack.Screen name="Cafeteria" component={Cafeteria} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
