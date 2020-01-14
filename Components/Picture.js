import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {styles} from '../styles.js';
import {Subscribe} from "unstated";
import PictureContainer from "../Container/PictureContainer";


export default class Picture extends React.Component {

    constructor(props) {
        super(props);
    }

//Picture component shown in the gallery with the picture itself and a button
//"delete" to delete the picture from the gallery
    render() {

        return (
            <View>
                <View style={styles.pictureGallery}>
                    <Image
                        source={{uri: this.props.pic}}
                        style={{width: 300, height: 250}}
                    />
                </View>
                <View style={styles.buttonDiv}>
                    <Subscribe to={[PictureContainer]}>
                        {picturecontainer => (
                            <TouchableOpacity
                                style={styles.primaryButton}
                                onPress={() => picturecontainer.delete(this.props.pic)}
                            >
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        )}
                    </Subscribe>

                </View>
            </View>
        )
    }
};
