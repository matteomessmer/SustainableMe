import React from 'react';
import { Text, View,ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import { styles} from '../styles.js';

class ListedMission extends React.Component {

  constructor(props) {
    super(props);
   }

  render() {
    return (
    <TouchableOpacity onPress={this.props.myOnPress}>
      <Image
          source={require('../images/location.png')}
          style={styles.ImageIconStyle}
      />
      <Text>{this.props.name}</Text>
      <Text>{this.props.points}</Text>

    </TouchableOpacity>
  )
  }
}

class SingleMission extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',
    }
   }

  async advance() {
    const success = await this.props.pickAndCheckPosition(this.props.mission.lat, this.props.mission.lon);
    if (success) {
      await this.props.setPoints(100);
      await this.props.creditPointsUser();
      await this.props.onValidation();
    }
    else {
      this.setState({error: "Sorry, you're not close enough."})
    }
  }

  render() {
    return (
    <View style={styles.logoComponent}>
      <Image
          source={require('../images/location.png')}
          style={styles.ImageIconStyle}
      />
      <Text style={styles.subHeaderRammetto}>{this.props.mission.name}</Text>
      <Text style={styles.subsubHeaderRammetto}>+100</Text>
      <TouchableOpacity onPress={() => this.advance()}>
        <Text style={styles.button}>Pick your current position</Text>
      </TouchableOpacity>
      <Text>{this.state.error}</Text>
      <Text>Note: we apply a tolerance of about 5km</Text>

    </View>
  )
  }
}

export default class MissionLocation extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
          missions: [],
          selectedMission: null,
      }
  }

  async componentDidMount() {
      const missions = await this.props.getLocationMissions();
      this.setState({missions: missions})
  }

  render(){
      if (this.state.selectedMission===null) {
        return (
          <View>
            <Text>{JSON.stringify(this.state.missions)}</Text>
            {this.state.missions.map(mission =>
              <ListedMission
                key={mission.id}
                name={mission.name}
                lat={mission.lat}
                lon={mission.lon}
                points={"100"}
                myOnPress={() => this.setState({selectedMission: mission})}
              />
            )}
          </View>
        )
      } else {
        return (
          <SingleMission
            mission={this.state.selectedMission}
            pickAndCheckPosition={this.props.pickAndCheckPosition}
            onValidation={this.props.onValidation}
            setPoints={this.props.setPoints}
            creditPointsUser={this.props.creditPointsUser}
          />
        )
      }

  }
}
