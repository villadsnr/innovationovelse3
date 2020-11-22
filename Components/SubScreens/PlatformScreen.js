import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import Header from "./Header";
import ScrollViewScreen from "../ScrollViewScreen";

export default class ProfileScreen extends React.Component {
    state={
        clicked:false,
        btnTitle:'Aktiver den rigtige font!'
    }

    onPress = () => {

        if(!this.state.clicked){
            this.setState({
                btnTitle: 'Gå tilbage',
                clicked: true
            })
        }else {
            this.setState({
                btnTitle: 'Aktiver den rigtige font',
                clicked: false
            })
        }
    };

    render() {
        return (
            <View style={[styles.mainContainer]}>
                <Header navigation={this.props.navigation} title=''/>
                <Text style={{ fontSize: 50, textAlign:'center',paddingTop:40 }}>TILFØJ NYT FORBRUG</Text>
                <View style={styles.imageContainer}>
                    <Text style={{ fontSize: 50, textAlign:'center',paddingTop:40 }}>Alkohol forbrug</Text>
                    <ScrollView style={styles.StyledView} style={{height:500, width:500}} horizontal={false}>
                        <Text>Her kan du tilføje et nyt forbrug som du kan holde øje med</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',

    },
    imageContainer:{
        height: 250,
        alignItems: 'center',
    },
    header: {
        marginBottom: 70,
        flex: 0.1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 35,
    },
    body:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderColor: 'black',
        height: 230,
        borderWidth: 1,
    },/*
    font1:{
        fontSize: 30,
        fontWeight: "bold",
        ...Platform.select({
            ios: { fontFamily: 'AlNile-Bold', },
            android: { fontFamily: 'serif' }
        })

    },
    */
    font2:{

    }
});
