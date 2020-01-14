import React from 'react';
import MissionCompleted from '../Components/MissionCompleted';
import {Subscribe} from "unstated";
import ProfileContainer from "../Container/ProfileContainer";
import UserContainer from "../Container/UserContainer";
import PointsContainer from "../Container/PointsContainer";
import {NavigationActions, StackActions} from 'react-navigation'

//Screen to show the information about the mission that the user just completed
const MissionCompletedScreen = props => {

    const nameOfMission = props.navigation.getParam('mission');
    let resetAction = null;

    const spot = props.navigation.getParam('spot');

    console.log("the spot is:" +spot);
    console.log(nameOfMission)
    if (spot !== undefined) {
        resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Home'})
            ],
        });
    } else {
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
