import React from 'react';
import {Provider} from 'unstated';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import RegistrationScreen from './Screens/RegistrationScreen.js';
import HomeScreen from './Screens/HomeScreen.js';
import MissionLocationScreen from './Screens/MissionLocationScreen.js';
import MissionEnvironmentScreen from './Screens/MissionEnvironmentScreen.js';
import MissionRestaurantScreen from './Screens/MissionRestaurantScreen.js';
import MissionTransportScreen from './Screens/MissionTransportScreen.js';
import MissionCompletedScreen from './Screens/MissionCompletedScreen.js';
import MissionScreen from './Screens/MissionScreen.js';
import LoginScreen from './Screens/LoginScreen.js';
import LeaderBoardScreen from './Screens/LeaderboardScreen';
import ProfileScreen from './Screens/ProfileScreen';
import QR_CODE_Screen from './Screens/QR_CODE_Screen';

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
  QR_CODE: QR_CODE_Screen,

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
        <Provider>
          <AppContainer
          />
        </Provider>
    );
  }
}
