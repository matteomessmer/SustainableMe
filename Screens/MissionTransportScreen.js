import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MissionTransport from "../Components/MissionTransport";
import {Subscribe} from "unstated";
import FermateContainer from '../Container/FermateContainer';

const MissionTransportScreen = props => {
  return (
    <View>
      <Subscribe to={[FermateContainer]}>
        {fermatecontainer => (
            <MissionTransport
              fermate={(origin, destination)=>fermatecontainer.calculateRoute(origin, destination)}
            />
        )}
      </Subscribe>

    </View>
  )
}

export default MissionTransportScreen;
