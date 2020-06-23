import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Alert, ImageBackground } from 'react-native'
import styles from './Style/index'
import { TextInput } from 'react-native-gesture-handler';
import axios from 'react-native-axios'
export default class Profiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            mail: '',
            password: '',
            user: null,
            name: '',
            surname: '',
            email: '',
            gsmNo: '',
        }
    }

    async login() {
        var response = await axios.post('http://192.168.1.34:5003/user/login', { email: this.state.mail, password: this.state.password });
        console.log(response);
        if (response.data.returnCode === 200) {
            this.setState({
                user: response.data.data,
                login: true
            });
        }
        else {
            Alert.alert(response.data.returnMessage)
        }
    }

    async register() {
        var response = await axios.post('http://192.168.1.34:5003/user/register', { email: this.state.mail, password: this.state.password });
        console.log(response);
        if (response.data.returnCode === 200) {
            Alert.alert("Giriş yapabilirsiniz");
        }
        else {
            Alert.alert(response.data.returnMessage)
        }
    }

    render() {
        return (

            this.state.login ?
                <View style={styles.mainContainer}>
                    <View style={styles.ProfileHeaderTextContainer}>
                        <Text style={styles.ProfileHeaderText}>Merhaba {this.state.user.name + " " + this.state.user.surname}</Text>
                    </View>
                    <View style={styles.ProfilePhotoContainer}>
                        <Image source={require('./SourceFiles/profile.png')} style={styles.ProfilePhoto} />
                    </View>
                    <View style={styles.ProfileInfoContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: "80%" }}>
                            <Image source={require('./SourceFiles/profileIcon.png')} style={styles.ProfileIcon} />
                            <View style={{ left: 15, borderBottomWidth: 1, width: "70%" }}>
                                <Text style={{ fontSize: 20 }}>{this.state.user.name + " " + this.state.user.surname}</Text>
                            </View>
                        </View>
                        <View style={{ top: 20, flexDirection: 'row', alignItems: 'center', width: "80%" }}>
                            <Image source={require('./SourceFiles/mailIcon.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                            <View style={{ left: 15, borderBottomWidth: 1, width: "70%" }}>
                                <Text style={{ fontSize: 15 }}>{this.state.user.email}</Text>
                            </View>
                        </View>
                        <View style={{ top: 40, flexDirection: 'row', alignItems: 'center', width: "80%" }}>
                            <Image source={require('./SourceFiles/mobileIcon.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                            <View style={{ left: 15, borderBottomWidth: 1, width: "70%" }}>
                                <Text style={{ fontSize: 20 }}>{this.state.user.gsmNo}</Text>
                            </View>
                        </View>
                        <View style={{ top: 60, flexDirection: 'row', alignItems: 'center', width: "80%" }}>
                            <Image source={require('./SourceFiles/settingsIcon.png')} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
                            <View style={{ left: 15, borderBottomWidth: 1, width: "70%" }}>
                                <Text style={{ fontSize: 20 }}>Profili düzenle</Text>
                            </View>
                            <TouchableOpacity style={styles.ProfileEditButton} >
                                <Image source={require('./SourceFiles/ok.png')} style={styles.ProfileEditButtonIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> :
                <View style={styles.mainContainer}>
                    <ImageBackground source={require('./SourceFiles/header2.png')} style={styles.HeaderBackImage}>
                        <View style={{ width: "40%", height: "100%", justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: 35 }}>IS-KO</Text>
                        </View>
                        <View style={{ width: "60%", height: "100%", justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Image source={require('./SourceFiles/profileImage.png')} style={styles.HeaderImage} />
                        </View>
                    </ImageBackground>
                    <View style={styles.LoginContainer}>
                        <View style={styles.Mail}>
                            <Image source={require('./SourceFiles/email.png')} style={styles.EmailIcon} />
                            <TextInput allowFontScaling={false}
                                underlineColorAndroid="transparent"
                                style={styles.MailTextInput}
                                value={this.state.mail}
                                placeholder={"E-Mail"}
                                placeholderTextColor={this.state.mail === "" ? "#959595" : "#2E2E2E"}
                                multiline={false}
                                onChangeText={text => {
                                    this.setState({
                                        mail: text
                                    });
                                }}
                            />
                        </View>
                        <View style={styles.Mail}>
                            <Image source={require('./SourceFiles/password.png')} style={styles.passwordIcon} />
                            <TextInput allowFontScaling={false}
                                underlineColorAndroid="transparent"
                                style={styles.MailTextInput}
                                value={this.state.password}
                                placeholder={"Password"}
                                placeholderTextColor={this.state.password === "" ? "#959595" : "#2E2E2E"}
                                multiline={false}
                                onChangeText={text => {
                                    this.setState({
                                        password: text
                                    });
                                }}
                            />
                        </View>
                        <TouchableOpacity style={styles.LoginButton} onPress={this.login.bind(this)}>
                            <Text style={styles.LoginText}>
                                GİRİŞ
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.RegisterButton} onPress={this.register.bind(this)}>
                            <Text style={styles.LoginText}>
                                KAYIT OL
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

        )
    }
}
