import React from 'react';
import Login from '../Components/Login';
import {Subscribe} from 'unstated';
import ProfileContainer from '../Container/ProfileContainer';

//screen to call the Login component. callback functions for login and navigation options are passed as props.
const LoginScreen = props => {
	return (
		<Subscribe to={[ProfileContainer]}>
			{
				profileContainer => (
					<Login
						login={(email, password)=>profileContainer.login(email, password)}
						onLogin={()=>props.navigation.navigate('App')}
						onForgotPassword={()=>props.navigation.navigate('ForgotPassword')}
						onRegistration={()=>props.navigation.navigate('Registration')}
					/>
				)
			}
		</Subscribe>
	)
}

export default LoginScreen;
