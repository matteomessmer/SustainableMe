import React from 'react';
import {Container} from 'unstated'
import md5 from 'md5';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class ProfileContainer extends Container {
    state = {
        user: null,
		level: null,
    }
    /*
      This method registers a new user on the DB
    */
    register = async (name, email, password) => {
        //password is hashed
        const hash = md5(password);

        //request register (expect json with the result of the operation)
        const response = await fetch('http://sustainableme.fablabnetwork.ml/API/register.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email.toLowerCase(),
                password: hash,
            }),
        }).catch((error) => {
            alert(response);
            return null;
        });

        const responseJson = await response.json();
        alert(response);

        //check for errors
        if (responseJson.error) {
            alert(responseJson.description);
            return false;
        } else {
            alert("Check your mailbox to confirm your email address");
            return true;
        }
    };

    /*
      This methods calls the DB to grant a login. If no error is found, the state is updated with the logged user.
    */
    login = async (email, password) => {

        //password is hashed
        const hash = md5(password);

        //request login (expect json containing user)
        const response = await fetch('http://sustainableme.fablabnetwork.ml/API/login.php', {
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
        if (responseJson.error) {
            alert(responseJson.description);
            return null;
        } else {
            this.setState({user: responseJson.user});
            return responseJson.user;
        }
    }

    /*
      Method to reset forgotten password
    */
    resetPassword = async (email) => {
        const response = await fetch('http://sustainableme.fablabnetwork.ml/API/resetPassword.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.toLowerCase(),
            }),
        }).catch((error) => {
            console.error(error);
            return null;
        });

        const responseJson = await response.json();

        return responseJson;
    }
	
	
    //this will update the points for this user in the DB.
    creditPointsUser = async (points) => {
        const response = await fetch('http://sustainableme.fablabnetwork.ml/API/addPoints.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                points: points,
                id: this.state.user.id,


            }),
        }).catch((error) => {
            console.error(error);
            return null;
        });

        const responseJson = await response.json();
        if (responseJson.error) {
            alert(responseJson.description);
        } else {
			let user = this.state.user;
			user.points= responseJson.points;
            await this.setState({user: user});
        }
    };


    /*
      Method to edit user info on the DB. Doesn't include the password (which requires additional DB-side logic)
    */
    editUser = async (user) => {
        const response = await fetch('http://sustainableme.fablabnetwork.ml/API/modifyUser.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: user.id,
                name: user.name,
                email: user.email.toLowerCase(),
                image: user.image,
            }),
        }).catch((error) => {
            //console.error(error);
            return null;
        });

        const responseJson = await response.json();

        if (responseJson.error) {
            alert(responseJson.description);
            return null;
        } else {
            //console.log(responseJson);
        }
    }

    /*Method to change on the DB the user's password*/
    editPassword = async (id, oldPassword, newPassword) => {

        // Old and new passwords are hashed
        const oldHash = md5(oldPassword);
        const newHash = md5(newPassword);

        const response = await fetch('http://sustainableme.fablabnetwork.ml/API/modifyUser.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                oldPassword: oldHash,
                password: newHash,
            }),
        }).catch((error) => {
            //console.error(error);
            return null;
        });

        const responseJson = await response.json();

        //console.log(responseJson)
        if (responseJson.error) {
            alert(responseJson.description);
            return null;
        } else {
            //console.log(responseJson);
        }
    }

    /*
      Method to request permission to the user's camera roll
    */
    getPermissionAsync = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return false
        } else {
            return true
        }
    }

    /*
      Method to pick a user's image (editable)
      Its local library is called and, if the image is still available, the user gets updated.
    */
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) {
            const newUser = {
                id: this.state.user.id,
                name: this.state.user.name,
                email: this.state.user.email,
                image: result.uri
            }
            this.setState({user: newUser});
        }
    }

    /*
      The current new user is updated on the DB as well.
    */
    editInfo = async () => {
        const user = this.state.user;
        await this.editUser(user);

    };

    /*
      Overall method to change a user's image.
      First, permission to handle the camera roll is requested. Then, the camera roll is accessed and the user updated accordingly.
      Finally, the user is updated on the DB as well
    */
    editImage = async () => {
        const permission = await this.getPermissionAsync();
        if (permission) {
            await this._pickImage();
            await this.editInfo();
        }
    }

    /*
      Method to delete the user (upon logout).
    */
    resetUser = () => {
        this.setState({user: null})
    };

}
