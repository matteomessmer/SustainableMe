import React from 'react';
import {Container} from 'unstated'
import md5 from 'md5';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class ProfileContainer extends Container {
    state = {
        user: null,
    }

    register = async (name, email, password) => {
        //hash password
        const hash = md5(password);

        //request login (expect json containing user)
        const response = await fetch('http://sustainableme.fablabnetwork.tk/API/register.php', {
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
            console.error(error);
            return null;
        });

        const responseJson = await response.json();
        alert(response);
        //check for errors
        //return user or null
        if (responseJson.error) {
            alert(responseJson.description);
            return false;
        } else {
            alert("Check your mailbox to confirm your email address");
            return true;
        }
    };

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
        if (responseJson.error) {
            alert(responseJson.description);
            return null;
        } else {
            this.setState({user: responseJson.user});
            return responseJson.user;
        }
    }

    resetPassword = async (email) => {
        const response = await fetch('http://sustainableme.fablabnetwork.tk/API/resetPassword.php', {
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

    editUser = async (user) => {

        const response = await fetch('http://sustainableme.fablabnetwork.tk/API/modifyUser.php', {
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
            console.error(error);
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

    editPassword = async (id, oldPassword, newPassword) => {

        const oldHash = md5(oldPassword);
        const newHash = md5(newPassword);

        const response = await fetch('http://sustainableme.fablabnetwork.tk/API/modifyUser.php', {
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
            console.error(error);
            return null;
        });

        const responseJson = await response.json();

        console.log(responseJson)
        if (responseJson.error) {
            alert(responseJson.description);
            return null;
        } else {
            //console.log(responseJson);
        }
    }

    /*methods to handle image pick and change*/
    getPermissionAsync = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return false
        } else {
            return true
        }
    }

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

    editImage = async () => {
        const permission = await this.getPermissionAsync();
        if (permission) {
            await this._pickImage();
            await this.editInfo();
        }
    }

    editInfo = async () => {
        const user = this.state.user;
        await this.editUser(user);
        /*this.setState({editName: false, editEmail: false});*/
    };

    resetUser = () => {
        this.setState({user: null})
    };

}
