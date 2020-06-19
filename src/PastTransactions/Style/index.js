import StyleSheet from "react-native-extended-stylesheet";
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#F8F8F8', flex: 1
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
        width: "60%", top: "500rem", justifyContent: 'center', alignItems: 'center', left: "20rem"
    }, ItemHeader: {
        width: "80%", borderBottomWidth: 1, justifyContent: 'flex-end', alignItems: 'flex-start', height: "250rem"
    }, ItemHeaderText: {
        fontSize: "50rem", bottom: "40rem", left: "10rem"
    }, ListContainer: {
        flex: 1, marginTop: "600rem",
    }, ItemContainer: {
        width: "100%", height: "340rem", justifyContent: 'center', alignItems: 'center'
    }, Item: {
        width: "99%", height: "100%", borderTopWidth: 1, borderColor: '#E3E3E3', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    }, ItemImageContainer: {
        width: "30%", height: "100%", justifyContent: 'center', alignItems: 'center'
    }, ItemImage: {
        width: "80%", height: "80%", resizeMode: 'contain'
    }, ItemTextContainer: {
        width: "70%", height: "100%", justifyContent: 'center', alignItems: 'center'
    }, Star: {
        width: "50rem", height: "50rem", resizeMode: 'contain', left: "30rem"
    }
});

export default styles;