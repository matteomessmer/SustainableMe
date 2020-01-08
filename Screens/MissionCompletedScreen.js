import React from 'react';
import {View} from 'react-native';
import MissionCompleted from '../Components/MissionCompleted';

const MissionCompletedScreen = props => {

    const nameOfMission = props.navigation.getParam('mission');

    return (
        <View>
            <MissionCompleted
                onOther={() => props.navigation.navigate("Mission")}
                mission={nameOfMission}
                />
        </View>
    )
}

export default MissionCompletedScreen;
