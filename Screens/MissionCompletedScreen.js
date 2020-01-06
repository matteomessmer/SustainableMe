import React from 'react';
import {View} from 'react-native';
import MissionCompleted from '../Components/MissionCompleted';

const MissionCompletedScreen = props => {
    return (
        <View>
            <MissionCompleted
                onOther={() => props.navigation.navigate("Mission")}/>
        </View>
    )
}

export default MissionCompletedScreen;
