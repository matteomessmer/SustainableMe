import React from 'react';
import {Subscribe} from 'unstated';
import PictureContainer from "../Container/PictureContainer";
import Gallery from '../Components/Gallery';

//Screen for the gallery with the Gallery component accessing the list of picture saved by
//the user
const GalleryScreen = props => {

    return (
        <Subscribe to={[PictureContainer]}>
            {picturecontainer => (
                    <Gallery
                        pictureList={picturecontainer.state.picList}
                    />
                )
            }
        </Subscribe>

    )

};
GalleryScreen.navigationOptions = {
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#417110'
    }
};
export default GalleryScreen;
