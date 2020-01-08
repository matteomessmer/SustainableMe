import React from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {styles, Button} from '../styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class MissionEnvironment extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
      this.props.clearPage();
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

                <Text style={styles.inputFieldText}>
                    You have just chosen the{'\n'}
                    "{this.props.nameOfMission}"
                    {'\n'}mission
                </Text>
                <Text style={styles.inputFieldText}>
                    {'\n'}Upload a proof photo{'\n'}to get the points
                </Text>

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
                    <ScrollView >
                      <Text style={styles.inputFieldText}>Here is your picture</Text>
                        <Image
                            source={{uri: this.props.image}}
                            style={styles.uploadedImage}
                        />

                        <View style={styles.buttonDiv}>
                          <Text style={styles.inputFieldText}>Satisfied?</Text>
                            <TouchableOpacity
                                style={styles.primaryButton}
                                onPress={() => this.props.confirm(this.props.nameOfMission)}
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
