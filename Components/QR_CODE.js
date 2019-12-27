import React from 'react';
import {Button, View, StyleSheet, Alert} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import {styles} from '../styles.js';


export default class QR_CODE extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            scanned: false,
            hasPermission: null,
        }
    }

    //TODO: add props for displaying line information after scanning.
    handleBarCodeScanned=({type, data})=>{
        this.setState({scanned:true});
        if(data==='SustainableMe'){
            Alert.alert('Congratulations your code is valid! Thank you for using ...');
            this.props.onValidation();
        }else {
            Alert.alert('Your code is not valid! Please try again');
        }

    };

    askPermission =async ()=>{
        const {status}=await BarCodeScanner.requestPermissionsAsync();
        if(status==='granted'){
            this.setState({hasPermission: true})
        };
    };

    componentDidMount() {
        this.askPermission();
    }



    render() {
        return (
            <View style={styles.barCodeScanner}>

                <BarCodeScanner
                    onBarCodeScanned={this.state.scanned ? undefined: this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {this.state.scanned && (
                    <Button title={'Tap to Scan Again'} onPress={() => {
                        this.setState({scanned:false})
                    }} />
                )}
            </View>
        )
    }
}