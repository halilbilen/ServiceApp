import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Text, ImageBackground, TextInput, Alert, FlatList } from 'react-native'
import styles from './Style/index'

import axios from 'react-native-axios'
var notifList = [
    { NotificationId: 1, name: "Deneme1", image: require("./SourceFiles/Image1.png"), text: "21/7/2019 tarihinde değerlendirdiniz.", vote: 4, comment: "İş yoğunluklarından dolayı iletişim zordu ama kesinlikle doğru tercih" },
    { NotificationId: 2, name: "Deneme2", image: require("./SourceFiles/Image2.png"), text: "21/7/2019 tarihinde değerlendirdiniz.", vote: 4, comment: "İş yoğunluklarından dolayı iletişim zordu ama kesinlikle doğru tercih" }
];


export default class PastTransaction extends Component {
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
                        <Image source={require('./SourceFiles/gecmis.png')} style={styles.HeaderImage} />
                    </View>
                </ImageBackground>

                <View style={styles.ItemHeaderContainer}>
                    <View style={styles.ItemHeader}>
                        <Text style={styles.ItemHeaderText}>Geçmiş Hizmetleriniz</Text>
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
                                        <Text style={{ textAlign: 'center', bottom: 5 }}>{item.text}</Text>
                                        <Text style={{ textAlign: 'center', color: '#283856', fontStyle: 'italic' }}>{item.comment}</Text>
                                        <View style={{ width: "85%", flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ textAlign: 'center', fontSize: 20 }}>{item.vote}</Text>
                                            <Image source={require('./SourceFiles/star1.png')} style={styles.Star} />
                                            

                                        </View>

                                    </View>
                                </View>
                            </View>

                        )}
                        keyExtractor={item => item.NotificationId}
                    />
                </View>
            </View>
        )
    }
}
