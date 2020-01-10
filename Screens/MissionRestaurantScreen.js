import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MissionRestaurant from '../Components/MissionRestaurant'

const MissionRestaurantScreen = props => {

    const restaurant = props.navigation.getParam('restaurant');

  return (
    <View>
    <MissionRestaurant mission={restaurant}/>
    </View>
  )
}

export default MissionRestaurantScreen;
