import React from 'react';
import {Text, View, ScrollView, ActivityIndicator, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import Ranking from './Ranking';

//this component represents the leaderboard, for that it calls a ranking component and calculates
//the list of all users saved by the system.
export default class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userlist: null,
            loading: true
        }
    }

    //gets the list of users and waits till function returns
   async componentDidMount() {

        this.getUsers();
        await this.setState({loading: false});
    }
    async getUsers(){
        const theUserList = await this.props.requestUser();
        await this.setState({userlist: theUserList});
    }


    render() {
		//this.getUsers();


        return (
            <ScrollView>
                <View style={styles.headerleaderboard}>
                    <Text style={styles.subHeaderRammetto}>Leaderboard</Text>
                </View>
                {this.state.loading?
                    <View style={{flex: 1, padding: 20}}>
                        <ActivityIndicator/>
                    </View>:null
                }
                {this.state.userlist ?

                    <Ranking
                        users={this.state.userlist}
                    />
                    : null
                }

                <View style={styles.buttonDiv}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => {
                            this.getUsers();

                        }}
                    >
                        <Text style={styles.buttonText}>Reload</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        )
    }


}
