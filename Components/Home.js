import React from 'react';
import {Text, View, ScrollView, Button, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';
import MissionList from './MissionList';
import { Subscribe } from 'unstated';
import MissionContainer from '../Container/MissionContainer';

const Home = props => {

        return (
            <View>
            <View style={styles.header}>
                <Text style={styles.subHeaderRammetto}>Spotlight missions</Text>
            </View>

            <Subscribe to={[MissionContainer]}>
            {missionContainer => (
              <MissionList
              computeList={missionContainer.getSpotlightMissions}
              />
            )}

            </Subscribe>

                <View style={styles.buttonDiv}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => props.onMore()}
                    >
                        <Text style={styles.buttonText}>See more</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
}


export default Home;
