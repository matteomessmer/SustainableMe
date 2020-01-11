import React from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {styles} from '../styles.js';
import Ranking from './Ranking';

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
        console.log(this.state.userlist)
    }

    render() {


        return (
            <ScrollView>
                <View style={styles.header}>
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
