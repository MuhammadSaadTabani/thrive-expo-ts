import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {LinearGradient} from 'expo-linear-gradient';
import theme from '../../../assets/colors';
import fonts from '../../../assets/fonts';
import images from '../../../assets/images';

import Quote from '../../../components/common/Quote';
import ActivityCard from '../../../components/common/ActivityCard';
import GradientButton from '../../../components/common/GradientButton';
import FocusCard from '../../../components/common/FocusCard';
import ArticleCard from '../../../components/common/ArticleCard';
import ArticleTextCard from '../../../components/common/ArticleTextCard';
import HealthSnapshot from '../../../components/common/HealthSnapshot';
import Header from '../../../components/common/Header';


const Home = ({navigation}) => {
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
            }}>Welcome back John!</Text>
            <Text style={{
                color: theme.primaryColor,
                fontSize: wp('4%'),
                fontFamily: fonts.regular
            }}>We've got activities, content, and more ready for you to explore.</Text>
        </View>
        <View style={styles.mainContainer}>
            <View style={{marginVertical: 18}}>
                <Quote />
            </View>
            
            <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 20}}>
                <Text style={styles.textHeading}>Today's activities</Text>
                <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
            </View>
            <View style={{marginVertical: 10}}>
                <ActivityCard onPress={() => navigation.navigate('CommitedActivity') } />
            </View>
            <View style={{marginVertical: 10}}>
                <ActivityCard onPress={() => navigation.navigate('CommitedActivity') }/>
            </View>
            
            
            <View style={styles.buttonContainer}>
                <GradientButton text="Add Activity" onPress={() => navigation.navigate('AddActivity') }/>
            </View>

            <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 30}}>
                <Text style={styles.textHeading}>Your focus area</Text>
                <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
            </View>
            <View style={{marginVertical: 10}}>
                <FocusCard />
            </View>
            <View style={{marginVertical: 10}}>
                <ArticleCard source={images.articleImg1} onPress={() => navigation.navigate('Podcast')} />
            </View>
            <View style={{marginVertical: 15}}>
                <ArticleCard source={images.articleImg2} onPress={() => navigation.navigate('Article')}/>
            </View>
            <View style={styles.textArticleContainer} >
                <ArticleTextCard category="Super Sleepy" number="article # 1" title="Introduction to anyone" topColor={theme.backgrounds.screenBG} />
                <ArticleTextCard category="Super Sleepy" number="article # 1" title="Introduction to anyone" topColor={theme.backgrounds.lightViolet} />
            </View>
            <View style={styles.textArticleContainer}>
                <ArticleTextCard category="Super Sleepy" number="article # 1" title="Introduction to anyone" topColor={theme.backgrounds.screenBG} />
                <ArticleTextCard category="Super Sleepy" number="article # 1" title="Introduction to anyone" topColor={theme.backgrounds.liteBlueBG} />
            </View>



            <View style={{flexDirection: 'row', alignItems: "flex-end", justifyContent: "space-between", marginVertical: 30}}>
                <View>
                    <Text style={styles.textHeading}>Health Snapshot</Text>
                    <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot2}></LinearGradient>
                </View>
                <Text style={{marginRight: 20, color: theme.primaryColor, borderBottomColor: theme.primaryColor, borderBottomWidth: 1, fontFamily: fonts.regular }}>See all</Text>
            </View>
            <View style={{width: '90%', alignSelf: 'center', marginVertical: 10}}>
                <HealthSnapshot heading="Social Connections" date="Last taken 3rd May 2020" />
            </View>
            <View style={{width: '90%', alignSelf: 'center', marginVertical: 10}}>
                <HealthSnapshot heading="Social Connections" date="Last taken 3rd May 2020" />
            </View>
            <View style={{width: '90%', alignSelf: 'center', marginVertical: 10}}>
                <HealthSnapshot heading="Social Connections" date="Last taken 3rd May 2020" />
            </View>
            <View style={{width: '90%', alignSelf: 'center', marginVertical: 10}}>
                <HealthSnapshot heading="Social Connections" date="Last taken 3rd May 2020" />
            </View>
            <View style={{width: '90%', alignSelf: 'center', marginVertical: 10}}>
                <HealthSnapshot heading="Social Connections" date="Last taken 3rd May 2020" />
            </View>
            <View style={{width: '90%', alignSelf: 'center', marginVertical: 10}}>
                <HealthSnapshot heading="Social Connections" date="Last taken 3rd May 2020" />
            </View>

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