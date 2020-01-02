import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {styles} from '../styles.js';
import * as Font from 'expo-font';

export default class WelcomeSplash extends React.Component {
    state={
        fontLoaded: false,

    };

    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => {
                    resolve('result')
                }, 4000
            )
        )
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Rammetto-One': require('../assets/fonts/RammettoOne-Regular.ttf'),
        }).then(()=>{
            this.setState({fontLoaded: true})
        });

        await Font.loadAsync({
            'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
        }).then(()=>{
           //console.log('Font loaded');
        });

        await Font.loadAsync({
            'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        }).then(()=>{
            //console.log('Font loaded');
        });




        const data = await this.performTimeConsumingTask();


        if (data !== null) {
           this.props.onTimeOut();
        }
    }

    render() {
        return (
            <View style={styles.splash}>
                {this.state.fontLoaded?
                    <Text style={styles.specialFont}>SustainableMe</Text>:null
                }

                <Image
                    source={require('../images/logoshort.jpg')}
                    style={styles.logo_splash}
                />

                {this.state.fontLoaded?
                    <View style={styles.poweredBy}>
                    <Text style={styles.smallFont}>powered by</Text>
                    <Text style={styles.bigFont}>Südtirol</Text>
                    </View>
                    : null
                }

            </View>
        )
    }

}