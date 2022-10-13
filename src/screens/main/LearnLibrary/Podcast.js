import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons'
import Slider from '@react-native-community/slider';

import theme from '../../../assets/colors';
import fonts from '../../../assets/fonts';
import images from '../../../assets/images';

import GradientButton from '../../../components/common/GradientButton';

const Podcast = ({navigation}) => {


    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
              <Entypo name="chevron-left" size={25} color={theme.primaryColor} style={styles.menuIcon} />
              <Text style={{
                  color: theme.primaryColor,
                  fontSize: wp('4%'),
                  fontFamily: fonts.regular
              }}>Back</Text>
          </TouchableOpacity>
          <Image source={images.background} style={{position: 'absolute', top: 0, zIndex: -1}} />
          <View style={styles.topTextContainer}>
              <Text style={{
                  color: theme.primaryColor,
                  fontSize: wp('8%'),
                  fontFamily: fonts.bold,
                  marginBottom: 14
              }}>The Secret of making new habits stick</Text>
              <Text style={{
                color: theme.primaryColor,
                fontSize: wp('4%'),
                fontFamily: fonts.regular
              }}>In here: Cognition, Behaviour, Framing, Negativity, Anxiety, Depression, Thoughts, Happiness</Text>
              <Text style={{
                color: theme.primaryColor,
                fontSize: wp('4%'),
                fontFamily: fonts.regular,
                marginVertical: 15
              }}>17 Jan 2022, Josh Mccines, 94 min read</Text>
          </View>
          <Image source={images.player} style={{alignSelf: 'center', marginBottom: 25}} />
          <View style={styles.mainContainer}>          
            <View style={{flexDirection: 'row', alignItems: "flex-end"}}>
                <Text style={styles.textHeading}>Episode Description</Text>
                <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
            </View>
              
            <Text style={styles.text}>How can we create new habits - and stick to them? Is it really a case of will power, motivation, then repetition? Or could there be a simpler approach?This week, I talk to world leading expert in behaviour change, Professor BJ Fogg, who has spent 20 years researching and teaching insights about human behaviour. BJ and I discuss why, if you haven't been successful when trying to change in the past, IT'S NOT YOUR FAULT. Poorly designed behaviourchange programmes, from diets to fitness regimes to alcohol-reduction plans, set people up to fail. Motivation wanes, bars are set too high, you are not made to feel successful. We delve into why it doesn't take a certain amount of hours or days to establish a new habit. In fact, repetition has nothing to do with it. Instead, evidence shows that it is all about emotion and feeling successful. When you do something and feel successful, that behaviour becomes more automatic. In this conversation, we discuss exactly how you can do this by scaling it down and making a small change that's super easy to succeed at.Facilitating healthy, positive change is at the core of everything I do. So it was amazing to hear from BJ that the methods that have come out of his decades of research very closely match those that I've seen to work in practise with my patients and have written about in my new book, 'Feel Better in 5. Listen in to find out how they can help you, too!</Text>
              
              
          </View>
        </ScrollView>
      </View>
    )
  }
  
  export default Podcast;
  
  const styles = StyleSheet.create({
      container: {
          flex:1,
          backgroundColor: theme.backgrounds.whiteBG
      },
      menuIcon: {
          marginLeft: 25
      },
      header: {
          flexDirection: 'row',
          width: "25%",
          marginTop: 60,
          alignItems: "center"
      },
      topTextContainer: {
          padding: 25,
          paddingTop: 60
      },
      textContainer: {
          padding: 25,
          paddingTop: 60,
          justifyContent: 'center', 
          alignItems: 'center'
      },
      mainContainer: {
          backgroundColor: theme.backgrounds.whiteBG,
      },
      textHeading: {
          color: theme.primaryColor,
          fontSize: wp('5.5%'),
          paddingLeft: wp('6%'),
          fontFamily: fonts.bold,
      },
      buttonContainer: {
          width: '35%',
          alignSelf: 'center',
          marginVertical: 20
  
      },
      dot: {
          width: wp('2.5%'), 
          height: hp('1.5%'), 
          borderRadius: 50,
          margin: 5,
      },
      inputHeading: {
        color: theme.primaryColor,
        fontSize: wp('5%'),
        paddingLeft: wp('8%'),
        fontFamily: fonts.bold,
        marginTop:45 
      },
      text: {
          color: theme.primaryColor,
          fontSize: wp('4.5%'),
          fontFamily: fonts.regular,
          marginHorizontal: 25,
          marginVertical: 15,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
      }
  
      
  })