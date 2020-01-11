import React from 'react';
import MissionCompleted from '../Components/MissionCompleted';
import {Subscribe} from "unstated";
import ProfileContainer from "../Container/ProfileContainer";
import UserContainer from "../Container/UserContainer";
import PointsContainer from "../Container/PointsContainer";


const MissionCompletedScreen = props => {

    const nameOfMission = props.navigation.getParam('mission');

    return (
        <Subscribe to={[ProfileContainer, UserContainer, PointsContainer]}>
            {(profileContainer, userContainer, pointscontainer) => (

                <MissionCompleted
                    onOther={() => props.navigation.navigate("Mission")}
                    mission={nameOfMission}
                    totalPoints={pointscontainer.state.totalPoints}
                    pointsLeft={total=>userContainer.computePointsLeft(total)}
                />
            )
            }
        </Subscribe>
    )

};

MissionCompletedScreen.navigationOptions = {
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    }
};

export default MissionCompletedScreen;
