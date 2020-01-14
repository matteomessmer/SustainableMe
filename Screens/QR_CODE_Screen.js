import React from 'react';
import QR_CODE from '../Components/QR_CODE';
import {Subscribe} from "unstated";
import PointsContainer from "../Container/PointsContainer";
import ProfileContainer from "../Container/ProfileContainer";
import {NavigationActions, StackActions} from "react-navigation";

//screen to call the QR code component. It passes callback functions to calculate the points and to give them to
//the user, furthermore it passes a onClear callback which resets the navigation stack so that after completed the
//user cannot go back
const QR_CODE_Screen = props => {
    const code = props.navigation.getParam('code');
    const name = props.navigation.getParam('name')
    const isSpot = props.navigation.getParam('spot');


    return (


        <Subscribe to={[PointsContainer, ProfileContainer]}>
            {(pointscontainer, profilecontainer) => (
                <QR_CODE
                    onCreditPoints={() => pointscontainer.creditPointsUser(pointscontainer.state.points, profilecontainer.state.user.id)}
                    code={code}
                    name={name}
                    onClear={() => {
                        props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({
                                    routeName: 'MissionCompleted',// Navigate to this screen
                                    params: {
                                        mission: name,
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
    )
};
QR_CODE_Screen.navigationOptions = {
    title: 'Scanning...',
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    }
};

export default QR_CODE_Screen;
