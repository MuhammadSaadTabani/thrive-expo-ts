import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons'
import Entypo from 'react-native-vector-icons/Entypo';

import theme from '../../../assets/colors';
import fonts from '../../../assets/fonts';
import images from '../../../assets/images';

import Button from '../../../components/common/Button';
import CalendarComp from '../../../components/common/Calendar';



const CommitedActivity = ({navigation}) => {
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
            <View style={{width: '90%', alignSelf: 'center'}}>
                <CalendarComp />
            </View>
            
            <View style={{flexDirection: 'row', alignItems: "flex-end", marginBottom: 15, marginTop: 30}}>
                <Text style={styles.textHeading}>Reflect</Text>
                <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
            </View>
            <Text style={styles.text}>Is blue light emitted by digital devices disrupting your sleep-wake cycle ?</Text>

            <View style={{flexDirection: 'row', alignItems: "flex-end", marginBottom: 15, marginTop: 30}}>
                <Text style={styles.textHeading}>Act</Text>
                <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
            </View>
            <Text style={styles.text}>We recommend trying this activity for 4-6 days.</Text>
            <Text style={styles.text}><Octicons name="dot-fill" size={25} color={theme.primaryColor} />   Set an alarm for half an hour before bed.</Text>
            <Text style={styles.text}><Octicons name="dot-fill" size={25} color={theme.primaryColor} />   At the alarm switch off all digital devices (e-readers are okay).</Text>
            <Text style={styles.text}><Octicons name="dot-fill" size={25} color={theme.primaryColor} />   Refrain from using them until morning.</Text>

            <View style={{flexDirection: 'row', alignItems: "flex-end", marginBottom: 15, marginTop: 30}}>
                <Text style={styles.textHeading}>Learn</Text>
                <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
            </View>
            <Text style={styles.text}>Learn more about <Text style={{fontWeight: 'bold'}}>Switching Off - Screen Use Before Bed</Text> or about <Text style={{fontWeight: 'bold'}}>Stress Chemicals - What is Cortisol ?</Text></Text>
            
            <View style={{backgroundColor: theme.backgrounds.liteBlueBG, width: '85%', alignSelf: 'center', borderRadius: 15, padding: 20, marginVertical: 25}}>
                <Text style={{fontFamily: fonts.bold, color: theme.primaryColor, fontSize: wp('4%') }}>Did you know..</Text>
                <Text style={{fontFamily: fonts.regular, color: theme.primaryColor, fontSize: wp('3.5%'), marginTop: 15 }}>The human brain can identify images seen for as little as 13 milliseconds.</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button text="Archive activity" style={{borderColor: theme.primaryColor, borderWidth: 1}} color="white" textColor={theme.primaryColor} />
            </View>
            
        </View>
      </ScrollView>
    </View>
  )
}

export default CommitedActivity;

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
        marginTop: 60
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
        width: '45%',
        alignSelf: 'center',
        marginBottom: 15

    },
    secondButtonContainer: {
        width: '40%',
        alignSelf: 'flex-end',
        marginRight: 25
    },
    dot: {
        width: wp('2.5%'), 
        height: hp('1.5%'), 
        borderRadius: 50,
        margin: 5,
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