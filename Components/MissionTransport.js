import React from 'react';
import {Text, View, TextInput, Alert, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import UserInstructions from './UserInstructions';
import Ionicons from 'react-native-vector-icons/Ionicons';

//component for the transport mission. the user is rewarded with points if he takes public transport.
//the amount of points depends on the distance of his selected route.
//a user is furthermore able to see instructions for the route, for example which bus he needs to take and also
//walking instructions might be given.
export default class MissionTransport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: '',
            routes: null,
            seeInstructs: false,
        }
    }

    //sets state when user enters a value for from
    handleFromChange = from => {
        this.setState({from: from})
    };

    //sets state when user enters a value for to
    handleToChange = to => {
        this.setState({to: to})
    };

    //used to clear all input fields when user clicks scan code or reset.
    reset = () => {
        this.setState({routes: null, from: '', to: '', seeInstructs: false})
    };

    //uses the callback to calculate the route the user has selected and sets the state if a route could have been found.
    //it also calculated the points depending on the distance of the selected route.
    fetchRoutes = async () => {
        if (this.state.from === '' || this.state.to === '') {
            Alert.alert('Ups you are missing some information, please try again!');
        } else {
            const theRoutes = await this.props.fermate(this.state.from, this.state.to);
            if (theRoutes !== null) {
                await this.setState({routes: theRoutes[0]})
                const points = await this.props.onCalculate(this.state.routes[0].distance);
            } else {
                this.setState({routes: null})
            }

        }

    };
    //used to return the route the user has selected so that it can be displayed on the completed component.
    returnRoute = () => {
        const route = 'From ' + this.state.from + 'to ' + this.state.to + ' ';
        return route;
    }

    render() {

        return (
            <ScrollView>
                <View style={styles.logoComponent}>
                    <View style={styles.outercircle}>
                        <View style={styles.logo}>
                            <Ionicons name={'ios-bicycle'} size={80} color={'white'}/>
                        </View>
                    </View>
                </View>
                <Text style={styles.inputFieldText}>From:</Text>
                <TextInput
                    style={styles.inputField}
                    value={this.state.from}
                    onChangeText={this.handleFromChange}
                />
                <Text style={styles.inputFieldText}>To:</Text>
                <TextInput
                    style={styles.inputField}
                    value={this.state.to}
                    onChangeText={this.handleToChange}
                />
                <View style={styles.buttonDiv}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => this.fetchRoutes()}
                    >
                        <Text style={styles.buttonText}>Calculate</Text>
                    </TouchableOpacity>
                </View>
                {this.state.routes ?
                    <View>
                        <View style={styles.distanceField}>
                            <Text style={styles.normalText}>Distance:</Text>
                            <Text style={styles.subsubHeaderRammetto}>{this.state.routes[0].distance}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState(prevState => ({seeInstructs: !prevState.seeInstructs}))
                            }
                            }
                        >
                            <Text style={styles.instructIcon}>&#9432;</Text>
                        </TouchableOpacity>
                        {this.state.seeInstructs ?
                            <ScrollView>
                                <UserInstructions
                                    routes={this.state.routes}
                                />
                            </ScrollView>
                            : null
                        }
                        <View style={styles.buttonDiv}>
                            <TouchableOpacity
                                style={styles.primaryButton}
                                onPress={() => {
                                    this.props.onQR('SustainableMe', this.returnRoute())
                                    this.reset()
                                }
                                }
                            >
                                <Text style={styles.buttonText}>Scan Code</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonDiv}>
                            <TouchableOpacity
                                style={styles.resetButton}
                                onPress={() => this.reset()}
                            >
                                <Text style={styles.resetButtontext}>RESET</Text>
                            </TouchableOpacity>

                        </View>

                    </View> : null}

            </ScrollView>
        )
    }


}
