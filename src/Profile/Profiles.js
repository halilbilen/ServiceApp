import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import styles from './Style/index'
export default class Profiles extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={{ top: 20, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Roboto', fontSize: 25 }}>Merhaba Osman</Text>
                </View>
                <View style={{ top: 30, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./SourceFiles/profile.png')} style={{ width: 150, height: 150, resizeMode: 'contain' }} />
                </View>
                <View style={{ top: 100, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: "80%" }}>
                        <Image source={require('./SourceFiles/profileIcon.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                        <View style={{ left: 15, borderBottomWidth: 1, width: "70%" }}>
                            <Text style={{ fontSize: 20 }}>Osman Bedevi</Text>
                        </View>
                    </View>
                    <View style={{ top: 20, flexDirection: 'row', alignItems: 'center', width: "80%" }}>
                        <Image source={require('./SourceFiles/mailIcon.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                        <View style={{ left: 15, borderBottomWidth: 1, width: "70%" }}>
                            <Text style={{ fontSize: 15 }}>osman.bedevi@gmail.com</Text>
                        </View>
                    </View>
                    <View style={{ top: 40, flexDirection: 'row', alignItems: 'center', width: "80%" }}>
                        <Image source={require('./SourceFiles/mobileIcon.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                        <View style={{ left: 15, borderBottomWidth: 1, width: "70%" }}>
                            <Text style={{ fontSize: 20 }}>+90 555 877 49 83</Text>
                        </View>
                    </View>
                    <View style={{ top: 60, flexDirection: 'row', alignItems: 'center', width: "80%" }}>
                        <Image source={require('./SourceFiles/settingsIcon.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                        <View style={{ left: 15, borderBottomWidth: 1, width: "70%" }}>
                            <Text style={{ fontSize: 20 }}>Profili düzenle</Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('./SourceFiles/ok.png')} style={{ left: 20, width: 20, height: 20, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
