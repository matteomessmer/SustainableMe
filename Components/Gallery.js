import React from 'react';
import {ScrollView} from 'react-native';
import Picture from '../Components/Picture'

//Gallery component creates a list of pictures.
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
