import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from "../styles";

//this component is there to display the first three leaders,
//they will appear in a different manner than the following ones.
export default class FirstThree extends React.Component {
    render() {
        const icon = [require('../images/crown1.png'), require('../images/crown2.png'), require('../images/crown3.png')];

        const img = icon[this.props.rank];

        return (
            <View style={styles.firstThreeLeader}>

                <Image
                    source={img}
                    style={styles.ImageIconStyle}
                />
                <View style={styles.inLineLeader}>
                    <Text style={styles.leaderBoardText}>{this.props.rank + 1 + '. ' + this.props.name}</Text>
                    <Text style={styles.leaderBoardText}>{'\t'} Level: {this.props.level}</Text>
                </View>
            </View>
        )
    }
}