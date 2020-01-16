import React from 'react';
import {ScrollView,View, Text} from 'react-native';
import Picture from '../Components/Picture';
import {styles} from '../styles.js';

//Gallery component creates a list of pictures.
export default class Gallery extends React.Component {

    constructor(props) {
        super(props);
    }

    //For every picture of the list stored in the container, a Picture component is created
    render() {
		if(this.props.pictureList.length === 0) {
			return (<View><Text style={styles.inputFieldText}>The gallery is empty</Text></View>) 
		} else {
			const pictures = this.props.pictureList.map((picture, index) => {
				return (
					<Picture
						key={index}
						pic={picture}
					/>

				)
			});

			return (
				<ScrollView>
					{pictures}
				</ScrollView>
			)
		}
	}
};
