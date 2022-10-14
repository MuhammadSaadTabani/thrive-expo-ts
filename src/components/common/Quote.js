import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../assets/colors';
import fonts from '../../assets/fonts';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Quote = () => {
  return (
    <View style={styles.container}>
        <View style={styles.commasContainer}>
            <MaterialCommunityIcons name="comma" size={25} color={theme.primaryColor} style={styles.firstCommas} />
            <MaterialCommunityIcons name="comma" size={25} color={theme.primaryColor} style={styles.firstCommas} />
        </View>
        <Text style={styles.quote}>I want to be the bestest I can be and get good sleep and eat good and be more physical. I'm also going to be more myself.</Text>
        <View style={styles.secondCommasContainer}>
            <MaterialCommunityIcons name="comma" size={25} color={theme.primaryColor} style={styles.secondCommas} />
            <MaterialCommunityIcons name="comma" size={25} color={theme.primaryColor} style={styles.secondCommas} />
        </View>
        <Text style={styles.hide}>Hide</Text>
    </View>
  )
}

export default Quote

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 15,
        paddingBottom: 40,
        paddingHorizontal: 10,
    },
    commasContainer: {
        flexDirection: 'row',
        alignItems:'center',
        alignSelf: 'flex-start'
    },
    firstCommas: {
        transform: [{rotateZ: '180deg'}],
        marginRight: -10
    },
    secondCommasContainer: {
        flexDirection: 'row',
        alignItems:'center',
        alignSelf: 'flex-end'
    },
    secondCommas: {
        marginRight: -10
    },
    quote: {
        color: theme.primaryColor,
        fontSize: wp('4.2%'),
        width: '72%',
        fontFamily: fonts.regular
    },
    hide: {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        color: theme.primaryColor,
        borderBottomColor: theme.primaryColor,
        borderBottomWidth: 1
    }
    
})