import React from 'react';
import { View } from 'react-native';
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
					onQR={(code, nameMission) => props.navigation.navigate('QR_CODE', {code:code, name: nameMission})}
				/>
			)}
		</Subscribe>
    </View>
  )
};
MissionRestaurantScreen.navigationOptions = {
    title: 'Restaurant Mission',
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    }
};


export default MissionRestaurantScreen;
