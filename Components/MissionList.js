import React from 'react';
import {View} from 'react-native';
import SpotlightMission from './SpotlightMission'

export default class MissionList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            missions: []
        }
    }

    async componentDidMount() {
        const missions = await this.props.computeList();
        this.setState({missions: missions})
    }

    addKeys = (val, index) => (
        {...val, key: index}
    );

    render() {
        const spot = this.state.missions.map(mission =>
            <SpotlightMission
                name={mission.name}
                points={mission.points}
                type={mission.type}
                mission={mission}
                computePicture={this.props.computePicture}
                onEnvironment={this.props.onEnvironment}
                onTransport={this.props.onTransport}
                onLocation={this.props.onLocation}
                onRestaurant={this.props.onRestaurant}
            />
        );
        const spotlightMission = spot.map(this.addKeys);
        return (
            <View>
                {spotlightMission}
            </View>
        )
    }

}
