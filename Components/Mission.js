import React from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';


export default class Mission extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.missionButton}
                    onPress={this.props.onTransport}
                >

                    <Image
                        source={require('../images/bike.png')}
                        style={styles.ImageIconStyle}
                    />
                    <Text style={styles.titleMission}>TRANSPORT</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.missionButton}
                    onPress={this.props.onEnvironment}
                >
                    <Image
                        source={require('../images/environment.png')}
                        style={styles.ImageIconStyle}
                    />
                    <Text style={styles.titleMission}>ENVIRONMENT</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.missionButton}
                    onPress={this.props.onLocation}
                >
                    <Image
                        source={require('../images/location.png')}
                        style={styles.ImageIconStyle}
                    />
                    <Text style={styles.titleMission}>LOCATION</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.missionButton}
                    onPress={this.props.onRestaurant}
                >
                    <Image
                        source={require('../images/restaurant.png')}
                        style={styles.ImageIconStyle}
                    />
                    <Text style={styles.titleMission}>RESTAURANT</Text>
                </TouchableOpacity>

            </View>
        )
    }

}
