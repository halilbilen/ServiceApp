import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Text, ImageBackground, TextInput, Alert, FlatList } from 'react-native'
import styles from './Style/index'

import axios from 'react-native-axios'

export default class PastTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pastTransaction: []
        }

    }
    async componentDidMount() {
        const response = await axios.post('http://192.168.1.34:5003/companycomment/GetByUserId', { userId: 1, statusId: 1 });
        if (response.data.returnCode === 200) {
            this.setState({
                pastTransaction: response.data.data.companyComments
            });
            console.log(response);
        }
        else {
            Alert.alert(response.data.returnMessage)
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
                        data={this.state.pastTransaction}
                        numColumns={1}
                        renderItem={({ item }) => (

                            <View style={styles.ItemContainer}>
                                <View style={styles.Item}>
                                    <View style={styles.ItemImageContainer}>
                                        <Image source={require('./SourceFiles/Image1.png')} style={styles.ItemImage} />
                                    </View>
                                    <View style={styles.ItemTextContainer}>
                                        <Text style={{ textAlign: 'center', bottom: 5 }}>{"27/07/2019 tarihinde değerlendirdiniz."}</Text>
                                        <Text style={{ textAlign: 'center', color: '#283856', fontStyle: 'italic' }}>{item.comment}</Text>
                                        <View style={{ width: "85%", flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ textAlign: 'center', fontSize: 20 }}>{item.vote}</Text>
                                            <Image source={require('./SourceFiles/star1.png')} style={styles.Star} />


                                        </View>

                                    </View>
                                </View>
                            </View>

                        )}
                        keyExtractor={item => item.companyCommentId.toString()}
                    />
                </View>
            </View>
        )
    }
}
