import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Component for the spotlight mission showing the name of the mission and the points.
//Each mission leads to the specific screen of the mission depending on its type
export default class SpotlightMission extends React.Component {


    render() {

        return (
            <TouchableOpacity
                style={styles.missionButton}
                onPress={() => {
                    if (this.props.type == 'environment')
                        this.props.onEnvironment(this.props.name, this.props.description, this.props.points, this.props.spot);

                    if (this.props.type == "location")
                        this.props.onLocation(this.props.mission, this.props.spot)

                    if (this.props.type == 'restaurant')
                        this.props.onRestaurant(this.props.mission, this.props.description, this.props.spot)
                }
                }
            >

                <Ionicons name={this.props.picture(this.props.type)} size={50} color={'#417110'}/>

                <Text style={styles.titleMission}>{this.props.name}</Text>
                <Text>{this.props.points}</Text>
            </TouchableOpacity>


        )
    }


};
