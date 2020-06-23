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
        justifyContent: 'space-between',
    }, HeaderImage: {
        width: "633rem", height: "542rem", resizeMode: 'contain'
    }, CategoryIcon: {
        width: "150rem", height: "100rem", resizeMode: 'contain'
    }, CategoryButtonContainer: {
        width: "20%",
        height: "50%",
        left: "70rem",
        top: "100rem"
    }, CategoryButton: {
        width: "150rem", height: "100rem", justifyContent: 'center', alignItems: 'center'
    }, SearchContainer: {
        width: "100%", height: "140rem", top: "480rem", justifyContent: 'center', alignItems: 'center'
    }, SearchBackImage: {
        width: "986rem",
        height: "140rem", resizeMode: 'contain', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'
    }, TextInput: {
        width: '80%',
        color: '#2E2E2E',
        fontSize: "45rem"
    }, SearchIcon: {
        width: "92rem",
        height: "85rem", resizeMode: 'contain'
    }, CategoryContainer: {
        width: "100%",
        height: "2495rem",
        resizeMode: 'stretch'
    }, ItemHeaderContainer: {
        width: "100%", top: "540rem", justifyContent: 'center', alignItems: 'center'
    }, ItemContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: "600rem", marginLeft: "30rem"
    }, ItemHeader: {
        width: "83%", borderBottomWidth: 1
    }, ItemBackImage: {
        width: "490rem",
        height: "690rem",
        resizeMode: 'contain'
    }, ItemButton: {
        justifyContent: 'center', alignItems: 'center', marginRight: "30rem", marginBottom: "15rem"
    }, Item: {
        position: 'absolute',
        top: "30rem",
        alignItems: 'center',
        width: "480rem",
        height: "650rem",
        justifyContent: 'center',
    }, ItemImage: {
        width: "380rem",
        height: "400rem",
        resizeMode: 'contain'
    }, categorySelectedContainer: {
        width: "45%", height: "100%", backgroundColor: 'gray', opacity: 0.5,
    }, categoryItemContainer: {
        position: 'absolute',
        width: "621rem",
        height: "100%"
    }, categoryItemHeaderContainer: {
        position: 'absolute',
        width: "100%", justifyContent: 'center', alignItems: 'center'
    }, categoryItemHeaderText: {
        fontFamily: 'Roboto',
        fontSize: '55rem', fontWeight: 'bold', color: '#FFFFFF'
    }, categorySearchContainer: {
        position: 'absolute',
        top: "150rem",
        width: "100%", height: "90rem", justifyContent: 'center', alignItems: 'center'
    }, categorySearch: {
        backgroundColor: 'white',
        width: "90%",
        borderRadius: "30rem",
        flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'center'
    }, categorySearchIcon: {
        width: "60rem",
        height: "64rem", resizeMode: 'stretch'
    }, categorySearchButton: {
        width: "60rem",
        height: "64rem", right: "20rem"
    }, categorySearchText: {
        width: '70%',
        height: "100%",
        fontSize: "45rem", fontFamily: 'Roboto', color: '#9EA8B3', left: "20rem"
    }, categoryListContainer: {
        flex: 1, position: 'absolute', top: "300rem", width: "100%"
    }, categoryListItemContainer: {
        width: "100%", height: "150rem", borderBottomWidth: 1, borderColor: 'white', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'
    }, categoryListItemIcon: {
        width: "30rem", height: "100rem", resizeMode: 'contain',
    }, categoryListItemText: {
        fontFamily: 'Roboto',
        fontSize: '55rem', fontWeight: 'bold', color: '#FFFFFF', left: "25rem"
    }, Star: {
        width: "30rem", height: "30rem", resizeMode: 'contain', left: "20rem"
    }
    , Star1: {
        width: "50rem", height: "50rem", resizeMode: 'contain', left: "20rem"
    }, companyDetailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "600rem",
        width: "100%"
    }, companyDetailImage: {
        width: "380rem",
        height: "350rem",
        resizeMode: 'contain'
    }, LocationIcon: {
        width: "70rem",
        height: "85rem", resizeMode: 'contain'
    }, PhoneIcon: {
        width: "65rem",
        height: "85rem", resizeMode: 'contain'
    }, WebIcon: {
        width: "75rem",
        height: "85rem", resizeMode: 'contain'
    }, CommentIcon: {
        width: "70rem",
        height: "70rem", resizeMode: 'contain'
    }, CommentProfile: {
        width: "120rem",
        height: "120rem", resizeMode: 'contain', left: "10rem"
    }, CommentContainer: {
        justifyContent: 'center', alignItems: 'center', width: "90%", top: "40rem", height: "300rem"
    }, CommentItem: {
        backgroundColor: 'white',
        width: "980rem",
        height: "200rem",
        marginTop: "30rem",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    }

});

export default styles;