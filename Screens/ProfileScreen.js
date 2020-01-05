import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from "../Components/Profile";
import {Subscribe} from 'unstated';
import ProfileContainer from '../Container/ProfileContainer';

const ProfileScreen = props => {
  return (
    <Subscribe to={[ProfileContainer]}>
			{
				profileContainer => (
        <Profile
          user={profileContainer.state.user}
          editPassword={(id, password)=>profileContainer.editPassword(id, password)}
          editUser={(user)=>profileContainer.editUser(user)}
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
