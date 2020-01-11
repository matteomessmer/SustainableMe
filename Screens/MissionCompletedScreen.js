import React from 'react';
import MissionCompleted from '../Components/MissionCompleted';
import {Subscribe} from "unstated";
import ProfileContainer from "../Container/ProfileContainer";
import UserContainer from "../Container/UserContainer";
import PointsContainer from "../Container/PointsContainer";
import { NavigationActions, StackActions } from 'react-navigation'

//Screen to show the information about the mission that the user just completed
const MissionCompletedScreen = props => {

    const nameOfMission = props.navigation.getParam('mission');

    return (
        <Subscribe to={[ProfileContainer, UserContainer, PointsContainer]}>
            {(profileContainer, userContainer, pointscontainer) => (

              <MissionCompleted
  onOther={ () => {
   props
     .navigation
     .dispatch(StackActions.reset({
       index: 0,
       actions: [
NavigationActions.navigate({
routeName: 'Home', // Call home stack
action: NavigationActions.navigate({
routeName: 'Mission', // Navigate to this screen
}),
}),
],
       key: null
     }))
  }
}
  mission={nameOfMission}
  totalPoints={pointscontainer.state.totalPoints}
  pointsLeft={total=>userContainer.computePointsLeft(total)}
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
