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
          editPassword={(id, oldPassword, newPassword)=>profileContainer.editPassword(id, oldPassword, newPassword)}
          editUser={(user)=>profileContainer.editUser(user)}
          logout={()=>props.navigation.navigate('Login')}
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
