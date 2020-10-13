import * as React from 'react';
import {Text, View} from "react-native-web";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';



export default function MyDataScreen() {
    return(
        <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Data!, her skal der være en skærm ude i venstre side hvor man kan vælge mellem my data eller general data</Text>
        </View>
    );
}