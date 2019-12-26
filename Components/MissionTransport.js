import React from 'react';
import {Text, View, TextInput, Image, Button, ScrollView} from 'react-native';
import {styles} from '../styles.js';
import UserInstructions from './UserInstructions';

export default class MissionTransport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: '',
            routes: null,

        }
    }

    handleFromChange = from => {
        this.setState({from: from})
    };
    handleToChange = to => {
        this.setState({to: to})
    };
    fetchRoutes = async () => {
        const theRoutes = await this.props.fermate(this.state.from, this.state.to)
        this.setState({routes: theRoutes[0]})
        //console.log(this.state.routes);

    }

    render() {

        return (
            <ScrollView>
                <View style={styles.logoComponent}>
                    <Image
                        source={require('./bike.png')}
                        style={styles.logoIcon}
                    />
                    <Text style={styles.logoTitle}>TRANSPORT MISSION</Text>
                </View>
                <Text>From:</Text>
                <TextInput
                    style={styles.inputField}
                    value={this.state.from}
                    onChangeText={this.handleFromChange}
                />
                <Text>To:</Text>
                <TextInput
                    style={styles.inputField}
                    value={this.state.to}
                    onChangeText={this.handleToChange}
                />

                <Button
                    onPress={() =>
                        this.fetchRoutes()

                    }
                    title={'Calculate'}
                />
                {this.state.routes ?
                    <ScrollView>
                    <UserInstructions
                        routes={this.state.routes}
                    />
                    </ScrollView>
                    : null


                }
            </ScrollView>
        )
    }


}
