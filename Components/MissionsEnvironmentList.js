import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {ListItem} from 'react-native-elements';
import {styles} from '../styles.js';

//State containing the list of environment missions and a boolean to check if page
//is loading
export default class MissionsEnvironmentList extends React.Component {
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
        const missionList = this.state.missions.map((mission, i) => {
            return (
                <ListItem
                    key={i}
                    title={mission.name}
                    titleStyle={styles.listTitle}
                    subtitle={mission.points + ' points'}
                    subTitleStyle={styles.subTitle}
                    bottomDivider
                    chevron
                    onPress={() => this.props.onMissionClick(mission.name, mission.description, mission.points)}
                />
            )

        });

        return (
            <View>
                {missionList}
            </View>
        )
    }
}
