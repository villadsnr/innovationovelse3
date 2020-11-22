import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ScrollView, Text, View,TouchableOpacity } from 'react-native';
import {createAppContainer} from "react-navigation";
import HomeScreen from "../SubScreens/HomeScreens";
import {createDrawerNavigator} from "react-navigation-drawer";
import ProfileScreen from "../SubScreens/ProfileScreen";
import PlatformScreen from "../SubScreens/PlatformScreen";
import Header from "../SubScreens/Header";
import AllSessions from "../SubScreens/AllSessions";


const MyDrawerNavigator = createDrawerNavigator({
    "Alkohol": {
        screen: HomeScreen,
    },
    "Rygning":{
      screen:AllSessions
    },
    "Tilføj forbrug":{
        screen:ProfileScreen
    },
    "Tilføj forbrug.":{
        screen:PlatformScreen
    }

});

const AppNav = createAppContainer(MyDrawerNavigator)

export default class App extends React.Component {
    render() {
        return (
            <AppNav/>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})


/*
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ScrollView, Text, View,TouchableOpacity } from 'react-native';
import {TextInput} from "react-native-web";



export default class App extends React.Component {
    render() {
        return (
            <View>
                <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center',border: 'dotted'}}>
                    <Text>You have been sober for:</Text>
                    <Text>3 days!</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});*/
