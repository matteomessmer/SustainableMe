import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles.js';
import StepsInstruction from './StepsInstruction';

//this components shows the user the instructions for the route, for the instructions
//that concern walking steps StepsInstructions component is called, since it contains different information.
export default class UserInstructions extends React.Component {
    constructor(props) {
        super(props);

    }

    addKeys = (val, index) => (
        {...val, key: index}
    );

    render() {
        const instructions = this.props.routes.map(instruct => {
            return (
                <View style={styles.instructionContainer}>
                    <Text style={styles.highlighting}>Duration:<Text
                        style={styles.userInstructs}>{instruct.duration}</Text></Text>
                    <Text style={styles.highlighting}>Departure: <Text
                        style={styles.userInstructs}>{instruct.departure}</Text></Text>
                    <StepsInstruction
                        detailedRoute={instruct.routes}
                    />
                </View>
            )
        });
        const theList = instructions.map(this.addKeys);
        return (
            <View style={styles.instructionField}>
                {theList}
            </View>
        )
    }
}