import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput} from 'react-native'
import React, {useState} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {LinearGradient} from 'expo-linear-gradient';


import Entypo from '@expo/vector-icons/Entypo';

import Slider from '@react-native-community/slider';

import theme from '../../../assets/colors';
import fonts from '../../../assets/fonts';
import images from '../../../assets/images';

import GradientButton from '../../../components/common/GradientButton';
import TagsContainer from '../../../components/common/TagsContainer';



const CreateActivity = ({navigation}) => {
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
            
        </View>
        <View style={styles.mainContainer}>
            
            <View style={{flexDirection: 'row', alignItems: "flex-end", marginBottom: 15, marginTop: 10}}>
                <Text style={styles.textHeading}>Select upto 3 domains</Text>
                <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
            </View>
            <View style={styles.tagsContainer}>
                <TagsContainer tags={['Daily Activity', 'Emotional Health', 'Nutrition', 'Physical Activity', 'Sleep', 'Social Connection', 'Substance Use' ]} />
            </View>

            <Text style={styles.inputHeading}>Description [Optional] </Text>
            <TextInput placeholder='Enter a description for this activity' multiline numberOfLines={10} textAlignVertical="top" style={styles.input} />

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
                <GradientButton text="Save"  />
            </View>
            
        </View>
      </ScrollView>
    </View>
  )
}

export default CreateActivity

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
        marginBottom: 15,
        marginTop: 15

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
    },
    tagsContainer: {
        width: '88%',
        alignSelf: "center",
        marginVertical: 20
    },
    inputHeading: {
        color: theme.primaryColor,
        fontSize: wp('5%'),
        paddingLeft: wp('6%'),
        fontFamily: fonts.bold,
        marginTop:20 
    },
    input: {
        borderColor: theme.primaryColor,
        borderWidth: 1,
        margin: 20,
        borderRadius: 15,
        padding: 15,
        color: 'black'
    }

    
})