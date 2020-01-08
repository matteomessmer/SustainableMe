import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SpotlightMission = props => {

    const picture = props.computePicture(props.type);

//TODO: Change action based on type of the mission

    return (
        <View>

            <TouchableOpacity
                style={styles.missionButton}
                onPress={() => props.onEnvironment()}
            >

                <Ionicons name={picture} size={50} color={'#417110'}/>

                <Text style={styles.titleMission}>{props.name}</Text>
                <Text>{props.points}</Text>
            </TouchableOpacity>

        </View>
    )


}

export default SpotlightMission;
