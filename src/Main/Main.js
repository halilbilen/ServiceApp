import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Text, ImageBackground, TextInput, Alert } from 'react-native'
import styles from './Style/index'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import publicIP from 'react-native-public-ip';
import DeviceInfo from 'react-native-device-info';
import axios from 'react-native-axios'
var star = [];
var serviceMedia = [
    require('./SourceFiles/empty.png'),
    require('./SourceFiles/web.png'),
    require('./SourceFiles/mobil.png'),
    require('./SourceFiles/tasarim.png'),
    require('./SourceFiles/reklam.png'),
    require('./SourceFiles/yazilim.png'),
    require('./SourceFiles/araba.png'),];

var companyMedia = [
    require('./SourceFiles/empty.png'),
    require('./SourceFiles/web.png'),
    require('./SourceFiles/mobil.png'),
    require('./SourceFiles/tasarim.png'),
    require('./SourceFiles/reklam.png'),
    require('./SourceFiles/yazilim.png'),];
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            categorySearch: '',
            categorySelected: false,
            categoryList: [],
            serviceList: [],
            companyList: [],
            screen: 0,
            categoryName: '',
            serviceName: '',
            response1: null,
            companyDetail: false,
            ipAdres: "http://ip-api.com/json/",
            city: '',
            vote: 0
        }

    }
    async componentDidMount() {
        const [Operator, Os, OsVersion, Brand, Model, AppVersion] = await Promise.all([DeviceInfo.getCarrier(), DeviceInfo.getSystemName(), DeviceInfo.getSystemVersion(),
        DeviceInfo.getBrand(), DeviceInfo.getDeviceId(), DeviceInfo.getBuildNumber()]);
        console.log(Os);
        console.log(Operator);
        console.log(Model);
        console.log(OsVersion);
        publicIP()
            .then(ip => {
                this.setState({
                    ipAdres: this.state.ipAdres + ip
                });
            })
            .catch(error => {
                console.log(error);
            });
        const city = await axios.get(this.state.ipAdres);
        this.setState({
            city: city.data.city
        })
    }


    async GetCategory() {
        this.setState({ categorySelected: !this.state.categorySelected })
        const response = await axios.post('http://192.168.1.34:5003/category/list', { statusId: 1 });
        if (response.data.returnCode === 200) {
            this.setState({
                categoryList: response.data.data.categories
            });
        }
        else {
            Alert.alert(response.data.returnMessage)
        }


    }
    async GetServiceByCategoryId(ItemCategoryId, categoryName) {
        this.setState({
            categorySelected: !this.state.categorySelected
        })
        const response = await axios.post('http://192.168.1.34:5003/service/get', { categoryId: ItemCategoryId, statusId: 1 })
        if (response.data.returnCode === 200) {
            this.setState({
                serviceList: response.data.data.services,
                screen: 1,
                categoryName: categoryName
            });
        } else {
            Alert.alert(response.data.returnMessage)
        }

    }

    async Search(word) {
        console.log(word);
        const response = await axios.post('http://192.168.1.34:5003/service/search', { word: word });
        console.log(response);
        if (response.data.returnCode === 200) {
            this.setState({
                screen: 1,
                serviceList: response.data.data.services
            });

        } else {
            Alert.alert(response.data.returnMessage)
        }

    }

    async GetCompanyByServiceId(serviceId, name) {
        const response = await axios.post('http://192.168.1.34:5003/company/GetByServiceId', { serviceId: serviceId, statusId: 1 });
        if (response.data.returnCode === 200) {
            this.setState({
                companyList: response.data.data.companies,
                screen: 2,
                serviceName: name
            });
        }
        else {
            Alert.alert(response.data.returnMessage)
        }

    }

    async GetCompanyComment(companyId, name) {
        const response = await axios.post('http://192.168.1.34:5003/companycomment/Get', { serviceId: companyId, statusId: 1 });
        if (response.data.returnCode === 200) {
            this.setState({
                companyList: response.data.data.companycomment,
                screen: 2,
                serviceName: name,
                companyDetail: !this.state.companyDetail,
                vote: response.data.data.companycomment.vote
            });
        }
        else {
            Alert.alert(response.data.returnMessage)
        }

    }

    render() {

        return (
            <View style={styles.mainContainer}>
                <ImageBackground source={require('./SourceFiles/header2.png')} style={styles.HeaderBackImage}>
                    <View style={styles.CategoryButtonContainer}>
                        <TouchableOpacity style={styles.CategoryButton} onPress={this.GetCategory.bind(this)}>
                            <Image source={require('./SourceFiles/category.png')} style={styles.CategoryIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "70%", height: "100%", justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Image source={this.state.screen === 0 ? require('./SourceFiles/HeaderImage.png') : require('./SourceFiles/servis.png')} style={styles.HeaderImage} />
                    </View>
                </ImageBackground>
                <View style={styles.SearchContainer}>
                    <ImageBackground source={require('./SourceFiles/search.png')} style={styles.SearchBackImage}>

                        <TextInput allowFontScaling={false}
                            underlineColorAndroid="transparent"
                            style={styles.TextInput}
                            value={this.state.search}
                            placeholder={"Hizmet Ara"}
                            placeholderTextColor={this.state.search === "" ? "#959595" : "#2E2E2E"}
                            multiline={false}
                            onChangeText={text => {
                                this.setState({
                                    search: text
                                });
                            }}
                        />
                        <TouchableOpacity onPress={this.state.screen === 0 ? this.Search.bind(this, this.state.search) : null}>
                            <Image source={require("./SourceFiles/searchIcon.png")} style={styles.SearchIcon} />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={{ position: 'absolute', width: "100%", height: "100%", justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ width: "55%", height: "100%", justifyContent: 'flex-start', marginLeft: this.state.categorySelected ? 0 : -400 }}>
                        <Image source={require('./SourceFiles/categoryContainer.png')} style={styles.CategoryContainer} />
                        <View style={styles.categoryItemContainer}>
                            <View style={styles.categoryItemHeaderContainer}>
                                <Text style={styles.categoryItemHeaderText} >KATEGORİLER</Text>
                            </View>
                        </View>
                        <View style={styles.categorySearchContainer}>
                            <View style={styles.categorySearch}>
                                <TextInput allowFontScaling={false}
                                    underlineColorAndroid="transparent"
                                    style={styles.categorySearchText}
                                    value={this.state.categorySearch}
                                    placeholder={"Hizmet Ara"}
                                    placeholderTextColor={this.state.categorySearch === "" ? "#959595" : "#2E2E2E"}
                                    multiline={false}
                                    onChangeText={text => {
                                        this.setState({
                                            categorySearch: text
                                        });
                                    }}
                                />
                                <TouchableOpacity style={styles.categorySearchButton}>
                                    <Image source={require("./SourceFiles/searchIcon2.png")} style={styles.categorySearchIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.categoryListContainer}>
                            <FlatList
                                data={this.state.categoryList}
                                numColumns={1}
                                renderItem={({ item }) => (
                                    <View style={styles.categoryListItemContainer}>
                                        <Text style={styles.categoryListItemText}>{item.name}</Text>
                                        <TouchableOpacity onPress={this.GetServiceByCategoryId.bind(this, item.categoryId, item.name)}>
                                            <Image source={require("./SourceFiles/categorySelectedIcon.png")} style={styles.categorySearchIcon} />
                                        </TouchableOpacity>
                                    </View>
                                )}
                                keyExtractor={item => item.categoryId.toString()}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.categorySelectedContainer, { left: this.state.categorySelected ? 0 : -800 }]} onPress={() => this.setState({ categorySelected: !this.state.categorySelected })} >

                    </TouchableOpacity>
                </View>
                {!this.state.categorySelected ?
                    <View style={styles.ItemHeaderContainer}>
                        <View style={styles.ItemHeader}>
                            <Text>{this.state.screen === 0 ? this.state.city : this.state.screen === 1 ? this.state.categoryName : this.state.serviceName}</Text>
                        </View>
                    </View> : null
                }
                {!this.state.categorySelected ?


                    <View style={styles.ItemContainer}>
                        <FlatList
                            data={this.state.screen === 1 ? this.state.serviceList : this.state.companyList}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.ItemButton} onPress={this.state.screen === 1 ? this.GetCompanyByServiceId.bind(this, item.serviceId, item.name) : null} >
                                    <Image style={styles.ItemBackImage} source={require('./SourceFiles/itemContainer.png')} />
                                    <View style={styles.Item}>
                                        <Image source={this.state.screen === 1 ? serviceMedia[item.serviceId] : companyMedia[item.companyId]} style={styles.ItemImage} />
                                        <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}><Text>{item.name}</Text></View>
                                        <View style={{ width: "80%", justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                <Text>4</Text>
                                                <Image source={require('./SourceFiles/star1.png')} style={styles.Star} />
                                            </View>
                                            <View style={{ top: 10, flexDirection: 'column' }}>
                                                <Text style={{ fontSize: 10, textAlign: 'left' }}>190 profesyonel</Text>
                                                <Text style={{ fontSize: 10, textAlign: 'left' }}>2.752 onaylı yorum</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            )}
                            keyExtractor={item => this.state.screen === 1 ? item.serviceId.toString() : item.companyId.toString()}
                        />
                    </View> : null
                }
            </View >
        )
    }
}
