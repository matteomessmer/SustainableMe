import React from 'react';
import { Text, View, ScrollView, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { styles} from '../styles.js';

export default class Profile extends React.Component{

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
       const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
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
       this.setState({ image: result.uri });
     }
   }

   editImage = async () => {
     const permission = await this.getPermissionAsync();
     if (permission) {
       this._pickImage();
     }
   }

   editInfo = async () => {
     const user = {id: this.props.user.id, name: this.state.name, email: this.state.email, image: this.state.image}
     console.log(user)
     await this.props.editUser(user);
     this.setState({editName: false, editEmail: false})
   }

   editPwd = async () => {
     console.log("id: " + this.props.user.id)
     console.log("Old Password: " + this.state.oldPassword)
     console.log("New Password: " + this.state.newPassword)
     console.log("Cnf Password: " + this.state.cnfPassword)
     if (this.state.newPassword === this.state.cnfPassword) {
       await this.props.editUser(this.props.user.id, this.state.newPassword);
       this.setState({editPassword: false, oldPassword: '', newPassword: '', cnfPassword: ''})
     } else {
       alert("The new password and its confirmation do NOT match. Try again!")
   }
   }

  render(){
      return (
        <ScrollView>
          <View style={styles.logoComponent}>

            {this.state.image===null?
            <Image
              source={require('../images/profile.png')}
              style={{width:150, height:150}}
            />
            :
            <Image
              source={{uri: this.state.image}}
              style={{width:150, height:150}}
            />
            }

            <TouchableOpacity onPress={() => this.editImage()}>
              <Image
                source={require('../images/editprofile.png')}
                style={{width:30, height:30}}
              />
            </TouchableOpacity>

            <Text style={styles.subHeaderRammetto}>{this.state.name}</Text>
            <Text style={styles.subsubHeaderRammetto}>Points: {this.props.user.points}</Text>
          </View>
          {this.state.editName===false?
          <TouchableOpacity onPress={() => this.setState({editName: true})}>
            <Text>Name: {this.state.name}</Text>
            <Image
              source={require('../images/editprofile.png')}
              style={{width:30, height:30}}
            />
          </TouchableOpacity>
          :
          <View>
            <TextInput
                placeholder="Name"
                style={styles.inputField}
                onChangeText={this.handleNameChange}
                value={this.state.name}
            />
            <TouchableOpacity onPress={() => this.setState({editName: false})}>
              <Text style={styles.button}>Save</Text>
            </TouchableOpacity>
          </View>
          }

          {this.state.editEmail===false?
          <TouchableOpacity onPress={() => this.setState({editEmail: true})}>
            <Text>Email: {this.state.email}</Text>
            <Image
              source={require('../images/editprofile.png')}
              style={{width:30, height:30}}
            />
          </TouchableOpacity>
          :
          <View>
            <TextInput
                placeholder="Email"
                style={styles.inputField}
                onChangeText={this.handleEmailChange}
                value={this.state.email}
            />
            <TouchableOpacity onPress={() => this.setState({editEmail: false})}>
              <Text style={styles.button}>Save</Text>
            </TouchableOpacity>
          </View>
          }

          {this.state.editPassword===false?
            <TouchableOpacity onPress={() => this.setState({editPassword: true})}>
            <Text>Password: ********</Text>
            <Image
              source={require('../images/editprofile.png')}
              style={{width:30, height:30}}
            />
            </TouchableOpacity>
            :
            <View>
              <TextInput
                  placeholder="Old password"
                  style={styles.inputField}
                  onChangeText={this.handleOldPasswordChange}
                  value={this.state.oldPassword}
              />
              <TextInput
                  placeholder="New password"
                  style={styles.inputField}
                  onChangeText={this.handleNewPasswordChange}
                  value={this.state.newPassword}
              />
              <TextInput
                  placeholder="Confirm password"
                  style={styles.inputField}
                  onChangeText={this.handleCnfPasswordChange}
                  value={this.state.cnfPassword}
              />
              <TouchableOpacity onPress={() => this.setState({editPassword: false})}>
                <Text style={styles.button}>Save</Text>
              </TouchableOpacity>
            </View>
          }
        </ScrollView>
      )
  }


}
