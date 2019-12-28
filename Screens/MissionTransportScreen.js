import React from 'react';
import {View } from 'react-native';
import MissionTransport from "../Components/MissionTransport";
import {Subscribe} from "unstated";
import TransportationContainer from '../Container/TransportationContainer';

const MissionTransportScreen = props => {
  return (
    <View>
      <Subscribe to={[TransportationContainer]}>
        {transportcontainer => (
            <MissionTransport
              fermate={(origin, destination)=>transportcontainer.calculateRoute(origin, destination)}
              onQR={()=>props.navigation.navigate('QR_CODE')}
            />
        )}
      </Subscribe>

    </View>
  )
}

export default MissionTransportScreen;
