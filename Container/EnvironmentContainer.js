import React from 'react';
import {Container} from 'unstated';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class EnvironmentContainer extends Container {

    //State storing temporarly the picture uploaded by the user
    state = {
        image: null,
    };

    //Ask permission to the user to access its gallery so that he can upload the photo
    //from his camera roll
    uploadPhoto = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === 'granted') {
            let image = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: 'Images',
            }).catch(error => console.log('Permissions.CAMERA_ROLL', {error}));
            //console.log('Permissions.CAMERA_ROLL', 'SUCCESS', image);
            this.setState({image: image.uri});
        }
    };

    //Clear the picture
    clearPage = () => {
        this.setState({image: null})
    }

    //Retrieve all the environment missions from the database
    getEnvironmentMissions = async () => {
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
        const result = await responseJson.missionsEnvironment;

        if (responseJson.error) {
            alert(responseJson.description);
            return null;
        } else {
            return result;
        }
    }

}
