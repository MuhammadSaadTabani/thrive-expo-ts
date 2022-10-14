import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import theme from '../../assets/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fonts from '../../assets/fonts';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const ArticleTextCard = ({category, number, title, topColor, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.top, {backgroundColor: topColor}]}></View>
      <View>
        <Text style={{color: theme.primaryColor, fontSize: wp('4.4%'), fontFamily: fonts.regular }}>{category} </Text>
        <Text style={{color: theme.primaryColor, fontSize: wp('4.4%'), fontFamily: fonts.regular }}>{number} </Text>
        <Text style={{color: theme.primaryColor, fontSize: wp('4.4%'), fontFamily: fonts.regular }}>{title} </Text>
      </View>
      <TouchableOpacity style={styles.bottom} onPress={onPress}>
        <MaterialCommunityIcons name="android-messages" size={18} color={theme.primaryColor} />
        <Text style={{color: theme.primaryColor, marginHorizontal: 8}}>Read</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ArticleTextCard

const styles = StyleSheet.create({
    container: {
        width: '47%',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        paddingLeft: 10,
        paddingVertical: wp('15%'),
        borderRadius: 15,
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    top: {
        width: '120%',
        height: '25%',
        position: 'absolute',
        top: 0
    },
    bottom: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        margin: 8
    }
})