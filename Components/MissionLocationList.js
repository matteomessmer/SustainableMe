import React from 'react';
import {Text, View, ScrollView, Button, ActivityIndicator} from 'react-native';
import {ListItem} from 'react-native-elements';
import {styles} from '../styles.js';

//TODO: maybe put the map-function outside the return function and assign it to a constant
export default class MissionLocationList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            missions: [],
            isLoading: true,
        }
    }

    async componentDidMount() {
        const missions = await this.props.getLocationMissions();
        await this.setState({missions: missions, isLoading: false});
    }


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
                    this.state.missions.map((mission) => (
                        <ListItem
                            key={mission.id}
                            /*leftAvatar={{source: {uri: restaurant.image}}}*/
                            title={mission.name}
                            subtitle={""+ mission.points + ""}
                            bottomDivider
                            chevron
                            onPress={() => this.props.onLocationClick(mission)}
                        />
                    ))
                }
            </View>
        )
    }
}
