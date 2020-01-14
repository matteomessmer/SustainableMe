import React from 'react';
import {TouchableOpacity} from 'react-native';
import Home from '../Components/Home'
import {styles} from "../styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MissionContainer from "../Container/MissionContainer";
import {Subscribe} from "unstated";

//HomeScreen is used to call Home component. It is defined as a actual component so that some more specific
//navigation options can be specified. This screen passes props to the home component which are further on used to
//distinguish which type of mission should be opened and to understand if a mission was opened through home or from mission itself.
export default class HomeScreen extends React.Component {

    //Navigation options for the header of the screen
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
                        onMore={() => this.props.navigation.navigate('Missions')}
                        onEnvironment={(nameOfMission, description, points,spot) => this.props.navigation.navigate('MissionEnvironment', {
                            mission: nameOfMission,
                            description: description,
                            points: points,
                            spot: spot
                        })}
                        onTransport={() => this.props.navigation.navigate('MissionTransport')}
                        onLocation={(location,spot) => this.props.navigation.navigate('MissionLocation', {location: location, spot: spot})}
                        onRestaurant={(restaurant, spot) => this.props.navigation.navigate('MissionRestaurant', {restaurant: restaurant, spot: spot})}
                        computeList={missionContainer.getSpotlightMissions}
                        computePicture={missionContainer.computePicture}
                        spotlight={true}
                    />
                )}

            </Subscribe>

        )
    }
}
