import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import SignUpForm from './SignUpForm';
import firebase from 'firebase';
import LoginForm from './LoginForm'
import ProfilScreen from './ProfilScreen'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class SignUp extends Component {
    state = {user:null}

    UNSAFE_componentWillMount(){
        const fireBaseConfig ={
            apiKey: "AIzaSyCSZ7E1KllQBWMjetSbqKmfW7_DdPtPYp4",
            authDomain: "ovelse5-ec2ee.firebaseapp.com",
            databaseURL: "https://ovelse5-ec2ee.firebaseio.com/",
            projectId: "ovelse5-ec2ee",
            storageBucket: "ovelse5-ec2ee.appspot.com",
            messagingSenderId: "734463752384",
            appId: "1:734463752384:web:1fc8dbf164eb8da1965525",
            measurementId: "G-RNNM8PEH2M"
        }
        // vigtigt at tilføje nedestående if statement, da ellers init firebase flere gange
        if (!firebase.apps.length) {
            firebase.initializeApp(fireBaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user });
        });
    }
    render() {
        const {user} = this.state

        if(!user){
            return (
                <View style={styles.container}>
                    <Text style={styles.paragraph}>
                        Opret eller Login med din firebase Email
                    </Text>
                    <Card>
                        <SignUpForm />
                    </Card>
                    <Card>
                        <LoginForm />
                    </Card>
                </View>
            )
        } else {
            return (

                <ProfilScreen user={user}/>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

/*
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
import SignUpForm from "./Components/SignUpForm";
import firebase from "firebase";


const Tab = createBottomTabNavigator();

function MyTabs() {
  return(
      <Tab.Navigator>
          <Tab.Screen name="Log in" component={SignUpForm}/>
        <Tab.Screen name="Session" component={HomeScreen}/>
        <Tab.Screen name="My Data2" component={MyDataScreen}/>
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
 */
