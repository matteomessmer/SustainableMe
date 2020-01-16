import React from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';

//After the user completes a mission, the component is shown to let him know that he succeeded.
//A "thank you" message is shown and the user sees his total number of points after the completion
//of the mission. Moreover, he is able to see how many points are left till the next level.
//Additionally, he can go to the other missions to complete another one.
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
                    <Text style={styles.inputFieldText}>{'\n'} {this.props.totalPoints ?
                            <Text>You have a total of {this.props.totalPoints} points</Text>
                            :
                            null
                        }{'\n'}{'\n'}
						{ this.props.pointsLeft(this.props.totalPoints)>=0?
							 <Text> You need {this.props.pointsLeft(this.props.totalPoints)} points{'\n'}
							to reach next level </Text> 
						:
						null
						}
						</Text>
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
