import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

//component to display all different categories of missions that are available as
//buttons the user can click on which calls a callback function for navigation passed as props.
export default class Mission extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.missionButton}
                    onPress={this.props.onTransport}
                >

                    <Ionicons name={'ios-bicycle'} size={50} color={'#417110'}/>
                    <Text style={styles.titleMission}>TRANSPORT</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.missionButton}
                    onPress={this.props.onEnvironment}
                >
                    <Ionicons name={'md-globe'} size={50} color={'#417110'}/>
                    <Text style={styles.titleMission}>ENVIRONMENT</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.missionButton}
                    onPress={this.props.onLocation}
                >
                    <Ionicons name={'ios-pin'} size={50} color={'#417110'}/>
                    <Text style={styles.titleMission}>LOCATION</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.missionButton}
                    onPress={this.props.onRestaurant}
                >
                    <Ionicons name={'ios-restaurant'} size={50} color={'#417110'}/>
                    <Text style={styles.titleMission}>RESTAURANT</Text>
                </TouchableOpacity>

            </View>
        )
    }

}
