import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import Header from "./Header";

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
                <Text style={{ fontSize: 50, textAlign:'center',paddingTop:40 }}>ALKOLYSE</Text>
                <View style={styles.imageContainer}>
                    <Text>Du har været sober i:</Text>
                    <Image source = {{uri:'data:image/jpeg;base64,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'}}
                           style = {{ width: 200, height: 200 }}/>
                    <Text>Denne graf viser din promille over tid i sidste session</Text>
                    <Image source = {{uri:'https://www.daytrader.dk/wp-content/uploads/2020/01/kobber.jpg'}} style = {{ width: 200, height: 200 }}/>
                    <Text>Højest målt promille</Text>
                        <Image source = {{uri:'data:image/jpeg;base64,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'}} style = {{ width: 200, height: 200 }}/>
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

/*
import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import Header from "./Header";
export default class HomeScreen extends Component {
/*
    state={
        clicked:false,
        btnTitle:'Tryk på mig!!!'
    }

    onPress = () => {

        if(!this.state.clicked){
            this.setState({
                btnTitle: 'Den skal være grøn',
                clicked: true
            })
        }else {
            this.setState({
                btnTitle: 'Den skal være blå',
                clicked: false
            })
        }
    };
    */
/*
    render() {
        return (
            <View style={styles.mainContainer}>
                <Header navigation={this.props.navigation} title='Min Data'/>
                    <Image style={styles.imageContainer} source = {{uri:'https://www.daytrader.dk/wp-content/uploads/2020/01/kobber.jpg'}}
                           style = {{ width: 200, height: 200 }}/>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%'
    },
    btn:{
        padding:40,
        borderRadius:10
    },
    btn_txt:{
        color:'white'
    },
    imageContainer:{
        height: 250,
        alignItems: 'center',
    },
    blue:{
        backgroundColor:'blue',
    },
    green:{
        backgroundColor:'green',
    },
    textContainer: {
        flex: 0.1,
        marginTop: 200,
        alignItems: 'center',
        height: 100,
    },
});*/
