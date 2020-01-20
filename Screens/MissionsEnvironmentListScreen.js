import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Subscribe} from "unstated";
import EnvironmentContainer from "../Container/EnvironmentContainer";
import MissionsEnvironmentList from '../Components/MissionsEnvironmentList';

//Screen to show the list of environment missions available
const MissionsEnvironmentListScreen = props => {
	return (
		<View>
			<Subscribe to={[EnvironmentContainer]}>
				{
					environmentContainer => (
						<MissionsEnvironmentList
							getEnvironmentMissions={environmentContainer.getEnvironmentMissions}
							onMissionClick={(mission, description, points)=>props.navigation.navigate('MissionEnvironment', {mission: mission, description: description, points: points})}
						/>
					)
				}
			</Subscribe>
		</View>
	)
}

//Navigation options for the header
MissionsEnvironmentListScreen.navigationOptions = {
    title: 'Environment missions',
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    },
    headerTitleStyle: {
        fontFamily: 'Rammetto-One',
        fontWeight: "200"
    }
};

export default MissionsEnvironmentListScreen;
