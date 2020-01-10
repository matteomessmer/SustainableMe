import React from 'react';
import {PersistContainer} from 'unstated-persist'
import {Alert} from 'react-native';
import {AsyncStorage} from 'react-native';

export default class PictureContainer extends PersistContainer {
    state = {
        picList: []
    }

    savePicture=picture=>{
        const newpicList=[...this.state.picList, picture];
        this.setState({picList: newpicList});
        Alert.alert('Your picture has been saved succesfully!');
        console.log(this.state.picList)
    };

    delete=picture=>{
        const without= this.state.picList.filter(pic => pic!= picture)

        this.setState({picList: without})
    }

    //required field for making the container persistent.
    persist = {
        key: 'counter',
        version: 1,
        storage: AsyncStorage,
    };

}