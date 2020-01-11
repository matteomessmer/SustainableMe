import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MissionLocation from "../Components/MissionLocation";
import {Subscribe} from "unstated";
import MissionLocationContainer from '../Container/MissionLocationContainer';
import PointsContainer from '../Container/PointsContainer';
import ProfileContainer from '../Container/ProfileContainer';

const MissionLocationScreen = props => {

  const location = props.navigation.getParam('location');

  return (
    <View>
      <Subscribe to={[MissionLocationContainer, PointsContainer, ProfileContainer]}>
        { (missionlocationcontainer, pointscontainer, profilecontainer) => (
          <MissionLocation
            location={location}
            pickAndCheckPosition={(lat, lon) => missionlocationcontainer.pickAndCheckPosition(lat, lon)}
            setPoints={(points) => pointscontainer.setPoints(points)}
            creditPointsUser={()=>pointscontainer.creditPointsUser(pointscontainer.state.points, profilecontainer.state.user.id)}
            onValidation={() => props.navigation.navigate('MissionCompleted')}
          />
        )}
      </Subscribe>
    </View>
  )
}

export default MissionLocationScreen;
