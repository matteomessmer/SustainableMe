import React from 'react';
import {Container} from 'unstated'
import { Alert} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class TransportationContainer extends Container {
    state = {
    }

    getLocationMissions = async () => {

  		//request missions (expect json containing missions)
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

  		//check for errors
  		//return array or null
  		if(responseJson.error) {
  			alert(responseJson.description);
  			return null;
  		} else {
  			return result;
  		}
  	}

    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
          alert("Permissions to check the current location was denied")
          return null
      } else {
        let location = await Location.getCurrentPositionAsync({});
        return { lat: location.coords.latitude, lon: location.coords.longitude }
      }
    };

    pickAndCheckPosition = async (lat, lon) => {
      console.log("The location i want is placed at " + lat + ", " + lon)
      const currentPosition = await this._getLocationAsync();
      const response = await fetch('https://maps.googleapis.com/maps/api/directions/json?origin=' + lat + "," + lon + '&destination=' + currentPosition.lat + "," + currentPosition.lon + '&key=AIzaSyDnOaaU_CIxZxa45NcrN0G2Nzl7xVTKFdA');
      const theAnswer = await response.json();
      /*console.log("my distance is: " + JSON.stringify(theAnswer.routes[0].legs[0].distance.value));*/
      if (theAnswer.routes[0].legs[0].distance.value < 5000) {
        console.log(true);
        return true;
      } else {
        console.log(false)
        return false;
      }
    }

}
