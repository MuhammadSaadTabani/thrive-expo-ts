import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {LinearGradient} from 'expo-linear-gradient';


import theme from '../../../assets/colors';
import fonts from '../../../assets/fonts';
import images from '../../../assets/images';

import Logo from '../../../components/common/Logo';
import TagsContainer from '../../../components/common/TagsContainer';
import CreateActivityCard from '../../../components/common/CreateActivityCard';
import Header from '../../../components/common/Header';

const AddActivity = ({navigation}) => {
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
                marginBottom: 14
            }}>Add Activity</Text>
            <Text style={{
                color: theme.primaryColor,
                fontSize: wp('4%'),
                fontFamily: fonts.regular
            }}>Habits to help you grow healthier routines and better self-care.</Text>
        </View>
        <View style={styles.mainContainer}>
            <View style={styles.tagsContainer}>
                <TagsContainer tags={['All', 'Daily Activity', 'Emotional Health' ]} />
            </View>
         
            <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 25}}>
                <Text style={styles.textHeading}>Create your own</Text>
                <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
            </View>
            <View style={{marginVertical: 8}}>
                <CreateActivityCard onPress={() => navigation.navigate('CreateActivity')} icon={images.createActivity} heading="Create your own" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus, argue nec." />
            </View>

            <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 25}}>
                <Text style={styles.textHeading}>Daily Activity</Text>
                <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
            </View>
            <View style={{marginVertical: 8}}>
                <CreateActivityCard onPress={() => navigation.navigate('NonCommitedActivity')} icon={images.acomplishment} heading="Build a sense of accomplishment" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus, argue nec." />
            </View>
            <View style={{marginVertical: 8}}>
                <CreateActivityCard onPress={() => navigation.navigate('NonCommitedActivity')} icon={images.findSomething} heading="Find something that you enjoy" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus, argue nec." />
            </View>
            <View style={{marginVertical: 8}}>
                <CreateActivityCard onPress={() => navigation.navigate('NonCommitedActivity')} icon={images.logOff} heading="Log off after work" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus, argue nec." />
            </View>
            <View style={{marginVertical: 8}}>
                <CreateActivityCard onPress={() => navigation.navigate('NonCommitedActivity')} icon={images.createActivity} heading="Positive self notes" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus, argue nec." />
            </View>
            <View style={{marginVertical: 8}}>
                <CreateActivityCard onPress={() => navigation.navigate('NonCommitedActivity')} icon={images.selfReflection} heading="Self reflection time" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus, argue nec." />
            </View>
            <View style={{marginVertical: 8}}>
                <CreateActivityCard onPress={() => navigation.navigate('NonCommitedActivity')} icon={images.habitChange} heading="Start a habit change plan" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus, argue nec." />
            </View>
            <View style={{marginVertical: 8}}>
                <CreateActivityCard onPress={() => navigation.navigate('NonCommitedActivity')} icon={images.habitChange} heading="Start a thought record" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus, argue nec." />
            </View>

        </View>
      </ScrollView>
    </View>
  )
}

export default AddActivity

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
    dot: {
        width: wp('2.5%'), 
        height: hp('1.5%'), 
        borderRadius: 50,
        margin: 5,
    },
    tagsContainer: {
        width: '88%',
        alignSelf: "center",
        marginBottom: 15
    }
    

    
})