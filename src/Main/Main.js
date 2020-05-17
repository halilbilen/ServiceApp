import React, { Component } from 'react'
import { View, Text, Image, TextInput, ImageBackground, StyleSheet } from 'react-native'

import EStyleSheet from "react-native-extended-stylesheet";


export default class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ top: 79, width: "100%", height: "20%", borderWidth: 1, borderColor: 'red' }}><Text>Deneme</Text></View>
                <View style={styles.container}>
                    <Text>Deneme</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        top: "30%", left: "10%", right: "10%",
        width: "80%", height: "20%"
    }
});