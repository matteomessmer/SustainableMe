import React from 'react';
import {Text, View, ScrollView, Button, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import MissionList from './MissionList';

export default class Home extends React.Component {
    render() {

//Home component showing the spotlight missions (the missions that are highlighted as
//more important and relevant than others). A list of missions is shown and a button "See more"
//allows the user to see the complete list of missions available
        return (
            <View style={styles.container_home}>
                <View style={styles.header}>
                    <Text style={styles.subHeaderRammetto}>Spotlight missions</Text>
                </View>
                <View>
                    <MissionList
                        computeList={this.props.computeList}
                        computePicture={this.props.computePicture}
                        onEnvironment={this.props.onEnvironment}
                        onTransport={this.props.onTransport}
                        onLocation={this.props.onLocation}
                        onRestaurant={this.props.onRestaurant}
                        isSpot={this.props.spotlight}
                    />

                    <View style={styles.buttonDiv}>
                        <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={() => props.onMore()}
                        >
                            <Text style={styles.buttonText}>See more</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        )
    }


}
