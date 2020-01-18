import React from 'react';
import {View} from 'react-native';
import {Subscribe} from 'unstated';
import MissionRestaurant from '../Components/MissionRestaurant';
import RestaurantContainer from '../Container/RestaurantContainer';
import PointsContainer from '../Container/PointsContainer';

//screen to call the MissionRestaurant component.
//callbacks to display the right restaurant, to calculate points and navigation are passed.
const MissionRestaurantScreen = props => {

    const restaurant = props.navigation.getParam('restaurant');
    const isSpot = props.navigation.getParam('spot');

    return (
        <View>
            <Subscribe to={[PointsContainer, RestaurantContainer]}>
                {(pointsContainer,restaurantContainer) => (
                    <MissionRestaurant
                        mission={restaurant}
                        isSpot={isSpot}
                        setPoints={(points) => pointsContainer.setPoints(points)}
						onWebsite={(url) => restaurantContainer.openWebsite(url)}
						onMaps={(address) => restaurantContainer.openMaps(address)}
                        onQR={(code, nameMission) => props.navigation.navigate('QR_CODE', {
                            code: code,
                            name: nameMission,
                            spot: isSpot
                        })}
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
