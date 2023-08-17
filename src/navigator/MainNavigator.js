import "react-native-gesture-handler";
import { View, Text, Image, focused } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import TimeTable from "../screens/TimeTable";
import Attendance from "../screens/Attendance";
import Calendar from "../screens/Calendar";
import Courses from "../screens/Courses";
import Curriculum from "../screens/Curriculum";
import Eschedule from "../screens/E-schedule";
import FeeDetails from "../screens/FeeDetails";
import Library from "../screens/Library";
import Results from "../screens/Results";
import Dashboard from "../screens/Dashboard";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MenuCard = ({ navigation, name, icon }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(name)}
    >
      <AntDesign name={icon} size={24} color="#111" />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1
                  }}
                >
                  {/* <Image
                    source={User}
                    style={{
                      height: 130,
                      width: 130,
                      borderRadius: 65
                    }}
                  /> */}
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 6,
                      fontWeight: "bold",
                      color: "#111"
                    }}
                  >Welcome !</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#111"
                    }}
                  >Student</Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "#111"
          }
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          options={{
            drawerLabel: "Dashboard",
            // title: "Dashboard",
            drawerIcon: ({ focused, color, size }) => (
              <AntDesign
                name={focused ? 'infocirlce' : 'infocirlceo'} // You can set the desired icon name here
                size={size}
                color={color}
              />
            ),
          }}
          component={Dashboard}
        />

        <Drawer.Screen
          name="TimeTable"
          options={{
            drawerLabel: "TimeTable",
            title: "TimeTable",
            drawerIcon: ({ focused, color, size }) => (
              <AntDesign
                name={focused ? 'infocirlce' : 'infocirlceo'} // You can set the desired icon name here
                size={size}
                color={color}
              />
            ),
          }}
          component={TimeTable}
        />
        <Drawer.Screen
          name="Attendance"
          options={{
            drawerLabel: "Attendance",
            title: "Attendance",
            drawerIcon: ({ focused, color, size }) => (
              <AntDesign
                name={focused ? 'infocirlce' : 'infocirlceo'} // You can set the desired icon name here
                size={size}
                color={color}
              />
            ),
          }}
          component={Attendance}
        />

        <Drawer.Screen
          name="Calendar"
          options={{
            drawerLabel: "Calendar",
            title: "Calendar",
            drawerIcon: ({ focused, color, size }) => (
              <AntDesign
                name={focused ? 'infocirlce' : 'infocirlceo'} // You can set the desired icon name here
                size={size}
                color={color}
              />
            ),
          }}
          component={Calendar}
        />

        <Drawer.Screen
          name="Courses"
          options={{
            drawerLabel: "Courses",
            title: "Courses",
            drawerIcon: ({ focused, color, size }) => (
              <AntDesign
                name={focused ? 'infocirlce' : 'infocirlceo'} // You can set the desired icon name here
                size={size}
                color={color}
              />
            ),
          }}
          component={Courses}
        />
        <Drawer.Screen
          name="Curriculum"
          options={{
            drawerLabel: "Curriculum",
            title: "Curriculum",
            drawerIcon: ({ focused, color, size }) => (
              <AntDesign
                name={focused ? 'infocirlce' : 'infocirlceo'} // You can set the desired icon name here
                size={size}
                color={color}
              />
            ),
          }}
          component={Curriculum}
        />
        <Drawer.Screen
          name="Eschedule"
          options={{
            drawerLabel: "Eschedule",
            title: "Eschedule",
            drawerIcon: ({ focused, color, size }) => (
              <AntDesign
                name={focused ? 'infocirlce' : 'infocirlceo'} // You can set the desired icon name here
                size={size}
                color={color}
              />
            ),
          }}
          component={Eschedule}
        />

        <Drawer.Screen
          name="FeeDetails"
          options={{
            drawerLabel: "FeeDetails",
            title: "FeeDetails",
            drawerIcon: ({ focused, color, size }) => (
              <AntDesign
                name={focused ? 'infocirlce' : 'infocirlceo'} // You can set the desired icon name here
                size={size}
                color={color}
              />
            ),
          }}
          component={FeeDetails}
        />

        <Drawer.Screen
          name="Library"
          options={{
            drawerLabel: "Library",
            title: "Library",
            drawerIcon: ({ focused, color, size }) => (
              <AntDesign
                name={focused ? 'infocirlce' : 'infocirlceo'} // You can set the desired icon name here
                size={size}
                color={color}
              />
            ),
          }}
          component={Library}
        />
        <Drawer.Screen
          name="Results"
          options={{
            drawerLabel: "Results",
            title: "Results",
            drawerIcon: ({ focused, color, size }) => (
              <AntDesign
                name={focused ? 'infocirlce' : 'infocirlceo'} // You can set the desired icon name here
                size={size}
                color={color}
              />
            ),
          }}
          component={Results}
        />


      </Drawer.Navigator>
    </NavigationContainer>
  );
}