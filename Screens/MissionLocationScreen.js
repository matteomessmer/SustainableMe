import React from 'react';
import {View} from 'react-native';
import MissionLocation from "../Components/MissionLocation";
import {Subscribe} from "unstated";
import MissionLocationContainer from '../Container/MissionLocationContainer';
import PointsContainer from '../Container/PointsContainer';
import ProfileContainer from '../Container/ProfileContainer';
import {NavigationActions, StackActions} from "react-navigation";

/*
  Screen to call the MissionLocation component. Callbacks to calculate the user's location are passed.
  Two different callbacks for navigating to the missioncompleted component are passed, to understand from which component the mission was started.
*/
const MissionLocationScreen = props => {

    const location = props.navigation.getParam('location');
    const isSpot = props.navigation.getParam('spot');

    return (
        <View>
            <Subscribe to={[MissionLocationContainer, PointsContainer, ProfileContainer]}>
                {(missionlocationcontainer, pointscontainer, profilecontainer) => (
                    <MissionLocation
                        location={location}
                        isSpot={isSpot}
                        pickAndCheckPosition={(lat, lon) => missionlocationcontainer.pickAndCheckPosition(lat, lon)}
                        setPoints={(points) => pointscontainer.setPoints(points)}
                        creditPointsUser={() => profilecontainer.creditPointsUser(pointscontainer.state.points)}
						openMaps={(lat, lon) => missionlocationcontainer.openMaps(lat,lon)}
                        onValidation={(nameOfMission, points) => {
                            props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({
                                        routeName: 'MissionCompleted',// Navigate to this screen
                                        params: {mission: nameOfMission, points: points},
                                    }),
                                ],
                                key: null
                            }))
                        }
                        }
                        onValidationfromHome={(nameOfMission, isSpot) => {
                            props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({
                                        routeName: 'MissionCompleted',// Navigate to this screen
                                        params: {
                                            mission: nameOfMission,
                                            spot: isSpot
                                        },
                                    }),
                                ],
                                key: null
                            }))
                        }
                        }


                    />
                )}
            </Subscribe>
        </View>
    )
};

MissionLocationScreen.navigationOptions = {
    title: 'Location Mission',
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    },
    headerTitleStyle: {
        fontFamily: 'Rammetto-One',
        fontWeight: "200"
    }
};

export default MissionLocationScreen;
