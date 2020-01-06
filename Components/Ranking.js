import React from 'react';
import {Text, View, TextInput, Image, Button, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import FirstThree from './FirstThree';

export default class Ranking extends React.Component {

    addKeys = (val, index) => (
        {...val, key: index}
    );

    render() {


        const leaderBoard = this.props.users.map((user, index) => {
            if (index <= 2) {
                return (
                    <FirstThree
                        rank={index}
                        name={user.name}
                        level={user.level}
                    />
                )
            }
            return (
                <View style={styles.followingLeader}>
                    <Text style={styles.leaderBoardText}>{index + 1 + '. ' + user.name}</Text>
                    <Text style={styles.leaderBoardText}>{'\t'}Level: {user.level}</Text>

                </View>
            )


        });
        const usersinLead = leaderBoard.map(this.addKeys);

        return (
            <View style={styles.leaderBoard}>
                {usersinLead}
            </View>
        )
    }
}