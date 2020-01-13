import React from 'react';
import {Provider} from 'unstated';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import RegistrationScreen from './Screens/RegistrationScreen.js';
import HomeScreen from './Screens/HomeScreen.js';
import MissionLocationListScreen from './Screens/MissionLocationListScreen.js';
import MissionLocationScreen from './Screens/MissionLocationScreen.js';
import MissionEnvironmentScreen from './Screens/MissionEnvironmentScreen.js';
import MissionsEnvironmentListScreen from './Screens/MissionsEnvironmentListScreen.js';
import MissionsRestaurantListScreen from './Screens/MissionsRestaurantListScreen.js';
import MissionRestaurantScreen from './Screens/MissionRestaurantScreen.js';
import MissionTransportScreen from './Screens/MissionTransportScreen.js';
import MissionCompletedScreen from './Screens/MissionCompletedScreen.js';
import MissionScreen from './Screens/MissionScreen.js';
import LoginScreen from './Screens/LoginScreen.js';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen.js';
import LeaderBoardScreen from './Screens/LeaderboardScreen';
import ProfileScreen from './Screens/ProfileScreen';
import QR_CODE_Screen from './Screens/QR_CODE_Screen';
import WelcomeSplashScreen from "./Screens/WelcomeSplashScreen";
import GalleryScreen from './Screens/GalleryScreen';

const routesM=({
        Home: HomeScreen,
        Mission: MissionScreen,
        MissionLocationList: MissionLocationListScreen,
        MissionLocation: MissionLocationScreen,
        MissionEnvironment: MissionEnvironmentScreen,
        MissionsEnvironmentList: MissionsEnvironmentListScreen,
        MissionsRestaurantList: MissionsRestaurantListScreen,
        MissionRestaurant: MissionRestaurantScreen,
        MissionTransport: MissionTransportScreen,
        MissionCompleted: MissionCompletedScreen,
        QR_CODE: QR_CODE_Screen,
    }
);
const optionsMissions = {
    initialRouteName: 'Mission'
};

const MissionNavigator = createStackNavigator(routesM, optionsMissions);

const routesInital = {
    Home: HomeScreen,
    Mission: MissionScreen,
    MissionLocation: MissionLocationScreen,
    MissionLocationList: MissionLocationListScreen,
    MissionEnvironment: MissionEnvironmentScreen,
    MissionRestaurant: MissionRestaurantScreen,
    MissionsRestaurantList: MissionsRestaurantListScreen,
    MissionTransport: MissionTransportScreen,
    MissionCompleted: MissionCompletedScreen,
    QR_CODE: QR_CODE_Screen,

};
const optionsInitial = {
    initialRouteName: 'Home'
};
const AppNavigator = createStackNavigator(routesInital, optionsInitial);

const routesL=({
    LeaderBoard: LeaderBoardScreen
});

const optionsLeader={
    initialRouteName: 'LeaderBoard'
};

const LeaderNavigator=createStackNavigator(routesL, optionsLeader);

const routesP={
    Profile:ProfileScreen,
    Gallery: GalleryScreen
};

const optionsProfile={
    initialRouteName:'Profile'
};

const ProfileNavigator=createStackNavigator(routesP, optionsProfile);



const tabRoutes = {
    Home: AppNavigator,
    Mission: MissionNavigator,
    LeaderBoard: LeaderNavigator,
    Profile: ProfileNavigator,

};

const getIcon = (name, focused, tint) => {
    const color = focused ? tint : "white"
    return <Ionicons name={name} size={30} color={color}/>
};

AppNavigator.navigationOptions = {
    tabBarIcon: ({focused, tint}) => getIcon("ios-home", focused, '#F2CB05'),
};
MissionNavigator.navigationOptions = {
    tabBarIcon: ({focused, tint}) => getIcon("ios-rocket", focused, '#F2CB05'),
};
LeaderNavigator.navigationOptions = {
    tabBarIcon: ({focused, tint}) => getIcon("ios-people", focused, '#F2CB05'),
};
ProfileNavigator.navigationOptions = {
    tabBarIcon: ({focused, tint}) => getIcon("ios-person", focused, '#F2CB05'),
};

const TabNavigator = createBottomTabNavigator(tabRoutes, {
    tabBarOptions: {
        activeTintColor: '#F2CB05',
        inactiveTintColor: '#ffffff',
        style: {
            backgroundColor: '#417110'
        }
    }
});


const switchRoutes = {
    Welcome: WelcomeSplashScreen,
    Login: LoginScreen,
    Registration: RegistrationScreen,
	ForgotPassword: ForgotPasswordScreen,
    App: TabNavigator
};
const switchOptions = {
    initialRouteName: 'Welcome'
};

const InitialNavigator = createSwitchNavigator(switchRoutes, switchOptions)

const AppContainer = createAppContainer(InitialNavigator);

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
