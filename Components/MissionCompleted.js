import React from 'react';
import {Text, View, ScrollView, Button, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import {Subscribe} from 'unstated';
import ProfileContainer from '../Container/ProfileContainer';
import UserContainer from '../Container/UserContainer';

export default class MissionCompleted extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.logoComponent}>
                    <Text style={styles.logoTitle}>Thank you!</Text>
                    <Text>You have just completed the{'\n'}
                    {this.props.mission}{'\n'}
                    mission!</Text>
                    <Image
                        source={require('../images/completed.png')}
                        style={{height: 200, width: 200}}
                    />
                </View>

                <Subscribe to={[ProfileContainer, UserContainer]}>
                    {(profileContainer, userContainer) => (
                      <Text>Now you have a total of{'\n'}{profileContainer.state.user.points} points.{'\n'}{'\n'}
                      {userContainer.computePointsLeft(profileContainer.state.user.points)} points left{'\n'}
                      to reach next level</Text>
                    )
                    }
                </Subscribe>


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
