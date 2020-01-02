import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import Home from '../Components/Home'
import {styles} from "../styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Subscribe} from "unstated";
import ProfileContainer from "../Container/ProfileContainer";


export default class HomeScreen extends React.Component{


    static navigationOptions = ({ navigation }) => {

        return {
            headerTitle: 'SustainableMe',
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: '#417110'
            },
            headerRight:
                <TouchableOpacity
                    style={styles.profileButton}
                    onPress={()=>navigation.navigate('Profile')}
                >
                    <Ionicons name={'ios-person'} size={35} color={'white'}/>
                </TouchableOpacity>
        };

    };

    render(){

        return (
            <View>
                <Home />
            </View>
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

