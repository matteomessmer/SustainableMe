import React from 'react';
import {View} from 'react-native';
import MissionEnvironment from '../Components/MissionEnvironment';
import {Subscribe} from 'unstated';
import EnvironmentContainer from '../Container/EnvironmentContainer';
import PictureContainer from "../Container/PictureContainer";
import PointsContainer from "../Container/PointsContainer";
import ProfileContainer from "../Container/ProfileContainer";
import {NavigationActions, StackActions} from "react-navigation";

//Screen to show the MissionEnvironment component
const MissionEnvironmentScreen = props => {

//Get the navigation parameters for the info about the specific environment mission
    const nameOfMission = props.navigation.getParam('mission');
    const description = props.navigation.getParam('description');
    const points = props.navigation.getParam('points');

    const isSpot = props.navigation.getParam('spot');



    return (
        <View>
            <Subscribe to={[EnvironmentContainer, PictureContainer, PointsContainer, ProfileContainer]}>
                {(environmentcontainer, picturecontainer, pointscontainer, profilecontainer) => (
                    <MissionEnvironment
                        uploadPhoto={environmentcontainer.uploadPhoto}
                        image={environmentcontainer.state.image}
                        nameOfMission={nameOfMission}
                        isSpot={isSpot}
                        description={description}
                        confirm={(nameOfMission) => {
                            props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({
                                        routeName: 'MissionCompleted',// Navigate to this screen
                                        params: {mission: nameOfMission},
                                    }),
                                ],
                                key: null
                            }))
                        }
                        }
                        confirmfromHome={(nameOfMission, isSpot) => {
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
                        clearPage={environmentcontainer.clearPage}
                        onSave={picture => picturecontainer.savePicture(picture)}
                        onValid={points => pointscontainer.creditPointsUser(points, profilecontainer.state.user.id)}
                        points={points}


                    />
                )}
            </Subscribe>
        </View>
    )
};

//Navigation options for the header
MissionEnvironmentScreen.navigationOptions = {
    title: 'Environment Mission',
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    }
};

export default MissionEnvironmentScreen;
