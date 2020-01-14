import React from 'react';
import {Text, View, TextInput, Image, Alert, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import UserInstructions from './UserInstructions';
import Ionicons from 'react-native-vector-icons/Ionicons';


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

    handleFromChange = from => {
        this.setState({from: from})
    };
    handleToChange = to => {
        this.setState({to: to})
    };
    reset = () => {
        this.setState({routes: null, from: '', to: '', seeInstructs: false})
    };
    fetchRoutes = async () => {
        console.log(this.state.from)
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
    returnRoute=()=>{
        const route='From '+this.state.from +' to '+this.state.to +' ';
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
                    <Text style={styles.subHeaderRammetto}>TRANSPORT MISSION</Text>
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
                                    this.props.onQR('SustainableMe',this.returnRoute())
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
