import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Logo from '../../components/common/Logo';
import theme from '../../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = ({onPress}) => {
  return (
    <View style={styles.header}>
        <Entypo name="menu" size={30} color={theme.primaryColor} style={styles.menuIcon} onPress={onPress} />
        <Logo />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    menuIcon: {
        position: 'absolute',
        left: wp('2.5%')
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
})