import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from '../Components/Home'

const HomeScreen = props => {
  return (
    <View>
    <Home />
    </View>
  )
};

HomeScreen.navigationOptions = {
  title: 'Home',
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#417110'
  }
};
export default HomeScreen;
