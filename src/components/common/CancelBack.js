import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { 
    Text,
    TouchableOpacity,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import theme from '../../assets/colors';

export default () => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.goBack()
    }

    return(
        <TouchableOpacity onPress={onPress} style={{flexDirection: 'row', alignSelf: 'flex-start', marginBottom: hp('2%'), justifyContent: 'center', alignItems: 'center'}}>
            <Icon name={"less-than"} size={15} color={theme.iconsColor.grayIcon} />
            <Text style={{marginLeft: hp('0.5%'), fontSize: hp('2.25%'), color: theme.textColors.darkGrayText}}>Cancel</Text>
        </TouchableOpacity>
    )
}