import React from 'react'
import { 
    Text,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../assets/colors';

export default ({text}) => (
    <Text
        style={{
            fontSize: hp('2.5%'),
            marginVertical: hp('2.25%'),
            color: theme.textColors.blackText
        }}
    >
        {text}
    </Text>
)