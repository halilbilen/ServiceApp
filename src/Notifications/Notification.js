import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Text, ImageBackground, TextInput, Alert, FlatList } from 'react-native'
import styles from './Style/index'

import axios from 'react-native-axios'
var notifList = [
    { NotificationId: 1, name: "Deneme1", image: require("./SourceFiles/image1.png"), comment: "Bölgenizde 3 yeni mobil uygulama geliştiricisi mevcut" },
    { NotificationId: 2, name: "Deneme2", image: require("./SourceFiles/image2.png"), comment: "Bugün 8 yeni ev temizliği hizmet vereni kayıt yaptırdı" }
];


export default class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // notifList: []
        }

    }


    render() {
        return (
            <View style={styles.mainContainer}>
                <ImageBackground source={require('./SourceFiles/header2.png')} style={styles.HeaderBackImage}>
                    <View style={{ width: "70%", height: "100%", justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Image source={require('./SourceFiles/bildirim.png')} style={styles.HeaderImage} />
                    </View>
                </ImageBackground>

                <View style={styles.ItemHeaderContainer}>
                    <View style={styles.ItemHeader}>
                        <Text style={styles.ItemHeaderText}>Son Gelişmeler</Text>
                    </View>
                </View>

                <View style={styles.ListContainer}>
                    <FlatList
                        data={notifList}
                        numColumns={1}
                        renderItem={({ item }) => (

                            <View style={styles.ItemContainer}>
                                <View style={styles.Item}>
                                    <View style={styles.ItemImageContainer}>
                                        <Image source={item.image} style={styles.ItemImage} />
                                    </View>
                                    <View style={styles.ItemTextContainer}>
                                        <Text style={{ textAlign: 'center' }}>{item.comment}</Text>
                                    </View>
                                </View>
                            </View>

                        )}
                        keyExtractor={item => item.NotificationId.toString()}
                    />
                </View>
            </View>
        )
    }
}
