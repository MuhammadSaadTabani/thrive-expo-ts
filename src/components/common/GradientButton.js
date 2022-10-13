import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../assets/colors';

const GradientButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.buttonContainer}>
            <Text style={{color: theme.primaryColor, fontWeight: 'light', fontSize: wp('4%') }}>{text} </Text>
        </LinearGradient>
    </TouchableOpacity>
  )
}

export default GradientButton

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection:"row",
        width:'100%',
        height:hp('6%'),
        marginTop:hp('2.5%'),
        borderRadius:hp('3%'),
        justifyContent:'center',
        alignItems:'center',
    }
})