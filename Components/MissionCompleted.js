import React from 'react';
import {Text, View, ScrollView, Button, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';


export default class MissionCompleted extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.logoComponent}>
                    <Text style={styles.subHeaderRammetto}>Thank you!</Text>
                    <Text style={styles.inputFieldText}>You have just completed the{'\n'}
                        {this.props.mission}{'\n'}
                        mission!</Text>
                    <Image
                        source={require('../images/completed.png')}
                        style={{height: 200, width: 200}}
                    />
                </View>

                <View>
                    <Text style={styles.inputFieldText}>Now you have a total
                        of{'\n'} {this.props.totalPoints ?
                            <Text> You have a total of {this.props.totalPoints}</Text>
                            :
                            null
                        }{'\n'}{'\n'}
                        You need {this.props.pointsLeft(this.props.totalPoints)} points{'\n'}
                        to reach next level</Text>
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
