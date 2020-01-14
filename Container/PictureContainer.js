import React from 'react';
import {PersistContainer} from 'unstated-persist'
import {Alert} from 'react-native';
import {AsyncStorage} from 'react-native';

export default class PictureContainer extends PersistContainer {

    //State storing the list of pictures (which is the gallery of the user)
    state = {
        picList: []
    }

    //Save the picture in the gallery
    savePicture = picture => {
        const withPic = this.state.picList.filter(pic => pic == picture)

        if (withPic.length != 0) {
            Alert.alert('The picture is already in the gallery!');
        } else {
            const newpicList = [...this.state.picList, picture];
            this.setState({picList: newpicList});
            Alert.alert('Your picture has been saved succesfully!');
        }
        ;
    }

    //Delete the picture from the gallery
    delete = picture => {
        const without = this.state.picList.filter(pic => pic != picture)
        this.setState({picList: without})
    }

    //Required field for making the container persistent
    persist = {
        key: 'counter',
        version: 1,
        storage: AsyncStorage,
    };

}
