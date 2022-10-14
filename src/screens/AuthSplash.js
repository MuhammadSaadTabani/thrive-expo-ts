import React from 'react'
import { 
   View,
   Image, 
} from 'react-native';
import images from '../assets/images';


const AuthSplash = () => (
    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        <Image
            source={images.logo}
            style={{height: 300, width: 500}}
        />
    </View>
)

export default AuthSplash