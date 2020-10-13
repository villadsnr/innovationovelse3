import * as React from 'react';
import {Text, View} from "react-native-web";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import StateButton from "../StateEventHandlerComponent";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import TabBarIcon from "@react-navigation/bottom-tabs/src/views/TabBarIcon";
import { AntDesign } from '@expo/vector-icons';
import ScrollViewScreen from "../ScrollViewScreen";

export default function HomeScreen() {
    return(
        <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="home" size={32} color="black"></Icon>
            <Text>Velkommen</Text>
            <ScrollViewScreen></ScrollViewScreen>
        </View>


    );
}