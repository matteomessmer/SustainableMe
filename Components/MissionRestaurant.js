import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {styles} from '../styles.js';

export default class MissionRestaurant extends React.Component {

    constructor(props) {
        super(props);
        this.props.setPoints(this.props.mission.points);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.restImageContainer}>
                    <Text style={styles.subHeaderRammetto}>{this.props.mission.name}</Text>
                    <Image
                        style={styles.restImage}
                        source={{uri: this.props.mission.image}}
                    />
                    <Text style={styles.subsubHeaderRammetto}> Points: {this.props.mission.points}</Text>
                </View>

                <Text style={styles.environsubTitle}>{this.props.mission.address + '\n'}</Text>
                <Text style={styles.restLink}>{this.props.mission.url}</Text>

                <Text>{' ' + this.props.mission.qr}</Text>


                <View style={styles.descpRest}>
                    <Text style={styles.descpRestText}>{this.props.mission.description}</Text>
                </View>

                <View style={styles.buttonDiv}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => {

                            this.props.onQR(this.props.mission.qr, this.props.mission.name, this.props.isSpot)
                        }}
                    >
                        <Text style={styles.buttonText}>Scan Code</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

}
