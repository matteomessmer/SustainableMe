import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {styles, Button} from '../styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Picture from '../Components/Picture'

export default class Gallery extends React.Component {

    constructor(props) {
        super(props);
    }

//For every picture of the list stored in the container, a Picture component is created
    render() {
        const pictures = this.props.pictureList.map((picture, index) => {
            return (
                <Picture
                    key={index}
                    pic={picture}
                />

            )
        });

        return (
            <ScrollView>
                {pictures}
            </ScrollView>
        )
    }
};
