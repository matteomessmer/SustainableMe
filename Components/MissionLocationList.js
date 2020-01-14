import React from 'react';
import { View,ActivityIndicator} from 'react-native';
import {ListItem} from 'react-native-elements';
import {styles} from '../styles.js';

//component to display the list of location-missions available.
export default class MissionLocationList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            missions: [],
            isLoading: true,
        }
    }

    //the list of available missions is gathered.
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
        };
        const theMissionList = this.state.missions.map((mission) => {
                return (
                    <ListItem
                        key={mission.id}
                        title={mission.name}
                        titleStyle={styles.listTitle}
                        subtitle={"" + mission.points + ""}
                        subTitleStyle={styles.subTitle}
                        bottomDivider
                        chevron
                        onPress={() => this.props.onLocationClick(mission)}
                    />
                )
            }
        );

        return (
            <View>
                {theMissionList}
            </View>
        )
    }
}
