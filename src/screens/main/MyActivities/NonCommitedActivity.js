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

const NonCommitedActivity = ({navigation}) => {
    const [day, setDay] = useState(1)


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
              }}>Stay present in conversations</Text>
          </View>
          <View style={styles.mainContainer}>
              
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginBottom: 15}}>
                  <Text style={styles.textHeading}>Description</Text>
                  <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
              </View>
              <Text style={styles.text}>A sense of acomplishment can be reached when you set, work on, and achieve goals. Achieving goals can give you a great sense of wellbeing and pride</Text>
              <Text style={[styles.text, {marginVertical: 15}]}>Goals can be external (e.g. changing a probelamatic habit or achieving a task), or internal (e.g. improving patience, or connecting more with others).</Text>
              <Text style={[styles.text, {marginVertical: 15}]}>Try using the 'SMART' model to set goals to increase your likelihood of achieving them.</Text>
  
              
              <Text style={[styles.text, {marginVertical: 20}]}>Make Your Goals</Text>
              <View style={{marginLeft: 20}}>
                <Text style={styles.text}><Octicons name="dot-fill" size={25} color={theme.primaryColor} />   Specific</Text>
                <Text style={styles.text}><Octicons name="dot-fill" size={25} color={theme.primaryColor} />   Measurable</Text>
                <Text style={styles.text}><Octicons name="dot-fill" size={25} color={theme.primaryColor} />   Achievable</Text>
                <Text style={styles.text}><Octicons name="dot-fill" size={25} color={theme.primaryColor} />   Realistic</Text>
                <Text style={styles.text}><Octicons name="dot-fill" size={25} color={theme.primaryColor} />   Time-bound</Text>
              </View>

              <Text style={styles.inputHeading}>{day} {day <= 1 ? 'day' : 'days' } a week</Text>
              <Slider
                style={{width: '90%', height: 40, alignSelf: 'center'}}
                minimumValue={0}
                maximumValue={7}
                step={1}
                value={day}
                onValueChange={(value) => setDay(value)}
                minimumTrackTintColor="#5442AF"
                maximumTrackTintColor="#000000"
                thumbTintColor={theme.primaryColor}
              />
  
              <View style={styles.buttonContainer}>
                  <GradientButton text="Save"/>
              </View>
              
          </View>
        </ScrollView>
      </View>
    )
  }
  
  export default NonCommitedActivity;
  
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
          fontSize: wp('6%'),
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
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center'
      }
  
      
  })