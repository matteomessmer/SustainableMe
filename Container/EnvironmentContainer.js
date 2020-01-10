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

}
