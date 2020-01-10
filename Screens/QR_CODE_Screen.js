import React from 'react';
import QR_CODE from '../Components/QR_CODE';
import {Subscribe} from "unstated";
import PointsContainer from "../Container/PointsContainer";
import ProfileContainer from "../Container/ProfileContainer";

const QR_CODE_Screen = props => {
	    const code = props.navigation.getParam('code');

    return (


        <Subscribe to={[PointsContainer, ProfileContainer]}>
            { (pointscontainer, profilecontainer) => (
                <QR_CODE
                    onCreditPoints={()=>pointscontainer.creditPointsUser(pointscontainer.state.points, profilecontainer.state.user.id)}
                    onValidation={() => props.navigation.navigate('MissionCompleted')}
					code={code}	
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
