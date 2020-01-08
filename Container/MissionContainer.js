import React from 'react';
import {Container} from 'unstated'
import {Alert} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class MissionContainer extends Container {
    state = {}

    getSpotlightMissions = async () => {

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

        //Get the first mission for every category
        const spotlight1 = await responseJson.missionsEnvironment[0];
        spotlight1.type = 'environment'
        const spotlight2 = await responseJson.missionsLocation[0];
        spotlight2.type = 'location'
        const spotlight3 = await responseJson.missionsRestaurant[0];
        spotlight3.type = 'restaurant'

        //create the spotlight missions array
        const result = [spotlight1, spotlight2, spotlight3];

        return result;


    }

    computePicture = (type) => {

        if (type == 'environment')
            return 'md-globe'

        if (type == 'location')
            return 'ios-pin'

        if (type == 'restaurant')
            return 'ios-restaurant'

        if (type == 'transport')
            return 'ios-bicycle'

    }

}