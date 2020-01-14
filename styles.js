import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import * as Font from 'expo-font';

const darkGreen = '#417110';
const lightGreen = '#70A040';
const yellow = '#F2CB05';


export const Button = ({title, onPress, disabled}) => (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
);

export const styles = StyleSheet.create({
    ImageIconStyle: {
        height: 60,
        width: 60,

    },
    container: {
        padding: 40,
        justifyContent:'center'
    },
    container_home:{
        padding: 15,
        justifyContent:'center'
    },
    spotLight:{
       marginTop: 15,
    },
    missionButton: {
        borderWidth: 2,
        borderColor: darkGreen,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    titleMission: {
        marginTop: 5,
        fontSize: 20,
        fontFamily: 'Roboto'
    },
    logoComponent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    outercircle:{
        borderRadius: 60,
        backgroundColor: 'white',
        marginBottom: 10,

    },
    logo:{
        borderWidth: 2,
        padding:20,
        backgroundColor: darkGreen,
        borderColor: darkGreen,
        borderRadius: 60,
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoIcon: {
        height: 150,
        width: 150
    },
    subHeaderRammetto: {
        fontSize: 24,
        fontFamily: 'Rammetto-One',

    },
    subsubHeaderRammetto: {
        fontSize: 20,
        fontFamily: 'Rammetto-One',
    },
    header:{
        padding:0,
        marginTop:5,
        justifyContent:'center',
        alignItems:'center'
    },
    environsubTitle:{
        fontSize: 20,
        fontFamily: 'Roboto',
        textAlign:'center',
    },
    environsubTitleColor:{
        fontSize: 20,
        fontFamily: 'Roboto',
        textAlign:'center',
        color:'black'
    },
    titleheader:{
        marginTop: 10,
        marginBottom: 15,
        justifyContent:'center',
        alignItems:'center',
    },
    inlineHeader:{
        fontSize: 18,
        fontFamily: 'Rammetto-One',
        color:yellow
    },
    satisfied:{
        marginTop:30,

    },
    inputField: {
        paddingHorizontal: 10,
        margin: 10,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: {height: 1, width: 1}, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
        flexDirection: 'row',
    },
    hiddenInput:{
        flexDirection: 'row'
    },
    changeButton:{
        margin: 10,
        height: 30,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: yellow,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: {height: 1, width: 1}, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
        flexDirection: 'row',
    },
    changeButtonText:{
        color: '#ffffff',
        fontSize: 13,
        fontWeight: 'bold'
    },
    passwordChange:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    instructionField: {
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    greenContainer: {
        backgroundColor: lightGreen,
        flex: 1,
        justifyContent: 'center',
    },
    primaryButton: {
        margin: 10,
        height: 35,
        width: 231,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: yellow,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: {height: 1, width: 1}, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
        flexDirection: 'row',
    },
    resetButton:{
        backgroundColor:'white',
        margin: 10,
        height: 35,
        width: 231,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resetButtontext:{
        color: 'black',
        fontFamily: 'Roboto',
        fontSize: 18
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    whiteCenteredText: {
        color: '#ffffff',
        textAlign: 'center'
    },
    logoWhite: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 28,
        fontFamily: 'Rammetto-One',		/*remove this after the loading page is created, it works fine, all it needs is just some time to load haha=>resolved*/
    },
    barCodeScanner: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    button: {
        margin: 8,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: yellow,
        textAlign: 'center',
    },
    splash: {
        padding: 20,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo_splash: {
        width: 300,
        height: 100,
        marginTop: 50
    },
    splashLoading:{
        marginTop:15,
    },
    specialFont: {
        fontFamily: 'Rammetto-One',
        fontSize: 40,
        color: darkGreen,
        letterSpacing: -5,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: {height: 1, width: 1}, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
        flexDirection: 'row',
    },
    smallFont: {
        fontFamily: 'Rammetto-One',
        color: darkGreen,
        fontSize: 18
    },
    bigFont: {
        fontFamily: 'Rammetto-One',
        color: 'black',
        fontSize: 40
    },
    poweredBy: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150
    },
    distanceField: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    normalText: {
        fontSize: 20,
        fontFamily: 'Roboto'
    },
    inputFieldText: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 16,
        marginTop: 10,
    },
    instructIcon: {
        fontSize: 30,
        color: yellow,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15

    },
    buttonDiv: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonDivLoc: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:30,
    },
    instructionContainer: {
        borderWidth: 2,
        borderColor: yellow,

    },

    userInstructs: {
        fontSize:18,
        fontFamily: 'Roboto'
    },
    locInstructs:{
        fontSize:15,
        fontFamily: 'Roboto'
    },
    errorInstruct: {
        fontSize:18,
        fontFamily: 'Roboto-Bold',
        margin: 15,
    },

    loading:{
        marginBottom:40,
    },
    highlighting:{
        fontWeight: 'bold',
        fontSize: 18
    },
    firstThreeLeader:{
        flexDirection: 'row',
        marginBottom:5,
    },
    leaderBoard:{
        marginLeft: 5
    },
    inLineLeader:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',

    },
    leaderBoardText: {
        fontSize:20,
        fontFamily:'Roboto-Bold',
    },
    followingLeader:{
        flexDirection: 'row',
        marginLeft: 59,
        marginBottom: 30,
        marginTop:10,
    },
    profileButton:{
        height:40,
        width:40,
        marginRight:10
    },
    pictureFrame:{
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: 10

    },
    uploadedImage:{
        height: 300,
        width:300,

    },
    profileContent:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 10,
    },
    profileText:{
        fontFamily: 'Roboto-Bold',
        fontSize:18
    },
    changeIcon:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    editableItems:{
        marginBottom:15,
        marginTop: 5
    },
    listTitle:{
        fontFamily: 'Roboto',
        fontSize:18
    },
    subTitle:{
        fontFamily: 'Roboto',
        fontSize:15
    },
    listContainer:{
        margin:15,
    },
    restImageContainer:{
        marginTop:15,
        marginBottom:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    restImage: {
        width:300,
        height:200,
    },
    descpRestText:{
        textAlign:'center',
        fontSize:18,
        fontFamily: 'Roboto-Italic'
    },
    descpRest:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
    },
    restLink:{
        textAlign:'center',
        fontSize:18,
        fontFamily: 'Roboto-Bold'
    },
    pictureGallery:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5
    }

});
