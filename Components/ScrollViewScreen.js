import React,{Component} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import StateButton from "./StateEventHandlerComponent";
import InputLabel from "react-native-paper/src/components/TextInput/Label/InputLabel";
import {TextInput} from "react-native-web";

export default class ScrollViewScreen extends Component{
    render() {
        return(
            <View style={styles.container}>

                <Text style={{ fontSize: 50, textAlign:'center',paddingTop:40 }}>ALKOLYSE</Text>
                <Text>Pas godt på dig selv - kend Sundhedsstyrelsens 7 udmeldinger om alkohol</Text>
                <ScrollView style={styles.StyledView}>
                </ScrollView>
                <StateButton></StateButton>

                <TextInput style={{color:"white"}}/>
                <ScrollView style={{height:50}} horizontal={true}>
                </ScrollView>
            </View>

        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    StyledView:{
        height:1,
        width: 400,
    }
});