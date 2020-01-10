import React from 'react';
import Profile from "../Components/Profile";
import {Subscribe} from 'unstated';
import ProfileContainer from '../Container/ProfileContainer';
import PointsContainer from "../Container/PointsContainer";

const ProfileScreen = props => {
    return (
        <Subscribe to={[ProfileContainer, PointsContainer]}>
            {(profileContainer,pointscontainer) => (
                <Profile
                    user={profileContainer.state.user}
                    newPoints={pointscontainer.state.totalPoints}
                    editPassword={(id, oldPassword, newPassword) => profileContainer.editPassword(id, oldPassword, newPassword)}
                    editUser={(user) => profileContainer.editUser(user)}
                    logout={() => props.navigation.navigate('Login')}
                    onGallery={()=>props.navigation.navigate('Gallery')}
                    editImage={()=>profileContainer.editImage()}
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
    }
};

export default ProfileScreen;
