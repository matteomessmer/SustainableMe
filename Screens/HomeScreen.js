import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import Home from '../Components/Home'
import {styles} from "../styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MissionContainer from "../Container/MissionContainer";
import {Subscribe} from "unstated";


export default class HomeScreen extends React.Component {


    static navigationOptions = ({navigation}) => {
        const nav = navigation;
        return {
            headerTitle: 'SustainableMe',
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: '#417110'
            },
            headerRight:
                <TouchableOpacity
                    style={styles.profileButton}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Ionicons name={'ios-person'} size={35} color={'white'}/>
                </TouchableOpacity>
        };

    };

    render() {

        return (
            <Subscribe to={[MissionContainer]}>
                {missionContainer => (
                    <Home
                        onMore={() => this.props.navigation.navigate('Mission')}
                        onEnvironment={(nameOfMission, description, points) => this.props.navigation.navigate('MissionEnvironment', {
                            mission: nameOfMission,
                            description: description,
                            points: points
                        })}
                        onTransport={() => this.props.navigation.navigate('MissionTransport')}
                        onLocation={(location) => this.props.navigation.navigate('MissionLocation', {location: location})}
                        onRestaurant={(restaurant) => this.props.navigation.navigate('MissionRestaurant', {restaurant: restaurant})}
                        computeList={missionContainer.getSpotlightMissions}
                        computePicture={missionContainer.computePicture}
                    />
                )}

            </Subscribe>

        )
    }
}

/* import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Home from '../Components/Home'
import {styles} from "../styles";
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeScreen = props => {

    return (
        <View>
            <Home />
        </View>
    )
};

HomeScreen.navigationOptions = {
    title: 'Home',
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    },
    headerRight:
        <TouchableOpacity
            style={styles.profileButton}
            onPress={()=>console.log('success')}
        >
            <Ionicons name={'ios-person'} size={30} color={'white'}/>
        </TouchableOpacity>
};
export default HomeScreen;
*/
