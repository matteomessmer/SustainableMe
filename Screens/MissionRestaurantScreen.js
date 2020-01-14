import React from 'react';
import {View} from 'react-native';
import {Subscribe} from 'unstated';
import MissionRestaurant from '../Components/MissionRestaurant';
import PointsContainer from '../Container/PointsContainer';


const MissionRestaurantScreen = props => {

    const restaurant = props.navigation.getParam('restaurant');
    const isSpot = props.navigation.getParam('spot');

    return (
        <View>
            <Subscribe to={[PointsContainer]}>
                {pointsContainer => (
                    <MissionRestaurant
                        mission={restaurant}
                        isSpot={isSpot}
                        setPoints={(points) => pointsContainer.setPoints(points)}
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
