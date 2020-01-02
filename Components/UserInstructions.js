import React from 'react';
import { Text, View, ScrollView,Button } from 'react-native';
import { styles} from '../styles.js';
import StepsInstruction from './StepsInstruction';

export default class UserInstructions extends React.Component{
    constructor(props) {
        super(props);

    }
    addKeys = (val, index) => (
        {...val, key: index}
    );

    render(){
        const instructions=this.props.routes.map(instruct =>{
            return (
                <View style={styles.instructionContainer}>
                    <Text style={styles.highlighting}>Duration:<Text  style={styles.userInstructs}>{instruct.duration}</Text></Text>
                    <Text style={styles.highlighting}>Departure: <Text  style={styles.userInstructs}>{instruct.departure}</Text></Text>
                    <StepsInstruction
                        detailedRoute={instruct.routes}
                    />
                </View>
            )
        });
        const theList=instructions.map(this.addKeys);
        return(
            <View style={styles.instructionField}>
                {theList}
            </View>
        )
    }
}