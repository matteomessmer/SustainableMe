import React from 'react';
import {View} from 'react-native';
import SpotlightMission from './SpotlightMission'
import {styles} from '../styles.js';

export default class MissionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            missions: []
        }
    }

//When the component mounts, it loads the spotlight missions
    async componentDidMount() {
        const missions = await this.props.computeList();
        this.setState({missions: missions})
    }

//Create keys for the elements of the list
    addKeys = (val, index) => (
        {...val, key: index}
    );

//List composed by single spotlight missions (SpotlightMission components)
    render() {
        const spot = this.state.missions.map(mission =>
            <SpotlightMission
                name={mission.name}
                points={mission.points}
                type={mission.type}
                description={mission.description}
                mission={mission}
                onEnvironment={this.props.onEnvironment}
                onTransport={this.props.onTransport}
                onLocation={this.props.onLocation}
                onRestaurant={this.props.onRestaurant}
                picture={type=>this.props.computePicture(type)}
                spot={this.props.isSpot}
            />
        );
        const spotlightMission = spot.map(this.addKeys);
        return (
            <View style={styles.spotLight}>
                {spotlightMission}
            </View>
        )
    }

}
