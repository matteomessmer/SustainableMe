import React from 'react';
import {Container} from 'unstated'
import md5 from 'md5';

export default class ProfileContainer extends Container {
    state = {
        user: null,
    }
	
	login = async (email, password) => {
		//hash password
		const hash = md5(password);
		
		//request login (expect json containing user)
		const response = await fetch('http://sustainableme.fablabnetwork.tk/API/login.php', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email.toLowerCase(),
				password: hash,
			}),
		}).catch((error) => {
			console.error(error);
			return null;
		});
		
		const responseJson = await response.json();
		
		//check for errors
		//return user or null
		if(responseJson.error) {
			alert(responseJson.description);
			return null;
		} else {
			this.setState({user:responseJson.user});
			return responseJson.user;
		}
	}


}


