import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./Components/Screens/HomeScreen";
import Settings from "./Components/Screens/SettingsScreen";
import MyDataScreen from "./Components/Screens/MyDataScreen";
import SignUp from "./Components/SignUp/SignUp";


const Tab = createBottomTabNavigator();

function MyTabs() {
  return(
      <Tab.Navigator>
          <Tab.Screen name="Log in" component={SignUp}/>
          <Tab.Screen name="Session" component={HomeScreen}/>
          <Tab.Screen name="Data" component={MyDataScreen}/>
          <Tab.Screen name="Settings" component={Settings}/>
      </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

