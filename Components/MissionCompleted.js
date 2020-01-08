import React from 'react';
import {Text, View, ScrollView, Button, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';

//TODO: reset missions after completion
export default class MissionCompleted extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.logoComponent}>
                    <Text style={styles.logoTitle}>Thank you!</Text>
                    <Text> {this.props.mission} </Text>
                    <Image
                        source={require('../images/completed_75.png')}
                        style={{height: 150, width: 250}}
                    />
                </View>


                <View style={styles.buttonDiv}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => this.props.onOther()}
                    >
                        <Text style={styles.buttonText}>See other missions</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }


}
