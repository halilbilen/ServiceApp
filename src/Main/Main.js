import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Text, ImageBackground, TextInput, Alert } from 'react-native'
import styles from './Style/index'
import { FlatList } from 'react-native-gesture-handler';
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
    require('./SourceFiles/oxford.png'),
    require('./SourceFiles/empty.png')];
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
            companyCommentList: [],
            screen: 0,
            categoryName: '',
            serviceName: '',
            companyNames: '',
            companyMediaId: 0,
            response1: null,
            company: null,
            companyDetail: false,
            ipAdres: "http://ip-api.com/json/",
            city: '',
            vote: 0, commentArea: true
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
        // post(getServiceByCityId)

        //cityServiceList=[]
    }


    async GetCategory() {
        this.setState({ categorySelected: !this.state.categorySelected })
        const response = await axios.post('http://192.168.1.34:5003/category/list', { statusId: 1 });
        if (response.data.returnCode === 200) {
            this.setState({
                companyDetail: false, categoryList: response.data.data.categories
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
        const response = await axios.post('http://192.168.1.34:5003/service/list', { categoryId: ItemCategoryId, statusId: 1 })
        if (response.data.returnCode === 200) {
            this.setState({
                serviceList: response.data.data.services,
                companyDetail: false, screen: 1,
                categoryName: categoryName,

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
                companyDetail: false, screen: 1,
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
                serviceName: name,
                companyDetail: false,

            });
        }
        else {
            Alert.alert(response.data.returnMessage)
        }

    }

    async GetCompanyComment(companyId, name) {
        console.log(companyId + name);
        const response = await axios.post('http://192.168.1.34:5003/companycomment/Get', { companyId: companyId, statusId: 1 });
        console.log(response);
        if (response.data.returnCode === 200) {
            this.setState({
                companyCommentList: response.data.data.companyComments,
                screen: 2,
                companyDetail: true,
                companyNames: name,
                companyMediaId: companyId
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
                            <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center', bottom: 10 }} >
                                <View style={{ width: "40%", justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1 }}>
                                    <Text>{this.state.city.toUpperCase()}</Text>
                                </View>
                            </View>
                            <Text>{this.state.screen === 0 ? "Size yakın hizmetler" : this.state.screen === 1 ? this.state.categoryName : !this.state.companyDetail ? this.state.categoryName + "->" + this.state.serviceName + "->" + "Hizmet Verenler" : this.state.categoryName + "->" + this.state.serviceName + "->" + "Hizmet Verenler"}</Text>

                        </View>
                    </View> : null
                }
                {!this.state.categorySelected ?
                    !this.state.companyDetail ?

                        <View style={styles.ItemContainer}>
                            <FlatList
                                data={this.state.screen === 1 ? this.state.serviceList : this.state.companyList}
                                numColumns={2}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.ItemButton} onPress={this.state.screen === 1 ? this.GetCompanyByServiceId.bind(this, item.serviceId, item.name) : this.GetCompanyComment.bind(this, item.companyId, item.name)} >
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
                                                    {this.state.screen !== 2 ? <Text style={{ fontSize: 10, textAlign: 'left' }}>190 profesyonel</Text> : null}
                                                    <Text style={{ fontSize: 10, textAlign: 'left' }}>2.752 onaylı yorum</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                )}
                                keyExtractor={item => this.state.screen === 1 ? item.serviceId.toString() : item.companyId.toString()}
                            />
                        </View> :
                        <View style={styles.companyDetailContainer}>
                            <View style={{ width: "84%", backgroundColor: 'white', height: 230 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <View>
                                        <Image source={companyMedia[this.state.companyMediaId]} style={styles.companyDetailImage} />
                                    </View>
                                    <View>
                                        <Text style={{ fontWeight: 'bold' }}>{this.state.companyNames}</Text>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                            <Text>4</Text>
                                            <Image source={require('./SourceFiles/star1.png')} style={styles.Star} />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ left: 5 }}>
                                    <View style={{ flexDirection: 'row', bottom: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Image source={require('./SourceFiles/konum.png')} style={styles.LocationIcon} />
                                        <Text style={{ left: 5, fontSize: 13 }}>Yenigün, Yozkent Sitesi, Köroğlu Blv. No:26, 07040 Muratpaşa/Antalya</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', bottom: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Image source={require('./SourceFiles/telefon.png')} style={styles.PhoneIcon} />
                                        <Text style={{ left: 5 }}> 0535 966 83 95</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', bottom: 5, justifyContent: 'flex-start', alignItems: 'center' }}>
                                        <Image source={require('./SourceFiles/webAdres.png')} style={styles.WebIcon} />
                                        <Text style={{ left: 5 }}>oxfordbilisim.com</Text>
                                    </View>
                                    <View style={{ width: "95%", bottom: 5, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                        <TouchableOpacity onPress={() => {
                                            this.setState({
                                                commentArea: !this.state.commentArea
                                            })
                                        }}>
                                            <Image source={require('./SourceFiles/comment.png')} style={styles.CommentIcon} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            {this.state.commentArea ?
                                <View style={styles.CommentContainer}>
                                    <FlatList
                                        data={this.state.companyCommentList}
                                        numColumns={1}
                                        renderItem={({ item }) => (
                                            <View style={styles.CommentItem}>
                                                <Image source={require('./SourceFiles/commentProfile.png')} style={styles.CommentProfile} />
                                                <View style={{ left: 15, flexDirection: 'column' }}>
                                                    <View style={{ width: 200, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.adSoyad}</Text>
                                                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                            <Text>{item.vote}</Text>
                                                            <Image source={require('./SourceFiles/star1.png')} style={styles.Star1} />
                                                        </View>

                                                    </View>
                                                    <View style={{ width: 200, alignItems: 'center', justifyContent: 'center' }}>
                                                        <Text style={{ textAlign: 'center', color: '#283856', fontSize: 10 }}>{item.comment} </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        )}
                                        keyExtractor={item => item.companyCommentId.toString()}
                                    />

                                </View> :
                                <View>
                                    <TextInput
                                        placeholder={"Yorum yap"}
                                        onChangeText={text => {
                                            this.setState({
                                                categorySearch: text
                                            });
                                        }}
                                    />
                                </View>
                            }

                        </View> : null
                }
            </View >
        )
    }
}
