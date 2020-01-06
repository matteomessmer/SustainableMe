import React from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SpotlightMission = props => {

        return (
          <View>

          <TouchableOpacity
              style={styles.missionButton}
          >
              <Text style={styles.titleMission}>{props.name}</Text>
              <Text>{props.points} with type {props.type}</Text>
          </TouchableOpacity>

            </View>
        )


}

export default SpotlightMission;
