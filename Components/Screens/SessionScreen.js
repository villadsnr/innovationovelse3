import * as React from 'react';
import {Text, View} from "react-native-web";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import StateButton from "../StateEventHandlerComponent";



export default function SessionScreen() {
    return(
        <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center', border: 'dotted'}}>
            <Text>Session, her skal der være kamera funktion, som kan tage billede af genstanden</Text>
            <StateButton></StateButton>
        </View>
    );
}