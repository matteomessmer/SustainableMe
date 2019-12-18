import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RegistrationScreen from 'Screens/RegistrationScreen.js';


import HomeScreen from 'Screens/HomeScreen.js';
import MissionLocationScreen from 'Screens/MissionLocationScreen.js';
import MissionEnvironmentScreen from 'Screens/MissionEnvironmentScreen.js';
import MissionRestaurantScreen from 'Screens/MissionRestaurantScreen.js';
import MissionTransportScreen from 'Screens/MissionTransportScreen.js';
import MissionCompletedScreen from 'Screens/MissionCompletedScreen.js';
import MissionScreen from 'Screens/MissionScreen.js';
import LoginScreen from 'Screens/LoginScreen.js';

const routes = {
  Login: LoginScreen,
  Registration: RegistrationScreen,
  Home: HomeScreen,
  MissionLocation: MissionLocationScreen,
  MissionEnvironment: MissionEnvironmentScreen,
  MissionRestaurant: MissionRestaurantScreen,
  MissionTransport: MissionTransportScreen,
  MissionCompleted: MissionCompletedScreen,
  Mission: MissionScreen,
};

const options = {
  initialRouteName: 'Login'
 };

const AppNavigator = createStackNavigator(routes, options);

const tabRoutes = {
  Home: AppNavigator,
  Mission: MissionScreen,
  LeaderBoard: LeaderBoardScreen,
  Profile: ProfileScreen,
};

const TabNavigator = createBottomTabNavigator(tabRoutes);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}
