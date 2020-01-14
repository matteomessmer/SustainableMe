import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image, Linking} from 'react-native';
import {styles} from '../styles.js';

export default class MissionRestaurant extends React.Component {

    constructor(props) {
        super(props);
        this.props.setPoints(this.props.mission.points);
    }
	
	openWebsite = () => {
		Linking.canOpenURL(this.props.mission.url).then(supported => {
			if (supported) {
				Linking.openURL(this.props.mission.url);
			} else {
				console.log("Don't know how to open URI: " + this.props.url);
			}
		});
	}
	
	openMaps = () => {
		const url = 'https://www.google.com/maps/place/' + this.props.mission.address;
		Linking.canOpenURL(url).then(supported => {
			if (supported) {
				Linking.openURL(url);
			} else {
                console.log("Don't know how to open URI: " + this.props.url);
			}
		});
	}
	
    render() {
        return (
            <ScrollView>
                <View style={styles.restImageContainer}>
                    <Text style={styles.subHeaderRammetto}>{this.props.mission.name}</Text>
                    <Image
                        style={styles.restImage}
                        source={{uri: this.props.mission.image}}
                    />
                    <Text style={styles.subsubHeaderRammetto}> Points: {this.props.mission.points}</Text>
                </View>

				<View style={styles.buttonDiv}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => {
							this.openMaps()
                        }}
                    >
                        <Text style={styles.buttonText}>Maps</Text>
                    </TouchableOpacity>
                </View>
				
				<View style={styles.buttonDiv}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => {
							this.openWebsite()
                        }}
                    >
                        <Text style={styles.buttonText}>Website</Text>
                    </TouchableOpacity>
                </View>
				
				
                <View style={styles.buttonDiv}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => {

                            this.props.onQR(this.props.mission.qr, this.props.mission.name, this.props.isSpot)
                        }}
                    >
                        <Text style={styles.buttonText}>Scan Code</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.descpRest}>
                    <Text style={styles.descpRestText}>{this.props.mission.description}</Text>
                </View>
            </ScrollView>
        )
    }

}
