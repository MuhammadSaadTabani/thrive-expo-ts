import { StyleSheet, Text, View, ScrollView, Image, TextInput} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

import theme from '../../../assets/colors';
import fonts from '../../../assets/fonts';
import images from '../../../assets/images';

import Logo from '../../../components/common/Logo';
import Button from '../../../components/common/Button';
import Quote from '../../../components/common/Quote';
import ActivityCard from '../../../components/common/ActivityCard';
import GradientButton from '../../../components/common/GradientButton';
import FocusCard from '../../../components/common/FocusCard';
import ArticleCard from '../../../components/common/ArticleCard';
import ArticleTextCard from '../../../components/common/ArticleTextCard';
import HealthSnapshot from '../../../components/common/HealthSnapshot';


const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
            <Entypo name="menu" size={30} color={theme.primaryColor} style={styles.menuIcon} onPress={() => navigation.toggleDrawer()} />
            <Logo />
        </View>
        <Image source={images.background} style={{position: 'absolute', top: 0, zIndex: -1}} />
        <View style={styles.topTextContainer}>
            <Text style={{
                color: theme.primaryColor,
                fontSize: wp('8%'),
                fontFamily: fonts.bold,
                marginBottom: 14
            }}>About</Text>
            <Text style={{
                color: theme.primaryColor,
                fontSize: wp('4%'),
                fontFamily: fonts.regular
            }}>A little bit about us and ours</Text>
        </View>
        <View>
          <View style={{marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, marginHorizontal: 20}}>
            <Text style={{color: theme.primaryColor, fontFamily: fonts.regular, fontSize: wp('4%')}} >About Innowell</Text>
            <Feather name="external-link" size={20} color={theme.primaryColor} />
          </View>
          <View style={{marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, marginHorizontal: 20}}>
            <Text style={{color: theme.primaryColor, fontFamily: fonts.regular, fontSize: wp('4%')}} >Privacy Policy</Text>
            <Feather name="external-link" size={20} color={theme.primaryColor} />
          </View>
          <View style={{marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, marginHorizontal: 20}}>
            <Text style={{color: theme.primaryColor, fontFamily: fonts.regular, fontSize: wp('4%')}} >Terms and Conditions</Text>
            <Feather name="external-link" size={20} color={theme.primaryColor} />
          </View>
          <View style={{marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, marginHorizontal: 20}}>
            <Text style={{color: theme.primaryColor, fontFamily: fonts.regular, fontSize: wp('4%')}} >FAQ</Text>
            <Feather name="external-link" size={20} color={theme.primaryColor} />
          </View>
        </View>
        <Text style={{fontFamily: fonts.regular, color: theme.primaryColor, fontSize: wp('4%'), width: '100%', textAlign: 'center'}}>App version 1.0.0</Text>

      </ScrollView>
    <Text style={{fontFamily: fonts.regular, color: theme.primaryColor, fontSize: wp('4%'), width: '100%', textAlign: 'center', position: 'absolute', bottom: 0, marginBottom: 30}}>Copyright {'\u00A9'} 2022</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: theme.backgrounds.whiteBG
    },
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
    topTextContainer: {
        padding: 25,
        paddingTop: 60
    },
    mainContainer: {
        backgroundColor: theme.backgrounds.whiteBG,
    },
    textHeading: {
        color: theme.primaryColor,
        fontSize: wp('6%'),
        paddingLeft: wp('6%'),
        fontFamily: fonts.bold
    },
    buttonContainer: {
        width: '45%',
        alignSelf: 'center',
        marginTop: 10
    },
    dot: {
        width: wp('2.5%'), 
        height: hp('1.5%'), 
        borderRadius: 50,
        margin: 5,
    },
    dot2: {
        width: wp('2.5%'), 
        height: hp('1.5%'), 
        borderRadius: 50,
        margin: 5,
        position: 'absolute',
        right: -20,
        bottom: 0
    },
    textArticleContainer: {
        flexDirection: 'row', 
        width: '90%', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        alignSelf:'center',
        marginVertical: 15
    },

    
})