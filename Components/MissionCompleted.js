import React from 'react';
import {Text, View, ScrollView, Button, Image} from 'react-native';
import {styles} from '../styles.js';

const descriptionOfMission = "Public transportation mission"
//TODO: reset missions after completion
export default class MissionCompleted extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.logoComponent}>
                    <Text style={styles.logoTitle}>Thank you!</Text>
                    <Text> {descriptionOfMission} </Text>
                    <Image
                        source={require('../images/completed_75.png')}
                        style={{height: 150, width: 250}}
                    />
                </View>

                <Button
                    style={styles.button}
                    title="See other missions"
                    onPress={this.props.onOther}
                />

            </ScrollView>
        );
    }


}
