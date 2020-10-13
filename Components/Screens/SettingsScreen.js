import * as React from 'react';
import {Text, View} from "react-native-web";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ScrollViewScreen from "../ScrollViewScreen";
import RegistrationForm from "../RegistrationForm";

export default function Settings() {
    return(
        <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Setting</Text>
        </View>
    );
}