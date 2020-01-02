import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from "../Components/Profile";

const ProfileScreen = props => {
  return (
    <View>
      <Profile/>
   </View>
  )
};

ProfileScreen.navigationOptions = {
  title: 'Profile',
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#417110'
  }
};

export default ProfileScreen;
