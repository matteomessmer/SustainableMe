import React from 'react';
import {Text, View, ScrollView, Button, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';


export default class MissionCompleted extends React.Component {

//After the user completes a mission, the component is shown to let him know that he succeeded.
//A "thank you" message is shown and the user sees his total number of points after the completion
//of the mission. Moreover, he is able to see how many points are left till the next level.
//Additionally, he can go to the other missions to complete another one.
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
                        onPress={() => {
                            this.props.onOther()

                        }}
                    >
                        <Text style={styles.buttonText}>See other missions</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }


}
