import React from 'react';
import {View} from 'react-native';
import {Subscribe} from 'unstated';
import PictureContainer from "../Container/PictureContainer";
import Gallery from '../Components/Gallery';

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

}
export default GalleryScreen;