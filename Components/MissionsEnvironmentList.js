import React from 'react';
import {Text, View, ScrollView, Button, ActivityIndicator} from 'react-native';
import {ListItem} from 'react-native-elements';
import {styles} from '../styles.js';

//TODO: maybe put the map-function outside the return function and assign it to a constant
export default class MissionsEnvironmentList extends React.Component {

//State containing the list of environment missions and a boolean to check if page
//is loading
    constructor(props) {
        super(props);
        this.state = {
            missions: [],
            isLoading: true,
        }
    }

    //When the component mounts, the list of environment missions is loaded
    async componentDidMount() {
        const missions = await this.props.getEnvironmentMissions();
        await this.setState({missions: missions, isLoading: false});
    }

//Each mission is mapped to a ListItem component with a title and a number of points
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View>
                {
                    this.state.missions.map((mission, i) => (
                        <ListItem
                            key={i}
                            title={mission.name}
                            subtitle={mission.points + ' points'}
                            bottomDivider
                            chevron
                            onPress={() => this.props.onMissionClick(mission.name, mission.description, mission.points)}
                        />
                    ))
                }
            </View>
        )
    }
}
