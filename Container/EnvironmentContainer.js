import React from 'react';
import {Container} from 'unstated';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class EnvironmentContainer extends Container {
    state = {
        image: null,
    };

    uploadPhoto = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        console.log('Permissions.CAMERA_ROLL', status);

        if (status === 'granted') {
            let image = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
            }).catch(error => console.log('Permissions.CAMERA_ROLL', {error}));
            console.log('Permissions.CAMERA_ROLL', 'SUCCESS', image);
            this.setState({image: image.uri});
        }
    };

    clearPage = () => {
        this.setState({image: null})
    }

    //TODO: why post request with empty body? Why not having get?
    getEnvironmentMissions = async () => {
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
        const result = await responseJson.missionsEnvironment;

        console.log(result)

        if (responseJson.error) {
            alert(responseJson.description);
            return null;
        } else {
            return result;
        }
    }

}
