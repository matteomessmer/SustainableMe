import React from 'react';
import {View } from 'react-native';
import MissionLocationList from '../Components/MissionLocationList';
import {Subscribe} from "unstated";
import MissionLocationContainer from "../Container/MissionLocationContainer";

//screen to call the list component for location missions.
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
    },
    headerTitleStyle: {
        fontFamily: 'Rammetto-One',
        fontWeight: "200"
    }
};

export default MissionLocationListScreen;
