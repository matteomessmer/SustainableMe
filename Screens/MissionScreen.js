import React from 'react';
import {View} from 'react-native';
import Mission from '../Components/Mission';

//screen to call the mission component which passes navigation callbacks to the component.
//this callbacks will be then used when a user clicks on the button for a specific category of missions.
const MissionScreen = props => {
    return (
        <View>
            <Mission
                onTransport={() => props.navigation.navigate('MissionTransport')}
                onEnvironment={() => props.navigation.navigate('MissionsEnvironmentList')}
                onLocation={() => props.navigation.navigate('MissionLocationList')}
                onRestaurant={() => props.navigation.navigate('MissionsRestaurantList')}
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
