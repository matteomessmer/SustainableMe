import React from 'react';
import {Text, View, TextInput, Image, Button} from 'react-native';
import {styles} from '../styles.js';

export default class StepsInstruction extends React.Component {
    constructor(props) {
        super(props);

    }

    addKeys = (val, index) => (
        {...val, key: index}
    );

    render() {
        const instructList = this.props.detailedRoute.map((obj,index) => {
            console.log(obj)
            return (
                <View>
                    <Text>{index+1 +': ' +obj.instructions}</Text>
                    {obj.distance ?
                        <Text>{obj.distance}</Text> : null
                    }
                    {obj.duration ?
                        <Text> It will take you about {obj.duration}</Text> : null
                    }
                    {obj.details ?
                        <Text>Means of transport: {obj.details}</Text> : null
                    }

                </View>

            )
        })
        const instList = instructList.map(this.addKeys);
        return (
            <View>
                {instList}
            </View>

        )
    }
}