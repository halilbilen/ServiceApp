import StyleSheet from "react-native-extended-stylesheet";
import { ifIphoneX } from 'react-native-iphone-x-helper'
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    }, HeaderBackImage: {
        top: "-6rem",
        position: 'absolute',
        width: "100%",
        height: "575rem",
        resizeMode: 'stretch',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }, HeaderImage: {
        width: "633rem", height: "542rem", resizeMode: 'contain'

    }, ItemHeaderContainer: {
        width: "50%", top: "500rem", justifyContent: 'center', alignItems: 'center', left: "20rem"
    }, ItemHeader: {
        width: "70%", borderBottomWidth: 1, justifyContent: 'flex-end', alignItems: 'flex-start', height: "250rem"
    }, ProfileHeaderTextContainer: {
        top: "60rem", width: "100%", justifyContent: 'center', alignItems: 'center'
    }, ProfileHeaderText: {
        fontFamily: 'Roboto', fontSize: "70rem"
    }, ProfilePhotoContainer: {
        top: "90rem", width: "100%", justifyContent: 'center', alignItems: 'center'
    }, ProfilePhoto: {
        width: "450rem", height: "450rem", resizeMode: 'contain'
    }, ProfileInfoContainer: {
        top: "300rem", width: "100%", justifyContent: 'center', alignItems: 'center'
    }, ProfileIcon: { width: "150rem", height: "150rem", resizeMode: 'contain' },
    ProfileEditButtonIcon: {
        width: "60rem", height: "60rem", resizeMode: 'contain'
    }, ProfileEditButton: {
        left: "60rem", width: "60rem", height: "60rem",
    }, LoginContainer: {
        width: "100%",
        top: "900rem", height: "50%", alignItems: 'center', flexDirection: 'column'
    }, MailImage: {
        width: "784rem",
        height: "156rem",
        resizeMode: 'contain'
    }, Mail: {
        width: "90%", height: "150rem",
        borderWidth: 1,
        borderRadius: "20rem",
        borderColor: '#9EA8B3',
        justifyContent: 'flex-start',
        alignItems: 'center', flexDirection: 'row', marginTop: '50rem'
    }, MailTextInput: {
        marginLeft: "60rem",
        width: '850rem',
        height: "100%",
        fontSize: "45rem", fontFamily: 'Roboto', color: '#9EA8B3', left: "20rem"
    }, EmailIcon: {
        left: "30rem",
        width: "80rem",
        height: "66rem", resizeMode: 'contain'
    },
    passwordIcon: {
        left: "30rem",
        width: "70rem",
        height: "80rem", resizeMode: 'contain'
    }, LoginButton: {
        top: "150rem",
        borderWidth: 1,
        borderColor: '#6BF57D',
        borderRadius: "40rem",
        height: "130rem",
        width: "500rem",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6BF57D'
    }, LoginText: {
        fontFamily: 'Roboto',
        fontSize: "60rem",
        fontWeight: 'bold', color: 'white'
    },RegisterButton:{
        top: "180rem",
        borderWidth: 1,
        borderColor: '#6B81F5',
        borderRadius: "40rem",
        height: "130rem",
        width: "500rem",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6B81F5'
    }
});



export default styles;