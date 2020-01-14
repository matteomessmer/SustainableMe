import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from '../styles.js';
import Ranking from './Ranking';

//this component represents the leaderboard, for that it calls a ranking component and calculates
//the list of all users saved by the system.
export default class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userlist: null,
        }
    }

    async componentDidMount() {
        const theUserList = await this.props.requestUser();
        await this.setState({userlist: theUserList});
    }

    render() {


        return (
            <ScrollView>
                <View style={styles.headerleaderboard}>
                    <Text style={styles.subHeaderRammetto}>Leaderboard</Text>
                </View>
                {this.state.userlist ?

                    <Ranking
                        users={this.state.userlist}
                    />
                    : null
                }

                <View>

                </View>

            </ScrollView>
        )
    }


}
