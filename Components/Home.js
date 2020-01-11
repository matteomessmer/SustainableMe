import React from 'react';
import {Text, View, ScrollView, Button, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import MissionList from './MissionList';

export default class Home extends React.Component {
    render() {

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



