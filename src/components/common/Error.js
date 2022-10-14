import React from 'react'
import { 
    View,
    Text,
} from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from '@expo/vector-icons/MaterialIcons';

import theme from '../../assets/colors'
export default ({text}) => (
    <View 
        style={{
            padding: hp('1.5%'),
            backgroundColor: '#FBE9ED',
            borderRadius: hp('2%'),
            alignSelf: 'flex-start',
            width: '100%'
        }}
    >
        <Icon name='error' size={20} color={'#C03A37'} />
        <Text style={{color: '#C03A37', fontSize: hp('2%')}}>{text}</Text>
    </View>
)