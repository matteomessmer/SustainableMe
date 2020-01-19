import React from 'react';
import {View} from 'react-native';
import MissionEnvironment from '../Components/MissionEnvironment';
import {Subscribe} from 'unstated';
import EnvironmentContainer from '../Container/EnvironmentContainer';
import PictureContainer from "../Container/PictureContainer";
import PointsContainer from "../Container/PointsContainer";
import ProfileContainer from "../Container/ProfileContainer";
import {NavigationActions, StackActions} from "react-navigation";

//Screen to show the MissionEnvironment component.
//callbacks are passed to the component to upload the picture to save it and to credit the user with
//the points he has gathered by accomplishing this mission.
//note there are 2 different callbacks for going to mission completed, this is due to the fact, that a mission
//might be started from home or from mission component, in each case a different set of parameters need to be send.(done for clarity reasons)
const MissionEnvironmentScreen = props => {

    //Get the navigation parameters for the info about the specific environment mission
    const nameOfMission = props.navigation.getParam('mission');
    const description = props.navigation.getParam('description');
    const points = props.navigation.getParam('points');

    const isSpot = props.navigation.getParam('spot');


    return (
        <View>
            <Subscribe to={[EnvironmentContainer, PictureContainer, ProfileContainer]}>
                {(environmentcontainer, picturecontainer, profilecontainer) => (
                    <MissionEnvironment
                        uploadPhoto={environmentcontainer.uploadPhoto}
                        image={environmentcontainer.state.image}
                        nameOfMission={nameOfMission}
                        isSpot={isSpot}
                        description={description}
                        confirm={(nameOfMission, points) => {
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
                        confirmfromHome={(nameOfMission, isSpot, points) => {
                            props.navigation.dispatch(StackActions.reset({
                                index: 0,
                                actions: [
                                    NavigationActions.navigate({
                                        routeName: 'MissionCompleted',// Navigate to this screen
                                        params: {
                                            mission: nameOfMission,
                                            spot: isSpot,
											points: points
                                        },
                                    }),
                                ],
                                key: null
                            }))
                        }
                        }
                        clearPage={environmentcontainer.clearPage}
                        onSave={picture => picturecontainer.savePicture(picture)}
                        onValid={points => profilecontainer.creditPointsUser(points)}
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
