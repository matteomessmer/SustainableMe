import React from 'react';
import {Container} from 'unstated'

export default class RestaurantContainer extends Container {
    state = {}

    getRestaurants = async () => {
        const response = await fetch('http://sustainableme.fablabnetwork.tk/API/getMissions.php', {
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
}
