import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MissionLocationList from '../Components/MissionLocationList';
import {Subscribe} from "unstated";
import MissionLocationContainer from "../Container/MissionLocationContainer";

const MissionLocationListScreen = props => {
	return (
		<View>
			<Subscribe to={[MissionLocationContainer]}>
				{
					missionlocationContainer => (
						<MissionLocationList
							getLocationMissions={missionlocationContainer.getLocationMissions}
							onLocationClick={(location)=>props.navigation.navigate('MissionLocation', {location: location})}
						/>
					)
				}
			</Subscribe>
		</View>
	)
}
MissionLocationListScreen.navigationOptions = {
    title: 'Locations',
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    }
};

export default MissionLocationListScreen;
