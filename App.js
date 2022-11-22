import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarItem } from "react-native-tab-view";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions } from "@react-navigation/native";

import Home from "./src/Navigation/Bottom/Home";
import Contact from "./src/Navigation/Bottom/Contact";
import Profile from "./src/Navigation/Bottom/Profile";
import Recent from "./src/Navigation/Bottom/Recent";
import Exam from "./src/Navigation/Bottom/Exam";
import Subscription from "./src/Navigation/Drawer/Subscription";
import Logout from "./src/Navigation/Drawer/Logout";
import ExamCorner from "./src/Navigation/Drawer/ExamCorner";
import Analytics from "./src/Navigation/Drawer/Analytics";
import Downloads from "./src/Navigation/Drawer/Downloads";
import DrawerContent from "./src/Navigation/Drawer/DrawerContent";
import Notifications from "./src/Navigation/Drawer/Notifications";
import Referrals from "./src/Navigation/Drawer/Referrals";
import Shareapp from "./src/Navigation/Drawer/Shareapp";
import Course from "./src/Course";
import Resources from "./src/Navigation/Top/Resources";
import Videos from "./src/Navigation/Top/Videos";
import ChapterTest from "./src/Navigation/Top/ChapterTest";
import QnBank from "./src/Navigation/Top/QnBank";
import Apptour from './src/Apptour'
import Register from "./src/Register";
import Otp from './src/Otp';
import Student from './src/Student';
import School from './src/School'


const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Otp"
        component={Otp}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="Student"
        component={Student}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="School"
        component={School}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="Apptour"
        component={Apptour}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="Bottom"
        component={MyBottom}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='Course'
        component={Course}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="TopTab"
        component={MyTopTab}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  )

}

function MyTopTab({ navigation }) {
  return (
    <><View style={{
      width: '100%',
      height: 200,
      backgroundColor: '#003333'
    }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <Icon name='arrow-back-ios' size={25} color='green' style={{ marginLeft: 50, marginTop: 40 }}
            onPress={() => navigation.navigate('Course')}></Icon></TouchableOpacity>
        <Text style={{ fontSize: 20, color: 'white', marginLeft: 100, marginTop: 40 }}>Biology</Text>
      </View>
      <Text style={{ fontSize: 19, color: 'white', marginLeft: 50, marginTop: 20, fontWeight: 'bold' }}> Long Chapter name can</Text>
      <Text style={{ fontSize: 19, color: 'white', marginLeft: 50, marginTop: 5, fontWeight: 'bold' }}> be shown here.</Text>
      <View style={{ flexDirection: 'row' }}>
        <Icon name='radio-button-checked' color='green' size={15} style={{ marginLeft: 50, marginTop: 5 }}></Icon>
        <Text style={{ color: 'green', fontSize: 10, fontWeight: 'bold', marginTop: 5 }}> Chapter 1</Text>
        <Icon name='radio-button-checked' color='green' size={15} style={{ marginLeft: 25, marginTop: 5 }}></Icon>
        <Text style={{ color: 'green', fontSize: 10, fontWeight: 'bold', marginTop: 5 }}> 3 parts</Text>
      </View>
    </View>
      <TopTab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 11, fontWeight: 'bold' },
          tabBarStyle: { color: 'grey' },
          tabBarItemStyle: { width: 100, backgroundColor: '#003333' }
        }}>
        <TopTab.Screen
          name="Videos"
          component={Videos}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
          }} />
        <TopTab.Screen
          name="Chapter Test"
          component={ChapterTest}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
          }} />
        <TopTab.Screen
          name="Resources"
          component={Resources}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
          }} />
        <TopTab.Screen
          name="QnBank"
          component={QnBank}
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
          }} />
      </TopTab.Navigator></>
  )
}
function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent{...props} />}>

      <Drawer.Screen
        name="Home"
        component={Home}
      // options={{headerShown:false}}
      />
      <Drawer.Screen
        name="ExamCorner"
        component={ExamCorner}
      />
      <Drawer.Screen
        name="Subscription"
        component={Subscription} />
      <Drawer.Screen
        name="Analytics"
        component={Analytics} />
      <Drawer.Screen
        name="Downloads"
        component={Downloads} />
      <Drawer.Screen
        name="Notifications"
        component={Notifications} />
      <Drawer.Screen
        name="Referrals"
        component={Referrals} />
      <Drawer.Screen
        name="Shareapp"
        component={Shareapp} />
      <Drawer.Screen
        name="Logout"
        component={Logout} />
    </Drawer.Navigator>
  )
}
function MyBottom() {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 10 },
        tabBarStyle: { color: 'grey' },
        tabBarItemStyle: { width: 100 }
      }}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='home' size={24} color='green' /> : <Icon name='home' size={24} color='grey' />
        }} />
      <Bottom.Screen
        name="Recent"
        component={Recent} options={{
          headerShown: false,
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='play-arrow' size={24} color='green' /> : <Icon name='play-arrow' size={24} color='grey' />
        }}
        onPress={() => this.props.navigation.navigate('Profile')} />

      <Bottom.Screen
        name="Exam"
        component={Exam} options={{
          headerShown: false,
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='description' size={24} color='green' /> : <Icon name='description' size={24} color='grey' />
        }} />

      <Bottom.Screen
        name="Profile"
        component={Profile} options={{
          headerShown: false,
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='person' size={24} color='green' /> : <Icon name='person' size={24} color='grey' />
        }} />

      <Bottom.Screen
        name="Contact"
        component={Contact} options={{
          headerShown: false,
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarIcon: ({ focused }) =>
            focused ? <Icon name='contact-phone' size={24} color='green' /> : <Icon name='contact-phone' size={24} color='grey' />
        }} />

    </Bottom.Navigator>
  )
}

export default function App() {
  return (
    <><NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </>
  )
}