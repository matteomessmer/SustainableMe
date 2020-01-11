import React from 'react';
import {View, Image, ScrollView, TouchableOpacity, Text} from 'react-native';
import {styles, Button} from '../styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Subscribe} from "unstated";
import PictureContainer from "../Container/PictureContainer";


export default class Picture extends React.Component {

    constructor(props) {
        super(props);
    }

//Picture component shown in the gallery with the picture itself and a button
//"delete" to delete the picture from the gallery
    render() {

        return(
            <View>
                <Image
                    source={{uri: this.props.pic}}
                    style={{width: 150, height: 150}}
                />

                <View style={styles.buttonDiv}>
                    <Subscribe to={[PictureContainer]}>
                        {picturecontainer =>(
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
