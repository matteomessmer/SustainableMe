import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles.js';

//component to give the user detailed instructions about the route he need to make
//in order to get to that points he likes (Transport Mission)
//depending on the information we get from the webservice we render different things. So, if
//the response of the webservice contains steps the user needs to do by feet it will render the distance, for the means
//of transport we do not have such information.
export default class StepsInstruction extends React.Component {
    constructor(props) {
        super(props);

    }

    addKeys = (val, index) => (
        {...val, key: index}
    );

    render() {
        const instructList = this.props.detailedRoute.map((obj, index) => {
            return (
                <View>
                    <Text style={styles.highlighting}>{index + 1 + ': '}<Text
                        style={styles.userInstructs}>{' ' + obj.instructions + '.'}</Text>
                        {obj.distance ?
                            <Text style={styles.userInstructs}>{' About ' + obj.distance + '.'}</Text> : null
                        }
                        {obj.duration ?
                            <Text style={styles.userInstructs}> {' '}It will take you
                                about {obj.duration + '.'}</Text> : null
                        }
                        {obj.details ?
                            <Text style={styles.highlighting}> Means of transport: {obj.details + '.'}</Text> : null
                        }
                    </Text>
                </View>

            )
        });
        const instList = instructList.map(this.addKeys);
        return (
            <View>
                {instList}
            </View>

        )
    }
}