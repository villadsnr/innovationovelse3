
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./Components/Screens/HomeScreen";
import Settings from "./Components/Screens/SettingsScreen";
import MyDataScreen from "./Components/Screens/MyDataScreen";
import SessionScreen from "./Components/Screens/SessionScreen";
import ScrollViewScreen from "./Components/ScrollViewScreen";
import StateButton from "./Components/StateEventHandlerComponent";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { AntDesign } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return(
      <Tab.Navigator>
        <Tab.Screen name="Session" component={HomeScreen}/>
        <Tab.Screen name="My Data" component={MyDataScreen}/>
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

