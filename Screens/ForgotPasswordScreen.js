import React from 'react';
import ForgotPassword from '../Components/ForgotPassword';
import {Subscribe} from 'unstated';
import ProfileContainer from '../Container/ProfileContainer';

//screen component that calls the ForgotPassword component and passes callback functions of the
//Profilecontainer, which is used when the user wants to reset his password. The email address is used to
//check which user needs to reset the password. The second callback is just for navigation.
const ForgotPasswordScreen = props => {
    return (
        <Subscribe to={[ProfileContainer]}>
            {
                profileContainer => (
                    <ForgotPassword
                        resetPassword={(email) => profileContainer.resetPassword(email)}
                        redirect={() => props.navigation.navigate('Login')}
                    />
                )
            }
        </Subscribe>
    )
};

export default ForgotPasswordScreen;
