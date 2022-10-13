import React from 'react'
import { 
    View,
    Text,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '../../assets/colors';


export default (props) => (
    <View style={{
        flex:1,
        padding: hp('2.5%'),
        backgroundColor: theme.backgrounds.whiteBG
    }}>
        {props.children}
    </View>
)