import React from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {styles} from '../styles.js';

//component for the restaurant mission. the user is rewarded with points if he goes to certain restaurants.
//a user is furthermore able to see information about the restaurant, its website, its address in the map app.
export default class MissionRestaurant extends React.Component {

    constructor(props) {
        super(props);
        this.props.setPoints(this.props.mission.points);
    }
	
	//open the website in the browser
	openWebsite = () => {
		this.props.onWebsite(this.props.mission.url);
	}
	
	//open the map and show where the restaurant is
	openMaps = () => {
		this.props.onMaps(this.props.mission.address);
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

                            this.props.onQR(this.props.mission.qr, this.props.mission.name, this.props.isSpot, this.props.mission.points)
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
