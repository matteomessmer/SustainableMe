import * as React from 'react';
import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    ImageIconStyle :{
        height: 60,
        width: 60,

    },
    container: {
        padding: 50,
        marginTop: 20,
    },
    missionButton:{
        marginBottom: 10,
        borderWidth:2,
        borderColor: '#417110',
        padding: 10,
        justifyContent:'center',
        alignItems: 'center'
    },
    titleMission: {
        marginTop:5,
        fontSize:18,
    },
    logoComponent:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop:10,
    },
    logoIcon:{
        height:150,
        width:150
    },
    logoTitle: {
        fontSize: 24,
    },
    inputField: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        margin: 10
    },
    instructionField: {
        padding:10,
        marginTop:10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems:'center'
    }
});
