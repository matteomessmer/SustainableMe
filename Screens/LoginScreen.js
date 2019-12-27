import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from '../Components/Login';
import {Subscribe} from 'unstated';
import ProfileContainer from '../Container/ProfileContainer';

const LoginScreen = props => {
	return (
		<Subscribe to={[ProfileContainer]}>
			{
				profileContainer => (
					<Login login={(email, password)=>profileContainer.login(email, password)}/>
				)
			}
		</Subscribe>
	)
}

export default LoginScreen;
