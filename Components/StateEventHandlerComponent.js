import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class StateButton extends Component {
    state = {
        boxTitle: 'Tom boks',
        clicked:false
    }
    onPress1 = () => {

        if(!this.state.clicked){
            this.setState({
                boxTitle: 'Boozer meget',
                clicked: true
            })
        }else {
            this.setState({
                boxTitle: 'Boozer ikke',
                clicked: false
            })
        }
    };


    render() {
        return (
            <View style={{paddingTop: 25, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Hvor meget boozer du?</Text>
                <Button title={this.state.boxTitle} onPress={this.onPress1} />
            </View>

        )
    }
}