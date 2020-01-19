import React from 'react';
import {View} from 'react-native';
import MissionTransport from "../Components/MissionTransport";
import {Subscribe} from "unstated";
import TransportationContainer from '../Container/TransportationContainer';
import PointsContainer from "../Container/PointsContainer";

//screen to call the MissionTransport component.
//callbacks to calcualte routes and to calculate points and navigation are passed.
const MissionTransportScreen = props => {
    return (
        <View>
            <Subscribe to={[TransportationContainer, PointsContainer]}>
                {(transportcontainer, pointscontainer) => (
                    <MissionTransport
                        fermate={(origin, destination) => transportcontainer.calculateRoute(origin, destination)}
                        onQR={(code, name) => props.navigation.navigate('QR_CODE', {code: code, name: name, points: pointscontainer.state.points})}
                        onCalculate={kilometer => pointscontainer.addPointsfromDistance(kilometer)}
                    />
                )}
            </Subscribe>

        </View>
    )
};
MissionTransportScreen.navigationOptions = {
	title: "Transport Mission",
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    },
    headerTitleStyle: {
        fontFamily: 'Rammetto-One',
        fontWeight: "200"
    }
};

export default MissionTransportScreen;
