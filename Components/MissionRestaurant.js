import React from 'react';
import {Text, View, ScrollView, Button, Image} from 'react-native';
import {styles} from '../styles.js';

export default class MissionRestaurant extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Image
                    style={{width: 400, height: 200}}
                    source={{uri: this.props.mission.image}}
                />
                <Text>{this.props.mission.name}</Text>
                <Text>{this.props.mission.address}</Text>
                <Text>{this.props.mission.points}</Text>
                <Text>{this.props.mission.qr}</Text>
                <Text>{this.props.mission.url}</Text>
                <Text>{this.props.mission.description}</Text>
            </View>
        )
    }

}
