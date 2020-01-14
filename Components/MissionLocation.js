import React from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {styles} from '../styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

//component that represents the mission location.
export default class MissionLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: this.props.location,
            error: '',
            loading: false,
        }
    }

    //when user clicks on getting his location, the loaction is checked via the callback function
    //if the location is inside the range, the user is given with the points.
    //if the mission was started at home a different callback is called than if the mission was started from mission component.
    async advance() {
        this.setState({error: ''});
        this.setState({loading: true})
        const success = await this.props.pickAndCheckPosition(this.state.location.lat, this.state.location.lon);
        if (success) {
            await this.props.setPoints(this.state.location.points);
            await this.props.creditPointsUser();
            await this.setState({loading: false});
            if (this.props.isSpot !== undefined) {
                await this.props.onValidationfromHome(this.state.location.name, this.props.isSpot)
            } else {
                await this.props.onValidation(this.state.location.name)
            }
        } else {
            this.setState({error: "Sorry, you're not close enough."})
            this.setState({loading: false})
        }
    }

    render() {
        return (
            <View>
                <View style={styles.logoComponent}>
                    <View style={styles.outercircle}>
                        <View style={styles.logo}>
                            <Ionicons name={'ios-pin'} size={80} color={'white'}/>
                        </View>
                    </View>
                    <Text style={styles.subHeaderRammetto}>{this.state.location.name}</Text>
                    <Text style={styles.subsubHeaderRammetto}>{this.state.location.points}</Text>
                </View>

                <View style={styles.buttonDivLoc}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => this.advance()}
                    >
                        <Text style={styles.buttonText}>Pick your current position</Text>
                    </TouchableOpacity>

                    <Text style={styles.errorInstruct}>{this.state.error}</Text>
                    {this.state.loading ?
                        <View style={styles.loading}>
                            <ActivityIndicator style={styles.splashLoading} size="large" color="black"/>
                        </View>
                        :
                        null
                    }
                    <Text style={styles.locInstructs}>(Note: we apply a tolerance of about 5 km)</Text>
                </View>
            </View>
        )
    }
}
