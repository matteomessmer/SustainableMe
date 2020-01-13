import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ForgotPassword from '../Components/ForgotPassword';
import {Subscribe} from 'unstated';
import ProfileContainer from '../Container/ProfileContainer';

const ForgotPasswordScreen = props => {
	return (
		<Subscribe to={[ProfileContainer]}>
			{
				profileContainer => (
					<ForgotPassword
						resetPassword={(email)=>profileContainer.resetPassword(email)}
						redirect={()=>props.navigation.navigate('Login')}
					/>
				)
			}
		</Subscribe>
	)
}

export default ForgotPasswordScreen;
