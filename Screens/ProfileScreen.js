import React from 'react';
import Profile from "../Components/Profile";
import {Subscribe} from 'unstated';
import ProfileContainer from '../Container/ProfileContainer';
import PointsContainer from "../Container/PointsContainer";
import UserContainer from "../Container/UserContainer";

/*
  Screen to display a users profile. Various methods are passed to display infos regarding the user as well as methods to alter these infos.
*/
const ProfileScreen = props => {
    return (
        <Subscribe to={[ProfileContainer, UserContainer]}>
            {(profileContainer, usercontainer) => (
                <Profile
                    user={profileContainer.state.user}
                    editPassword={(id, oldPassword, newPassword) => profileContainer.editPassword(id, oldPassword, newPassword)}
                    editUser={(user) => profileContainer.editUser(user)}
                    resetUser={()=>profileContainer.resetUser()}
                    logout={() => props.navigation.navigate('Login')}
                    onGallery={()=>props.navigation.navigate('Gallery')}
                    editImage={()=>profileContainer.editImage()}
                    whatLevel={(points)=>usercontainer.whatLevel(points)}
                />
            )
            }
        </Subscribe>
    )
};

ProfileScreen.navigationOptions = {
    title: 'Profile',
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    },
	headerTitleStyle: {
		fontFamily: 'Rammetto-One',
		fontWeight: "200"
	},
};

export default ProfileScreen;
