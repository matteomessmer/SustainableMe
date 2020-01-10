import React from 'react';
import {Text, View, ScrollView, Button, ActivityIndicator} from 'react-native';
import {ListItem} from 'react-native-elements';
import {styles} from '../styles.js';

//TODO: maybe put the map-function outside the return function and assign it to a constant
export default class MissionsRestaurantList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            isLoading: true,
        }
    }

    async componentDidMount() {
        const restaurants = await this.props.getRestaurants();
        await this.setState({restaurants: restaurants, isLoading: false});
    }


    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View>
                {
                    this.state.restaurants.map((restaurant, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{source: {uri: restaurant.image}}}
                            title={restaurant.name}
                            subtitle={restaurant.points + ' points'}
                            bottomDivider
                            chevron
                            onPress={() => this.props.onRestaurantClick(restaurant)}
                        />
                    ))
                }
            </View>
        )
    }
}
