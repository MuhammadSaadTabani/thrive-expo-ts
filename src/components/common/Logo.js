import React from 'react'
import { 
    Image,
} from 'react-native';
import images from '../../assets/images';

export default () => (
    <Image
        source={images.logo}
        style={{
            height: 35,
            width: 170
        }}
    />
)