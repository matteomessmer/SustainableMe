import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Subscribe} from "unstated";
import EnvironmentContainer from "../Container/EnvironmentContainer";
import MissionsEnvironmentList from '../Components/MissionsEnvironmentList';

const MissionsEnvironmentListScreen = props => {
	return (
		<View>
			<Subscribe to={[EnvironmentContainer]}>
				{
					environmentContainer => (
						<MissionsEnvironmentList
							getEnvironmentMissions={environmentContainer.getEnvironmentMissions}
							onMissionClick={(mission, description)=>props.navigation.navigate('MissionEnvironment', {mission: mission, description: description})}
						/>
					)
				}
			</Subscribe>
		</View>
	)
}
MissionsEnvironmentListScreen.navigationOptions = {
    title: 'Environment missions',
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    }
};

export default MissionsEnvironmentListScreen;
