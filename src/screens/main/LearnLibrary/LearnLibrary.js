import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

import theme from '../../../assets/colors';
import fonts from '../../../assets/fonts';
import images from '../../../assets/images';

import Logo from '../../../components/common/Logo';
import ArticleCard from '../../../components/common/ArticleCard';
import ArticleTextCard from '../../../components/common/ArticleTextCard';
import TagsContainer from '../../../components/common/TagsContainer';
import Header from '../../../components/common/Header';


const LearnLibrary = ({navigation}) => {
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
            }}>Learn Library</Text>
            <Text style={{
                color: theme.primaryColor,
                fontSize: wp('4%'),
                fontFamily: fonts.regular
            }}>Explore our expert resources and meterials - no need for a library card</Text>
        </View>
        <View style={styles.mainContainer}>
            <View style={{marginVertical: 18, alignSelf: 'center'}}>
              <TagsContainer tags={['All', 'Daily Activity', 'Emotional Health' ]} />
            </View>

            <View style={{backgroundColor: '#ebf4f7'}}>
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 20}}>
                  <Text style={styles.textHeading}>Featured</Text>
                  <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
              </View>
              <View >
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
            </View>
            <View style={{backgroundColor: 'white', marginVertical: 20}}>
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 20}}>
                  <Text style={styles.textHeading}>Daily Activity</Text>
                  <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
              </View>
              <View >
                  <ArticleCard source={images.articleImg1} onPress={() => navigation.navigate('Podcast')} />
              </View>
              <View style={{marginVertical: 15}}>
                  <ArticleCard source={images.articleImg2} onPress={() => navigation.navigate('Article')} />
              </View>
              <View style={styles.textArticleContainer} >
                  <ArticleTextCard category="Super Sleepy" number="article # 1" title="Introduction to anyone" topColor={theme.backgrounds.screenBG} />
                  <ArticleTextCard category="Super Sleepy" number="article # 1" title="Introduction to anyone" topColor={theme.backgrounds.lightViolet} />
              </View>
              <View style={styles.textArticleContainer}>
                  <ArticleTextCard category="Super Sleepy" number="article # 1" title="Introduction to anyone" topColor={theme.backgrounds.screenBG} />
                  <ArticleTextCard category="Super Sleepy" number="article # 1" title="Introduction to anyone" topColor={theme.backgrounds.liteBlueBG} />
              </View>
            </View>
            <View style={{backgroundColor: '#ebf4f7'}}>
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 20}}>
                  <Text style={styles.textHeading}>Emotional Health</Text>
                  <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
              </View>
              <View >
                  <ArticleCard source={images.articleImg1} onPress={() => navigation.navigate('Podcast')} />
              </View>
              <View style={{marginVertical: 15}}>
                  <ArticleCard source={images.articleImg2} onPress={() => navigation.navigate('Article')} />
              </View>
              <View style={styles.textArticleContainer} >
                  <ArticleTextCard category="Super Sleepy" number="article # 1" title="Introduction to anyone" topColor={theme.backgrounds.screenBG} />
                  <ArticleTextCard category="Super Sleepy" number="article # 1" title="Introduction to anyone" topColor={theme.backgrounds.lightViolet} />
              </View>
              <View style={styles.textArticleContainer}>
                  <ArticleTextCard category="Super Sleepy" number="article # 1" title="Introduction to anyone" topColor={theme.backgrounds.screenBG} />
                  <ArticleTextCard category="Super Sleepy" number="article # 1" title="Introduction to anyone" topColor={theme.backgrounds.liteBlueBG} />
              </View>
            </View>
            <View style={{backgroundColor: 'white', marginVertical: 20}}>
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 20}}>
                  <Text style={styles.textHeading}>Nutrition</Text>
                  <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
              </View>
              <View >
                  <ArticleCard source={images.articleImg1} onPress={() => navigation.navigate('Podcast')}/>
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
            </View>
            <View style={{backgroundColor: '#ebf4f7'}}>
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 20}}>
                  <Text style={styles.textHeading}>Physical Activity</Text>
                  <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
              </View>
              <View >
                  <ArticleCard source={images.articleImg1} onPress={() => navigation.navigate('Podcast')}/>
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
            </View>
            <View style={{backgroundColor: 'white', marginVertical: 20}}>
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 20}}>
                  <Text style={styles.textHeading}>Sleep</Text>
                  <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
              </View>
              <View >
                  <ArticleCard source={images.articleImg1} onPress={() => navigation.navigate('Podcast')}/>
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
            </View>
            <View style={{backgroundColor: '#ebf4f7'}}>
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 20}}>
                  <Text style={styles.textHeading}>Social Connection</Text>
                  <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
              </View>
              <View >
                  <ArticleCard source={images.articleImg1} onPress={() => navigation.navigate('Podcast')}/>
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
            </View>
            <View style={{backgroundColor: 'white', marginVertical: 20}}>
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 20}}>
                  <Text style={styles.textHeading}>Substance Use</Text>
                  <LinearGradient colors={[theme.backgrounds.darkViolet, theme.backgrounds.lightViolet]} style={styles.dot}></LinearGradient>
              </View>
              <View >
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
            </View>



            

        </View>
      </ScrollView>
    </View>
  )
}

export default LearnLibrary

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