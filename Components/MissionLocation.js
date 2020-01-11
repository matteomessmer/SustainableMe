import React from 'react';
import {Text, View, ScrollView, Button, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import {styles} from '../styles.js';

/*class ListedMission extends React.Component {

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
}*/

export default class MissionLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: this.props.location,
            error: '',
            loading: false,
        }
    }

    async advance() {
        this.setState({error: ''});
        this.setState({loading: true})
        const success = await this.props.pickAndCheckPosition(this.state.location.lat, this.state.location.lon);
        if (success) {
            await this.props.setPoints(this.state.location.points);
            await this.props.creditPointsUser();
            await this.setState({loading: false})
            await this.props.onValidation();
        } else {
            this.setState({error: "Sorry, you're not close enough."})
            this.setState({loading: false})
        }
    }

    render() {
        return (
            <View style={styles.logoComponent}>
                <Image
                    source={require('../images/location.png')}
                    style={styles.ImageIconStyle}
                />
                <Text style={styles.subHeaderRammetto}>{this.state.location.name}</Text>
                <Text style={styles.subsubHeaderRammetto}>{this.state.location.points}</Text>
                <TouchableOpacity onPress={() => this.advance()}>
                    <Text style={styles.button}>Pick your current position</Text>
                </TouchableOpacity>
                <Text>{this.state.error}</Text>
                {this.state.loading ?
                    <ActivityIndicator style={styles.splashLoading} size="large" color="black"/>
                    :
                    null
                }
                <Text>Note: we apply a tolerance of about 5km</Text>

            </View>
        )
    }
}
