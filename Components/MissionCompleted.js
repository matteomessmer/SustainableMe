import React from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';

//After the user completes a mission, the component is shown to let him know that he succeeded.
//A "thank you" message is shown and the user sees his total number of points after the completion
//of the mission. Moreover, he is able to see how many points are left till the next level.
//Additionally, he can go to the other missions to complete another one.
export default class MissionCompleted extends React.Component {
	state = {
		levelUp:false,
		loading:true,
		level: 0
	}
	
	componentDidMount() {
		this.checkLevel();
	}
	
	checkLevel = async () => {
		await this.setState({loading:true});
		
		const level = this.props.level(this.props.userPoints);
		await this.setState({level: level});
		const lastLevel = this.props.level(this.props.userPoints - this.props.missionPoints);
		const levelUp = this.state.level !== lastLevel;
		
		await this.setState({levelUp: levelUp, loading:false});
	}
	

    render() {
		if(this.state.loading) {
			return <View />
		}
        return (
            <ScrollView>
                <View style={styles.logoComponent}>
				
                    {
						this.state.levelUp ? 
							<View>
								<Text style={styles.subHeaderRammetto}>Congratulations!</Text>
								<Text style={styles.inputFieldText}>Level up: your level is now {this.state.level}!</Text>
							</View>
						: 
							<Text style={styles.subHeaderRammetto}>Thank you!</Text>
					}
					
                    <Text style={styles.inputFieldText}>You have just completed the{'\n'}
                        {this.props.missionName}{'\n'}</Text>
                    <Image
                        source={require('../images/completed.png')}
                        style={{height: 200, width: 200}}
                    />
                </View>

                <View>
                    <Text style={styles.inputFieldText}>{'\n'} {this.props.userPoints ?
                            <Text>You have a total of {this.props.userPoints} points</Text>
                            :
                            null
                        }{'\n'}{'\n'}
						{ this.props.pointsLeft(this.props.userPoints)>=0?
							 <Text> You need {this.props.pointsLeft(this.props.userPoints)} points{'\n'}
							to reach next level </Text> 
						:
						null
						}
						</Text>
                </View>


                <View style={styles.buttonDiv}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => {
                            this.props.onOther()

                        }}
                    >
                        <Text style={styles.buttonText}>See other missions</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }


}
