import React from 'react';
import { View } from 'react-native';
import MissionEnvironment from '../Components/MissionEnvironment';
import { Subscribe } from 'unstated';
import EnvironmentContainer from '../Container/EnvironmentContainer';
import PictureContainer from "../Container/PictureContainer";
import PointsContainer from "../Container/PointsContainer";
import ProfileContainer from "../Container/ProfileContainer";


const MissionEnvironmentScreen = props => {

  const nameOfMission = props.navigation.getParam('mission');
  const description = props.navigation.getParam('description');

  return (
    <View>
      <Subscribe to={[EnvironmentContainer, PictureContainer, PointsContainer, ProfileContainer]}>
        {(environmentcontainer, picturecontainer, pointscontainer, profilecontainer) => (
          <MissionEnvironment
            uploadPhoto={environmentcontainer.uploadPhoto}
            image={environmentcontainer.state.image}
            nameOfMission={nameOfMission}
            description={description}
            confirm={(nameOfMission)=> props.navigation.navigate('MissionCompleted', {mission: nameOfMission})}
            clearPage={environmentcontainer.clearPage}
            onSave={picture=>picturecontainer.savePicture(picture)}
            onValid={points =>pointscontainer.creditPointsUser(points, profilecontainer.state.user.id)}

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
