import React from 'react';
import { View } from 'react-native';
import MissionEnvironment from '../Components/MissionEnvironment';
import { Subscribe } from 'unstated';
import EnvironmentContainer from '../Container/EnvironmentContainer';
import PictureContainer from "../Container/PictureContainer";


const MissionEnvironmentScreen = props => {

  const nameOfMission = props.navigation.getParam('mission');

  return (
    <View>
      <Subscribe to={[EnvironmentContainer, PictureContainer]}>
        {(environmentcontainer, picturecontainer) => (
          <MissionEnvironment
            uploadPhoto={environmentcontainer.uploadPhoto}
            image={environmentcontainer.state.image}
            nameOfMission={nameOfMission}
            confirm={(nameOfMission)=> props.navigation.navigate('MissionCompleted', {mission: nameOfMission})}
            clearPage={environmentcontainer.clearPage}
            onSave={picture=>picturecontainer.savePicture(picture)}
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
