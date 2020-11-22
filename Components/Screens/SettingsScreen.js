import * as React from 'react';
import {CheckBox, Text, TextInput, View} from "react-native-web";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ScrollViewScreen from "../ScrollViewScreen";
import {RadioButton} from "react-native-paper";


export default function Settings() {
    return(
        <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center',border: 'dotted'}}>
                <Text style={{ fontSize: 50, textAlign:'center',paddingTop:40 }}>ALKOLYSE</Text>
            <Text style={{fontsize: 15, padding: 30}}>Indtast dine oplysninger korrekt, da de bruges til dine egne personlige alkoholanalyser</Text>
            <Text>Fulde navn</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}></TextInput>
            <Text>Email</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}></TextInput>
            <Text>Væg</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}></TextInput>
            <Text>Højde</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}></TextInput>
            <Text>Køn</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}></TextInput>
            <Text>Birth</Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}></TextInput>
        </View>
    );
}