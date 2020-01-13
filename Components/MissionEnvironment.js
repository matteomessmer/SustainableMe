import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {styles, Button} from '../styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MissionEnvironment extends React.Component {

    constructor(props) {
        super(props);
    }

    //When the component unmounts, the previously uploaded picture is deleted
    componentWillUnmount() {
        this.props.clearPage();
    }

    //Environment missions containing the title of the mission, a short description and
    //then a button to upload a proof photo.
    //When the user uploads a photo, he is able to see it. At this point, he can upload another picture
    //or he can save it if he likes it. Afterwards, if he is satisfied with the photo, he
    //can confirm and complete the mission
    render() {
        return (
            <ScrollView>
                <View style={styles.logoComponent}>
                    <View style={styles.outercircle}>
                        <View style={styles.logo}>
                            <Ionicons name={'md-globe'} size={80} color={'white'}/>
                        </View>
                    </View>
                    <Text style={styles.subHeaderRammetto}>ENVIRONMENT MISSION</Text>
                </View>
                <View style={styles.titleheader}>
                    <Text style={styles.environsubTitle}>
                        You have just chosen the {'\n'}
                        <Text style={styles.inlineHeader}>{this.props.nameOfMission} </Text> {'\n'}
                        mission
                    </Text>
                </View>
                <View style={styles.titleheader}>
                    <Text style={styles.environsubTitleColor}>
                        What is it about?{'\n'}
                        <Text style={styles.inlineHeader}>{this.props.description}</Text>
                    </Text>
                    <Text style={styles.environsubTitle}>
                        {'\n'}Upload a proof photo{'\n'}to get the points
                    </Text>
                </View>
                <View style={styles.buttonDiv}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => this.props.uploadPhoto()}
                    >
                        <Text style={styles.buttonText}>Upload photo</Text>
                    </TouchableOpacity>
                </View>

                {this.props.image ? (
                    <View style={styles.pictureFrame}>
                        <ScrollView>
                            <Text style={styles.environsubTitle}>Here is your picture</Text>
                            <Image
                                source={{uri: this.props.image}}
                                style={styles.uploadedImage}
                            />

                            <View style={styles.buttonDiv}>

                                <TouchableOpacity
                                    style={styles.changeButton}
                                    onPress={() => this.props.onSave(this.props.image)}
                                >
                                    <Text style={styles.changeButtonText}>Save</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonDiv}>
                                <View style={styles.satisfied}>
                                    <Text style={styles.environsubTitle}>Satisfied?</Text>
                                </View>
                                <TouchableOpacity
                                    style={styles.primaryButton}
                                    onPress={() => {
                                        this.props.onValid(this.props.points)
                                        this.props.confirm(this.props.nameOfMission)
                                    }}
                                >
                                    <Text style={styles.buttonText}>Confirm</Text>
                                </TouchableOpacity>
                            </View>

                        </ScrollView>
                    </View>
                ) : null}
            </ScrollView>
        );
    }
}
