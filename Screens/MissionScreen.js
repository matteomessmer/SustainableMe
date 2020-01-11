import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mission from '../Components/Mission';


const MissionScreen = props => {
  return (
    <View>
    <Mission
        onTransport={()=>props.navigation.navigate('MissionTransport')}
        onEnvironment={()=>props.navigation.navigate('MissionsEnvironmentList')}
        onLocation={()=>props.navigation.navigate('MissionLocationList')}
        onRestaurant={()=>props.navigation.navigate('MissionsRestaurantList')}
    />
    </View>
  )
};
MissionScreen.navigationOptions = {
  title: 'Missions',
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#417110'
  },
  headerTitleStyle: {
    fontFamily: 'Rammetto-One',
    fontWeight: "200"
  }
};


export default MissionScreen;
