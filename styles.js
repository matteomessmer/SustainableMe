import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import * as Font from 'expo-font';

const darkGreen = '#417110';
const lightGreen = '#70A040';
const yellow = '#F2CB05';

Font.loadAsync({
    'Rammetto-One': require('./assets/fonts/RammettoOne-Regular.ttf'),
});

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
        padding: 50,
        marginTop: 20,
    },
    missionButton: {
        marginBottom: 10,
        borderWidth: 2,
        borderColor: darkGreen,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleMission: {
        marginTop: 5,
        fontSize: 18,
    },
    logoComponent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    logoIcon: {
        height: 150,
        width: 150
    },
    logoTitle: {
        fontSize: 24,
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
    splash:{
        padding: 20,
        height: '100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    logo_splash:{
        width: 300,
        height:100,
        marginTop: 50
    },
    specialFont:{
        fontFamily:'Rammetto-One',
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
    smallFont:{
        fontFamily:'Rammetto-One',
        color: darkGreen,
        fontSize: 18
    },
    bigFont: {
        fontFamily:'Rammetto-One',
        color: 'black',
        fontSize: 40
    },
    poweredBy:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 150
    }

});
