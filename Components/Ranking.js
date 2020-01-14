import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {styles} from '../styles.js';
import FirstThree from './FirstThree';

//the ranking component is used to show all users in a ranking depending on their progress in the game.
//for the first three an additional component FirstThree is called, since they are displayed differently.
//otherwise user's name and level is shown.
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
            <ScrollView style={styles.leaderBoard}>
                {usersinLead}
            </ScrollView>
        )
    }
}