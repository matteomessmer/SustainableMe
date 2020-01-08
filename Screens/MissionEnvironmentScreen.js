import React from 'react';
import { View } from 'react-native';
import MissionEnvironment from '../Components/MissionEnvironment';
import { Subscribe } from 'unstated';
import EnvironmentContainer from '../Container/EnvironmentContainer';


const MissionEnvironmentScreen = props => {

  const nameOfMission = props.navigation.getParam('mission');

  return (
    <View>
      <Subscribe to={[EnvironmentContainer]}>
        {environmentcontainer => (
          <MissionEnvironment
            uploadPhoto={environmentcontainer.uploadPhoto}
            image={environmentcontainer.state.image}
            nameOfMission={nameOfMission}
            confirm={(nameOfMission)=> props.navigation.navigate('MissionCompleted', {mission: nameOfMission})}
            clearPage={environmentcontainer.clearPage}
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
