import React from 'react';
import { View } from 'react-native';
import MissionEnvironment from '../Components/MissionEnvironment';
import { Subscribe } from 'unstated';
import EnvironmentContainer from '../Container/EnvironmentContainer';


const MissionEnvironmentScreen = props => {
  return (
    <View>
      <Subscribe to={[EnvironmentContainer]}>
        {environmentcontainer => (
          <MissionEnvironment
            uploadPhoto={environmentcontainer.uploadPhoto}
            takePhoto={environmentcontainer.takePhoto}
            image={environmentcontainer.state.image}
          />
        )}
      </Subscribe>
    </View>
  )
};
MissionEnvironmentScreen.navigationOptions = {
    title: 'Environment Mission',
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    }
};

export default MissionEnvironmentScreen;
