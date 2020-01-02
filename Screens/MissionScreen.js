import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mission from '../Components/Mission';
import { HeaderBackButton } from 'react-navigation';


const MissionScreen = props => {
  return (
    <View>
    <Mission
        onTransport={()=>props.navigation.navigate('MissionTransport')}
        onEnvironment={()=>props.navigation.navigate('MissionEnvironment')}
        onLocation={()=>props.navigation.navigate('MissionLocation')}
        onRestaurant={()=>props.navigation.navigate('MissionRestaurant')}
    />
    </View>
  )
};
MissionScreen.navigationOptions = {
  title: 'Missions',
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#417110'
  }
};
export default MissionScreen;
