import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Leaderboard from "../Components/Leaderboard";


const LeaderBoardScreen = props => {
  return (
    <View>
    <Leaderboard
    />
    </View>
  )
};
LeaderBoardScreen.navigationOptions = {
  title: 'LeaderBoard',
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#417110'
  }
};

export default LeaderBoardScreen;
