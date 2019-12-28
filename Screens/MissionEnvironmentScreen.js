import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MissionEnvironment from '../components/MissionEnvironment';
import { Subscribe } from 'unstated';
import EnvironmentContainer from '../container/EnvironmentContainer';

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
  );
};

export default MissionEnvironmentScreen;
