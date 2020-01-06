import React from 'react';
import { Text, View,ScrollView, Button } from 'react-native';
import { styles} from '../styles.js';

export default class Home extends React.Component{

    render(){
      return (
          <View>
            <Text style={styles.logoTitle}>Spotlight missions</Text>
            <ScrollView>
            //Show all the available missions using database
            <Text>Mission 1</Text>
            <Text>Mission 2</Text>
            </ScrollView>

            <Button title="See more" onPress={() => props.navigation.navigate("Mission")} />
            </View>
)
    }


}
