import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MissionLocation from "../Components/MissionLocation";
import {Subscribe} from "unstated";
import MissionLocationContainer from '../Container/MissionLocationContainer';

const MissionLocationScreen = props => {
  return (
    <View>
      <Subscribe to={[MissionLocationContainer]}>
        { (missionlocationcontainer) => (
          <MissionLocation
            getLocationMissions={() => missionlocationcontainer.getLocationMissions()}
            pickAndCheckPosition={(lat, lon) => missionlocationcontainer.pickAndCheckPosition(lat, lon)}
            onValidation={() => props.navigation.navigate('MissionCompleted')}
          />
        )}
      </Subscribe>
    </View>
  )
}

export default MissionLocationScreen;
