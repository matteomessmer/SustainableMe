import React from 'react';
import {Linking} from 'react-native';
import {Container} from 'unstated'

//this container provides the function that retrieves the list of restaurants.
//it also provides a function to open the restaurant's website and one to show it on map app.
export default class RestaurantContainer extends Container {
	
	//return a list of restaurants from the database
	getRestaurants = async () => {
        const response = await fetch('http://sustainableme.fablabnetwork.ml/API/getMissions.php', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).catch((error) => {
            console.error(error);
            return null;
        });

        const responseJson = await response.json();
        const result = await responseJson.missionsRestaurant;

        if (responseJson.error) {
            alert(responseJson.description);
            return null;
        } else {
            return result;
        }
    }
	
	//open the website in the browser
	openWebsite = (url) => {
		Linking.canOpenURL(url).then(supported => {
			if (supported) {
				Linking.openURL(url);
			} else {
				console.log("Don't know how to open URI: " + this.props.url);
			}
		});
	}
	
	//open the map and show where the restaurant is
	openMaps = (address) => {
		const url = 'https://www.google.com/maps/place/' + address;
		Linking.canOpenURL(url).then(supported => {
			if (supported) {
				Linking.openURL(url);
			} else {
                console.log("Don't know how to open URI: " + url);
			}
		});
	}
	
}
