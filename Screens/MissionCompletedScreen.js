import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MissionCompleted from from '../Components/MissionCompleted';

const MissionCompletedScreen = props => {
  return (
    <View>
    //Know which mission has been completed
    <MissionCompleted onOther={() => props.navigation.navigate("Mission")}/>
    </View>
  )
}

export default MissionCompletedScreen;
