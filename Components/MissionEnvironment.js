import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {styles, Button} from '../styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';


const nameOfEnvironmentMission = 'Pick up waste';

export default class MissionEnvironment extends React.Component {
    constructor(props) {
        super(props);
    }

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

                <Text>
                    You have just completed the{'\n'}
                    {nameOfEnvironmentMission}
                    {'\n'}mission
                </Text>
                <Text>
                    {'\n'}Upload a proof photo{'\n'}and share it with your friends!
                </Text>

                <View style={styles.buttonDiv}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => this.props.uploadPhoto()}
                    >
                        <Text style={styles.buttonText}>Upload photo</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonDiv}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => this.props.takePhoto()}
                    >
                        <Text style={styles.buttonText}>Take photo</Text>
                    </TouchableOpacity>
                </View>

                {this.props.image ? (
                    <View style={styles.pictureFrame}>
                    <ScrollView >
                        <Text>Here is your picture</Text>
                        <Image
                            source={{uri: this.props.image}}
                            style={styles.uploadedImage}
                        />
                    </ScrollView>
                    </View>
                ) : null}
            </ScrollView>
        );
    }
}
