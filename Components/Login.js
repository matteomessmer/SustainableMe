import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { styles} from '../styles.js';

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
			user: null
        }
    }
	
    login = async () => {
        const user = await this.props.login(this.state.email, this.state.password)
        this.setState({user: user})
        console.log(user);
    }
    
	handleEmailChange = email => {
        this.setState({email: email})
    }
	
    handlePasswordChange = password => {
        this.setState({password: password})
    }
	
	render(){
		return (
			<View style={styles.greenContainer}>
				<View style={{flex:1}} />
				<View style={{flex:1.5}}>
					<Text style={styles.logoWhite}>SustainableMe</Text>
				</View>
				<View style={{flex:3}}>
					<Text style={styles.whiteCenteredText}>EMAIL</Text>
					<TextInput 
						placeholder="Email"
						style={styles.inputField}
						onChangeText={this.handleEmailChange}
						value={this.state.email}
					/>
					<Text style={styles.whiteCenteredText}>PASSWORD</Text>
					<TextInput 
						placeholder="Password"
						secureTextEntry={true} 
						style={styles.inputField}
						onChangeText={this.handlePasswordChange}
						value={this.state.password}
					/>
					<TouchableOpacity style={styles.primaryButton} onPress={() =>this.login()}>
						<Text style={styles.buttonText}>LOGIN</Text>
					</TouchableOpacity>
				</View>
				<View style={{flex:1}}>
					<TouchableOpacity>
					<Text style={styles.whiteCenteredText}>Forgot password?</Text>
					</TouchableOpacity>
				</View>
				<View style={{flex:1}}>
					<TouchableOpacity>
					<Text style={styles.whiteCenteredText}>REGISTER</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
	
}
