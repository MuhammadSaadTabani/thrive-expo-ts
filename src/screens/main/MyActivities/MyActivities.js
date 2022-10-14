import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {LinearGradient} from 'expo-linear-gradient';




import theme from '../../../assets/colors';
import fonts from '../../../assets/fonts';
import images from '../../../assets/images';

import Logo from '../../../components/common/Logo';
import ActivityCard from '../../../components/common/ActivityCard';
import GradientButton from '../../../components/common/GradientButton';
import Header from '../../../components/common/Header';

const MyActivities = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header onPress={() => navigation.toggleDrawer()} />
        <Image source={images.background} style={{position: 'absolute', top: 0, zIndex: -1}} />
        <View style={styles.topTextContainer}>
            <Text style={{
                color: theme.primaryColor,
                fontSize: wp('8%'),
                fontFamily: fonts.bold,
                // fontWeight: 'bold',
                marginBottom: 14
            }}>My Activities</Text>
            <Text style={{
                color: theme.primaryColor,
                fontSize: wp('4%'),
                fontFamily: fonts.regular
            }}>Time to untangle old habits and grow some new ones</Text>
        </View>
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={{
                    color: theme.primaryColor,
                    fontSize: wp('6%'),
                    fontFamily: fonts.bold,
                    marginBottom: 14
                }}>No Activities</Text>
                <Text style={{
                    color: theme.primaryColor,
                    fontSize: wp('3.5%'),
                    width: '90%',
                    fontFamily: fonts.regular,
                    textAlign:"center"
                }}>Build positive habits to build your wellbeing in a way that works for you</Text>
            </View>
            <View style={styles.buttonContainer}>
                <GradientButton text="Add Activity" onPress={() => navigation.navigate('AddActivity')} />
            </View>
            <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 20}}>
                <Text style={styles.textHeading}>Today</Text>
                <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
            </View>
            <View style={{marginVertical: 10}}>
                <ActivityCard onPress={() => navigation.navigate('CommitedActivity')}/>
            </View>
            <View style={{marginVertical: 10}}>
                <ActivityCard onPress={() => navigation.navigate('CommitedActivity')}/>
            </View>

            <View style={styles.secondButtonContainer}>
                <GradientButton text="Add Activity" onPress={() => navigation.navigate('AddActivity')} />
            </View>
            
        </View>
      </ScrollView>
    </View>
  )
}

export default MyActivities

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
        fontFamily: fonts.bold
    },
    buttonContainer: {
        width: '45%',
        alignSelf: 'center',
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

    
})