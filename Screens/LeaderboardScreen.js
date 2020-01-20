import React from 'react';
import {View} from 'react-native';
import Leaderboard from "../Components/Leaderboard";
import {Subscribe} from "unstated";
import UserContainer from "../Container/UserContainer";

//this screen calls the leaderboard component and passes a callback function of the
//user container, which gathers all users from the db.
const LeaderBoardScreen = props => {
    return (
        <View>
            <Subscribe to={[UserContainer]}>
                {usercontainer => (
                    <Leaderboard
                        requestUser={() => usercontainer.getUsers()}
                    />
                )
                }

            </Subscribe>
        </View>
    )
};
LeaderBoardScreen.navigationOptions = {
    title: 'Leaderboard',
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    },
    headerTitleStyle: {
        fontFamily: 'Rammetto-One',
        fontWeight: "200"
    }
};


export default LeaderBoardScreen;
