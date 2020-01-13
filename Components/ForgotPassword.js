import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../styles.js';

export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }
    resetPassword = async () => {
        const reset = await this.props.resetPassword(this.state.email);
		alert(reset.description);
		if(!reset.error) {
			this.props.redirect();
		}
    };
	
    handleEmailChange = email => {
        this.setState({email: email})
    };

    render() {
        return (
            <View style={styles.greenContainer}>
                <View style={{flex: 1}}/>
                <View style={{flex: 1.5}}>
                    <Text style={styles.logoWhite}>Reset Password</Text>
                </View>
                <View style={{flex: 3}}>
                    <Text style={styles.whiteCenteredText}>EMAIL</Text>
                    <TextInput
                        placeholder="Email"
                        style={styles.inputField}
                        onChangeText={this.handleEmailChange}
                        value={this.state.email}
                    />
                    <View style={styles.buttonDiv}>
                        <TouchableOpacity style={styles.primaryButton} onPress={() => {
                            this.resetPassword()
                        }}>
                            <Text style={styles.buttonText}>RESET PASSWORD</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 1}}>
					<TouchableOpacity onPress={() => {this.props.redirect()}}>
                        <Text style={styles.whiteCenteredText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
