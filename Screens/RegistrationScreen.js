import React from 'react';
import Registration from '../Components/Registration';
import {Subscribe} from 'unstated';
import ProfileContainer from '../Container/ProfileContainer';

const RegistrationScreen = props => {
	return (
		<Subscribe to={[ProfileContainer]}>
			{
				profileContainer => (
					<Registration
						register={(name, email, password)=>profileContainer.register(name, email, password)}
						login={()=>props.navigation.navigate('Login')}
					/>
				)
			}
		</Subscribe>
	)
}

export default RegistrationScreen;
