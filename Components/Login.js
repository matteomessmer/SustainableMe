import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';

//this component is used to log in a user
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    //takes the callback function passed as props and sets the parameters to the values the user has
    //entered and sends it back to the container which will check in the db if a user with such credentials exists.
    //if yes the user is successfully logged in.
    login = async () => {
        const user = await this.props.login(this.state.email, this.state.password);
		if(user) {
			this.props.onLogin()
		}
    };

    // sets the state when user has entered email
    handleEmailChange = email => {
        this.setState({email: email})
    };
    //sets the state when user has entered password
    handlePasswordChange = password => {
        this.setState({password: password})
    };
	
    render() {
        return (
            <View style={styles.greenContainer}>
                <View style={{flex: 1}}/>
                <View style={{flex: 1.5}}>
                    <Text style={styles.logoWhite}>SustainableMe</Text>
                </View>
                <View style={{flex: 3}}>
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
                    <View style={styles.buttonDiv}>
                        <TouchableOpacity style={styles.primaryButton} onPress={() => {
                            this.login()
                        }}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <TouchableOpacity onPress={() => {this.props.onForgotPassword()}}>
                        <Text style={styles.whiteCenteredText}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
					<TouchableOpacity onPress={() => {this.props.onRegistration()}}>
                        <Text style={styles.whiteCenteredText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
