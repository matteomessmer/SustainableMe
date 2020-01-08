import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MissionRestaurant from '../Components/MissionRestaurant'

const MissionRestaurantScreen = props => {

    const nameOfMission = props.navigation.getParam('mission');

  return (
    <View>
    <MissionRestaurant mission={nameOfMission}/>
    </View>
  )
}

export default MissionRestaurantScreen;
