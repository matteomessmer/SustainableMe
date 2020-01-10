import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Subscribe} from 'unstated';
import MissionRestaurant from '../Components/MissionRestaurant';
import PointsContainer from '../Container/PointsContainer';


const MissionRestaurantScreen = props => {

    const restaurant = props.navigation.getParam('restaurant');

  return (
    <View>
		<Subscribe to={[PointsContainer]}>
			{ pointsContainer => (
				<MissionRestaurant 
					mission={restaurant}
					setPoints={(points) => pointsContainer.setPoints(points)}
					onQR={(code) => props.navigation.navigate('QR_CODE', {code:code})}
				/>
			)}
		</Subscribe>
    </View>
  )
}

export default MissionRestaurantScreen;
