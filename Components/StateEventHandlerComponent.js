import React, { Component } from 'react'
import {View, Text, Button, Image} from 'react-native'
import {TextInput} from "react-native-web";
import {black, green50} from "react-native-paper/src/styles/colors";

export default class StateButton extends Component {
    state = {
        boxTitle: 'Start session',
        clicked:false
    }
    onPress1 = () => {

        if(!this.state.clicked){
            this.setState({
                boxTitle: 'Start session',
                clicked: true
            })
        }else {
            this.setState({
                boxTitle: 'Slut session',
                clicked: false
            })
        }
    };


    render() {
        return (
            <View style={{paddingTop: 1, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{fontsize: 15, padding: 30}}>Start en session ved at trykke på nedenstånde knap. Tryk stop, for at aflslutte session.</Text>
                <Button style={{fontsize: 15, padding: 30}} title={this.state.boxTitle} onPress={this.onPress1} />
                <div style={{padding:50}}>
                <Button style={{fontsize: 50, padding:20}} title={"Registrer' genstand"}></Button>
                </div>
                <Text>Nuværende session startede 15:04 - 20/11-2020</Text>
                <Text style={{padding: 20}}>Din nuværende promille er nu 0.0</Text>
                <Text>Graf over nuværende session</Text>
                <Image source = {{uri:'https://www.daytrader.dk/wp-content/uploads/2020/01/kobber.jpg'}} style = {{ width: 200, height: 200 }}/>
                <Text>Du kan se analyser af din session under "Data"</Text>
            </View>

        )
    }
}