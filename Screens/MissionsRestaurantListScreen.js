import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MissionsRestaurantList from '../Components/MissionsRestaurantList';
import {Subscribe} from "unstated";
import RestaurantContainer from "../Container/RestaurantContainer";

//screen to call the mission component which passes navigation callbacks to the component.
//these callbacks will be then used to get a list of restaurants and to navigate to the mission screen when the user click on a restaurant
const MissionsRestaurantListScreen = props => {
	return (
		<View>
			<Subscribe to={[RestaurantContainer]}>
				{
					restaurantContainer => (
						<MissionsRestaurantList 
							getRestaurants={restaurantContainer.getRestaurants}
							onRestaurantClick={(restaurant)=>props.navigation.navigate('MissionRestaurant', {restaurant: restaurant})}
						/>
					)
				}
			</Subscribe>
		</View>
	)
}
MissionsRestaurantListScreen.navigationOptions = {
    title: 'Restaurants',
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    }
};

export default MissionsRestaurantListScreen;
