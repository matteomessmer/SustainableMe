import React from 'react';
import Registration from '../Components/Registration';
import {Subscribe} from 'unstated';
import ProfileContainer from '../Container/ProfileContainer';

//screen to call the registration component. It passes a navigation callback, which is called when the user registrated or clicks on "already have an account".
//It also passes the callback that registers the user.
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
