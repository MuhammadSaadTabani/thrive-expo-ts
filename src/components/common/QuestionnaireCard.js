import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import images from '../../assets/images'
import theme from '../../assets/colors'
import fonts from '../../assets/fonts';

import Button from './Button';

const QuestionnaireCard = ({heading, date, icon, details}) => {
  return (
    <View style={styles.container}>
        <View style={styles.cardTop}>
            <View>
                <Text style={{
                    color: theme.primaryColor,
                    fontSize: wp('4.8%'),
                    fontFamily: fonts.bold,
                    marginVertical: 18
                }}>{heading}</Text>
                <Text style={{
                    color: theme.primaryColor,
                    fontSize: wp('3.5%'),
                    fontFamily: fonts.regular,
                }}>{date}</Text>
            </View>
            <Image source={icon} style={{height: hp('10%'), width: wp('14%') }} resizeMode="contain" />
        </View>
        <View >
            <Text style={styles.text}>{details}</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button text="Take questionnaire" color="white" textColor={theme.primaryColor} style={{borderWidth: 1, borderColor: theme.primaryColor}}/>
        </View>
    </View>
  )
}

export default QuestionnaireCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: "#fffbfa",
        padding: 20,
        borderRadius: 30
    },
    cardTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: theme.primaryColor,
        fontSize: wp('4%'),
        fontFamily: fonts.regular,
        marginVertical: 18
    },
    buttonContainer: {
        width: '60%',
        marginVertical: -15
    }
})