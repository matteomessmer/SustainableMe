import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Leaderboard from "../Components/Leaderboard";
import {Subscribe} from "unstated";
import UserContainer from "../Container/UserContainer";


const LeaderBoardScreen = props => {
    return (
        <View>
            <Subscribe to={[UserContainer]}>
                {usercontainer =>(
                    <Leaderboard
                        requestUser={()=>usercontainer.getUsers()}
                    />
                )
                }

            </Subscribe>
        </View>
    )
};
LeaderBoardScreen.navigationOptions = {
    title: 'LeaderBoard',
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    }
};

export default LeaderBoardScreen;
