import React from 'react';
import { Text, View, ScrollView,Button } from 'react-native';
import { styles} from '../styles.js';
import InstructionList from './InstructionList';

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
                <View>
                    <Text>Distance: {instruct.distance}</Text>
                    <Text>Duration: {instruct.duration}</Text>
                    <Text>Departure time: {instruct.departure}</Text>
                    <InstructionList
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