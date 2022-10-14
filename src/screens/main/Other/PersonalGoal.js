import { StyleSheet, Text, View, ScrollView, Image, TextInput} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Entypo from '@expo/vector-icons/Entypo';


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


const Home = ({navigation}) => {
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
            }}>Personal Goal</Text>
            <Text style={{
                color: theme.primaryColor,
                fontSize: wp('4%'),
                fontFamily: fonts.regular
            }}>Remember why you are here. Big or small, any goal is admirable</Text>
        </View>
        <View>
          <View style={{marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, marginHorizontal: 20}}>
            <Text style={{color: theme.primaryColor, fontFamily: fonts.bold, fontSize: wp('5%')}} >I Promise my future self...</Text>
            <Text style={{color: theme.primaryColor, fontFamily: fonts.bold, fontSize: wp('4%'), borderBottomColor: theme.primaryColor, borderBottomWidth: 1}}>Edit</Text>
          </View>
          <TextInput placeholder="e.g. to be more active and sleep 8 hours a night" placeholderTextColor="lightgrey" style={{color: theme.primaryColor, fontFamily: fonts.regular, borderWidth: 1, borderColor: theme.primaryColor, borderRadius: 15, marginHorizontal: 15, padding: 12,  fontSize: wp('4%')}} multiline={true} numberOfLines={15} textAlignVertical="top" />
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={{width: '40%'}}><Button text="Cancel" style={{borderColor: theme.primaryColor, borderWidth: 1}} textColor={theme.primaryColor} /></View>
          <View style={{width: '40%', marginLeft: 25}}><GradientButton text="Save" /></View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

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