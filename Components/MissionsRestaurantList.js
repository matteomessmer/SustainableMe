import React from 'react';
import { ScrollView, View, ActivityIndicator} from 'react-native';
import {ListItem} from 'react-native-elements';
import {styles} from '../styles.js';

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
        const missionList =
            this.state.restaurants.map((restaurant, i) => {
                return (
                    <ListItem
                        key={i}
                        leftAvatar={{source: {uri: restaurant.image}}}
                        title={restaurant.name}
                        titleStyle={styles.listTitle}
                        subtitle={restaurant.points + ' points'}
                        subTitleStyle={styles.subTitle}
                        bottomDivider
                        chevron
                        onPress={() => this.props.onRestaurantClick(restaurant)}
                    />
                )

            });

        return (
            <ScrollView>
                {missionList}
            </ScrollView>
        )
    }
}
