import React from 'react';
import MissionCompleted from '../Components/MissionCompleted';
import {Subscribe} from "unstated";
import ProfileContainer from "../Container/ProfileContainer";
import UserContainer from "../Container/UserContainer";
import PointsContainer from "../Container/PointsContainer";
import {NavigationActions, StackActions} from 'react-navigation'

//Screen to show the information about the mission that the user just completed
//additionally, this screen needs to check if the mission the user has just completed came from home or from mission screen,
//depending on that the stack of navigation needs to be reset
//also some callbacks are passed to the component to compute the points the user needs to achieve.
const MissionCompletedScreen = props => {

    const nameOfMission = props.navigation.getParam('mission');
    let resetAction = null;
    const spot = props.navigation.getParam('spot');

    //if mission come from spotlight mission (home) home stack needs to be reset
    if (spot !== undefined) {
        resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Home'})
            ],
        });
    } //otherwise the mission stack needs to be reset.
    else {
        resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Mission'})
            ],
        });
    }


    return (
        <Subscribe to={[ProfileContainer, UserContainer, PointsContainer]}>
            {(profileContainer, userContainer, pointscontainer) => (

                <MissionCompleted
                    onOther={() => {
                        props.navigation.dispatch(resetAction)
                        props.navigation.navigate('Missions')
                    }
                    }
                    mission={nameOfMission}
                    totalPoints={pointscontainer.state.totalPoints}
                    pointsLeft={total => userContainer.computePointsLeft(total)}
                />
            )
            }
        </Subscribe>
    )

};

//Navigation options for the header
MissionCompletedScreen.navigationOptions = {
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    }
};

export default MissionCompletedScreen;
