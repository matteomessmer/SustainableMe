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
    savePicture = async picture => {
       const theList= await this.state.picList;
       const withPic =  await theList.filter(pic => pic === picture);
        if (withPic.length !== 0) {//if it is not 0 than the picture is already there
            Alert.alert('The picture is already in the gallery!');
        } else {//it is 0 if the picture is not yet saved
            const newpicList = [...this.state.picList, picture];
            await this.setState({picList: newpicList});
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
