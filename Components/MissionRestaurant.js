import React from 'react';
import { Text, View,ScrollView, Button } from 'react-native';
import { styles} from '../styles.js';

export default class MissionRestaurant extends React.Component{

  render(){
      return (
        <View>
        <Text>MissionRestaurant component for mission {this.props.mission}</Text>
        </View>
      )
  }

}
