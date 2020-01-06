import React from 'react';
import {Text, View, ScrollView, Button, Image, TouchableOpacity, TextInput} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Permissions from 'expo-permissions';
import {styles} from '../styles.js';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editName: false,
            name: this.props.user.name,
            editEmail: false,
            email: this.props.user.email,
            editPassword: false,
            oldPassword: '',
            newPassword: '',
            cnfPassword: '',
            image: this.props.user.image,
        }
    }

    handleNameChange = name => {
        this.setState({name: name})
    }

    handleEmailChange = email => {
        this.setState({email: email})
    }

    handleOldPasswordChange = oldPassword => {
        this.setState({oldPassword: oldPassword})
    }

    handleNewPasswordChange = newPassword => {
        this.setState({newPassword: newPassword})
    }

    handleCnfPasswordChange = cnfPassword => {
        this.setState({cnfPassword: cnfPassword})
    }

    getPermissionAsync = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        console.log(status)
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

        console.log(result);

        if (!result.cancelled) {
            this.setState({image: result.uri});

        }
    }

    editImage = async () => {
        const permission = await this.getPermissionAsync();
        if (permission) {
            await this._pickImage();
            this.editInfo();
        }
    }

    editInfo = async () => {
        const user = {id: this.props.user.id, name: this.state.name, email: this.state.email, image: this.state.image}
        console.log("my uri: " + user.image)
        await this.props.editUser(user);
        this.setState({editName: false, editEmail: false});
    }

    editPwd = async () => {
        console.log("id: " + this.props.user.id)
        console.log("Old Password: " + this.state.oldPassword)
        console.log("New Password: " + this.state.newPassword)
        console.log("Cnf Password: " + this.state.cnfPassword)
        if (this.state.newPassword === this.state.cnfPassword) {
            await this.props.editPassword(this.props.user.id, this.state.oldPassword, this.state.newPassword);
            this.setState({editPassword: false, oldPassword: '', newPassword: '', cnfPassword: ''})
        } else {
            alert("The new password and its confirmation do NOT match. Try again!")
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.logoComponent}>
                    {this.state.image === null ?
                        <Ionicons name={'ios-person'} size={150} color={'#417110'}/>
                        :
                        <Image
                            source={{uri: this.state.image}}
                            style={{width: 150, height: 150}}
                        />
                    }

                    <TouchableOpacity onPress={() => this.editImage()}>
                        <Ionicons name={'md-create'} size={30} color={'#417110'}/>
                    </TouchableOpacity>

                    <Text style={styles.subHeaderRammetto}>{this.state.name}</Text>
                    <Text style={styles.subsubHeaderRammetto}>Points: {this.props.user.points}</Text>
                </View>

                <View style={styles.profileContent}>
                    {this.state.editName === false ?
                        <View>
                            <TouchableOpacity
                                onPress={() => this.setState({editName: true})}>
                                <View style={styles.editableItems}>
                                    <Text style={styles.profileText}>Name: {this.state.name} {'\t'} <Ionicons
                                        name={'md-create'} size={30} color={'#417110'}/></Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.hiddenInput}>
                            <TextInput
                                placeholder="Name"
                                style={styles.inputField}
                                onChangeText={this.handleNameChange}
                                value={this.state.name}
                            />
                            <TouchableOpacity
                                onPress={() => this.editInfo()}
                                style={styles.changeButton}
                            >
                                <Text style={styles.changeButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    }

                    {this.state.editEmail === false ?
                        <TouchableOpacity onPress={() => this.setState({editEmail: true})}>
                            <View style={styles.editableItems}>
                                <Text style={styles.profileText}>Email: {this.state.email}{'\t'} <Ionicons
                                    name={'md-create'} size={30} color={'#417110'}/></Text>
                            </View>
                        </TouchableOpacity>
                        :
                        <View style={styles.hiddenInput}>
                            <TextInput
                                placeholder="Email"
                                style={styles.inputField}
                                onChangeText={this.handleEmailChange}
                                value={this.state.email}
                            />
                            <TouchableOpacity
                                onPress={() => this.editInfo()}
                                style={styles.changeButton}
                            >
                                <Text style={styles.changeButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    }

                    {this.state.editPassword === false ?
                        <TouchableOpacity onPress={() => this.setState({editPassword: true})}>
                            <View style={styles.editableItems}>
                                <Text style={styles.profileText}>Password: ******** {'\t'} <Ionicons
                                    name={'md-create'}
                                    size={30}
                                    color={'#417110'}/></Text>
                            </View>

                        </TouchableOpacity>
                        :
                        <View style={styles.passwordChange}>
                            <TextInput
                                placeholder="Old password"
                                style={styles.inputField}
                                onChangeText={this.handleOldPasswordChange}
                                value={this.state.oldPassword}
                                secureTextEntry={true}
                            />
                            <TextInput
                                placeholder="New password"
                                style={styles.inputField}
                                onChangeText={this.handleNewPasswordChange}
                                value={this.state.newPassword}
                                secureTextEntry={true}
                            />
                            <TextInput
                                placeholder="Confirm password"
                                style={styles.inputField}
                                onChangeText={this.handleCnfPasswordChange}
                                value={this.state.cnfPassword}
                                secureTextEntry={true}
                            />
                            <TouchableOpacity
                                onPress={() => this.editPwd()}
                                style={styles.changeButton}
                            >
                                <Text style={styles.changeButtonText}>Save</Text>
                            </TouchableOpacity>

                        </View>
                    }
                </View>
                <View style={styles.buttonDiv}>
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => this.props.logout()}
                    >
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }


}
