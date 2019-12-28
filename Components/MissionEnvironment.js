import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles, Button } from '../styles.js';

const nameOfEnvironmentMission = 'Pick up waste';

export default class MissionEnvironment extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.logoComponent}>
          <Image
            source={require('../images/environment.png')}
            style={styles.logoIcon}
          />
          <Text style={styles.logoTitle}>ENVIRONMENT MISSION</Text>
        </View>

        <Text>
          You have just completed the{'\n'}
          {nameOfEnvironmentMission}
          {'\n'}mission
        </Text>
        <Text>
          {'\n'}Upload a proof photo{'\n'}and share it with your friends!
        </Text>

        <Button
          style={styles.button}
          title="Upload photo"
          onPress={this.props.uploadPhoto}
        />
        <Button
          style={styles.button}
          title="Take photo"
          onPress={this.props.takePhoto}
        />

        {this.props.image ? (
          <ScrollView>
            <Text>Here is your picture</Text>
            <Image
              source={{ uri: this.props.image }}
              style={{ width: 200, height: 200 }}
            />
          </ScrollView>
        ) : null}
      </ScrollView>
    );
  }
}
