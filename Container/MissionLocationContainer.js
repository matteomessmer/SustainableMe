import React from 'react';
import {Container} from 'unstated'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class TransportationContainer extends Container {
    state = {}
    /*
      Method to request location missions from the DB (expect json containing missions)
    */
    getLocationMissions = async () => {

        const response = await fetch('http://sustainableme.fablabnetwork.tk/API/getMissions.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: null,
        }).catch((error) => {
            console.error(error);
            return null;
        });

        const responseJson = await response.json();
        const result = await responseJson.missionsLocation;

        /* Check for errors */
        if (responseJson.error) {
            alert(responseJson.description);
            return null;
        } else {
            return result;
        }
    }

    /*
      Method that requests permission to check the phone's location.
      If permission is granted, it returns an object containing latitude and longitude of the current position.
    */
    _getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            alert("Permissions to check the current location was denied")
            return null
        } else {
            let location = await Location.getCurrentPositionAsync({});
            return {lat: location.coords.latitude, lon: location.coords.longitude}
        }
    };

    /*
      Method that gets the current location and confronts it with some given position. Returns true within a tolerance of 5.000 meters
    */
    pickAndCheckPosition = async (lat, lon) => {
        const currentPosition = await this._getLocationAsync();
        const response = await fetch('https://maps.googleapis.com/maps/api/directions/json?origin=' + lat + "," + lon + '&destination=' + currentPosition.lat + "," + currentPosition.lon + '&key=AIzaSyDnOaaU_CIxZxa45NcrN0G2Nzl7xVTKFdA');
        const theAnswer = await response.json();
        if (theAnswer.routes[0].legs[0].distance.value < 5000) {
            return true;
        } else {
            return false;
        }
    }

}
