import React from 'react';
import {Text, View, ScrollView, Button, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import {Subscribe} from 'unstated';
import ProfileContainer from '../Container/ProfileContainer';
import UserContainer from '../Container/UserContainer';
import PointsContainer from "../Container/PointsContainer";
//TODO: the subscribing could be done also already in the props, i.e., in the MissionCompletedScreen
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

                <Subscribe to={[ProfileContainer, UserContainer, PointsContainer]}>
                    {(profileContainer, userContainer, pointscontainer) => (
                        <Text style={styles.inputFieldText}>Now you have a total
                            of{'\n'}{pointscontainer.state.totalPoints} points.{'\n'}{'\n'}
                            You need {userContainer.computePointsLeft(profileContainer.state.points)} points{'\n'}
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
