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

const Article = ({navigation}) => {


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
              }}>Cognitive Reappraisal: What is Thought Reframing</Text>
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
          <View style={styles.mainContainer}>          
              <View style={{backgroundColor: theme.backgrounds.liteBlueBG, width: '90%', alignSelf: 'center', borderRadius: 15, padding: 16, marginVertical: 0}}>
                <Text style={{fontFamily: fonts.bold, color: theme.primaryColor, fontSize: wp('4%') }}>Summary</Text>
                <Text style={{fontFamily: fonts.regular, color: theme.primaryColor, fontSize: wp('3.9%'), marginTop: 8 }}>• Our thoughts precede and influence how we feel about things.</Text>
                <Text style={{fontFamily: fonts.regular, color: theme.primaryColor, fontSize: wp('3.9%'), marginTop: 8 }}>• Cognitive Reframing is a technique that can help us with unwanted feelings by adjusting our instinctive thought patterns that inform those feelings.</Text>
                <Text style={{fontFamily: fonts.regular, color: theme.primaryColor, fontSize: wp('3.9%'), marginTop: 8 }}>
                     • The technique involves: 
                     {'\n'}     • identifying the negative thoughts 
                     {'\n'}     • evaluating the reality of the situation 
                     {'\n'}     • and encouraging more positive 
                     {'\n'}         interpretations.
                </Text>
              </View>
              
              <Text style={styles.text}>Feelings are sometimes considered abstract, unknowable concepts. This can lead to us accepting our feelings as unchangeable. Sometimes loneliness creeps in and we let it sit there. Sometimes frustration washes over us and we relish the anger</Text>
              <Text style={styles.text}>There is a technique used in cognitive behavioural therapy, however, that encourages our ability to affect our feelings by adjusting the thoughts that precede them. This can help us process and even limit or reshape unwanted or overwhelming feelings.</Text>
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 10}}>
                  <Text style={styles.textHeading}>What is cognitive reframing? </Text>
              </View>
              <Text style={styles.text}>Cognitive reframing-also known as 'cognitive reappraisal' - is a therapy strategy that helps with emotional regulation. It takes advantage of the fact that our thoughts occur before our feelings, and that there is a causal link between the negativity of one and the other.</Text>
              <Text style={styles.text}>"When we have intense, negative emotions - such as depression and anxiety-our thoughts are often overly negative. These negative thoughts can intensify and prolong feelings of depression and anxiety," says Dr. Bradley Miller, a psychiatrist and neuroscientist in New York City who specialises in therapy and management of anxiety and depression.</Text>
              <Text style={styles.text}>Cognitive reframing employs strategies that reshape our instinctive interpretation of events - which are often negative - and encourages healthier and more realistic thought patterns. This keeps us grounded and results in fewer overwhelming emotional responses to stimulus.</Text>
              <Text style={styles.text}>"Individuals who report greater amounts of well-being and daily positive emotion report using (reframing more frequently than people who report daily negative emotion," Koteri McRae, a University of Denver psychologist who works with the study of emotions says.</Text>
              <Text style={styles.text}>However, despite its widely accepted effectiveness in behavioural therapy, studies have shown that cognitive reframing isn't always a technique people naturally know how to employ intuitively</Text>
              <Image source={images.articleImg} style={{width: '90%', alignSelf: 'center'}} />
              <Text style={styles.text}>The first step requires identifying the negative thought or harmful interpretation of events that's leading to overwhelming negative feelings</Text>
              <Text style={styles.text}>Once we've named the negative thought patterns, the next step is to calmly and clinically re-evaluate the reality.</Text>
              <Text style={styles.text}>Then instead of embracing the negative thought(s), we actively practice more positive, self-compassionate, and flexible Interpretations. Even if we don't believe it Initially, this will develop more naturally positive thought patterns and in time, result in more grounded and manageable feelings</Text>
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 10}}>
                  <Text style={styles.textHeading}>     • Identify negative thoughts </Text>
              </View>
              <Text style={[styles.text, {marginLeft: wp('13%')}]}>When you experience a negative feeling point it out to yourself. Try to give it a name. What is the feeling exactly? Maybe you feel anxious giving a presentation and start to focus on all the ways it may go wrong. Stop the thought mid-flow by verbally or internally saying "stop", if you need to.</Text>
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 10}}>
                  <Text style={styles.textHeading}>     • Re-evaluate your circumstances</Text>
              </View>
              <Text style={[styles.text, {marginLeft: wp('13%')}]}>When you identify negative thoughts note all the evidence that supports a negative interpretation and all the evidence that doesn't even if you don't believe the positive interpretations initially,</Text>
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 10}}>
                  <Text style={styles.textHeading}>     • Practice positive interpretations</Text>
              </View>
              <Text style={[styles.text, {marginLeft: wp('13%')}]}>The last step can be as simple as speaking kindly to yourself or reminding yourself things are not as bad as they first seemed. If you are focussed on all the ways a presentation could go wrong, consciously remind yourself of the ways it could go right. Try to be specific even if you don't believe the possible positive outcomes are likely.</Text>
              <Text style={styles.text}>Over time this will become a more natural process and we will develop more positive thought patterns.</Text>
              <Text style={styles.text}>In the cases where cognitive reframing can help manage our feelings, we are not simply 'using the power of positive thinking: Our instinctive thought patterns and feelings in these instances are not accurate interpretation of events.</Text>
              <Text style={styles.text}>As our reframed thoughts develop organic, healthier thought patterns our interpretation of events becomes not just more positive but more realistic. The reframed thoughts are not a rejection of reality, but in fact more grounded than our instinctive, overwhelmingly negative thoughts may have been</Text>
              <Text style={styles.text}>Things are rarely as bad as they seem when we fall into negative thought patterns</Text>

              <View style={{backgroundColor: theme.backgrounds.liteBlueBG, width: '90%', alignSelf: 'center', borderRadius: 15, padding: 20, marginVertical: 0}}>
                <Text style={{fontFamily: fonts.bold, color: theme.primaryColor, fontSize: wp('4%') }}>Did you know?</Text>
                <Text style={{fontFamily: fonts.regular, color: theme.primaryColor, fontSize: wp('3.9%'), marginTop: 8 }}>Feelings really can be contagious. As social creatures, we trade information about how we're feeling verbally and non-verbally - and these cues affect each other's moods.</Text>
              </View>
  
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 10}}>
                  <Text style={styles.textHeading}>Things To Remember</Text>
              </View>
              <Text style={styles.text}>Cognitive reframing isn't just a short-term fix but has long-term goals too.</Text>
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 10}}>
                  <Text style={styles.textHeading}>     • In the short term</Text>
              </View>
              <Text style={[styles.text, {marginLeft: wp('13%')}]}>Regular cognitive reframing when faced with negative events can help adjust our mood and temper overwhelming emotions in the immediate moment. This isn't about bottling up feelings but instead encouraging healthier thoughts and managing our negative feelings.</Text>
              <View style={{flexDirection: 'row', alignItems: "flex-end", marginVertical: 10}}>
                  <Text style={styles.textHeading}>     • In the long term</Text>
              </View>
              <Text style={[styles.text, {marginLeft: wp('13%')}]}>Focusing daily on balanced and positive thoughts is a great way to shift a negative mindset to a healthier one. Dr. Miller suggests repeated practice is the best way to shift our overall 'sense of mood "Cognitive reframing can lead to a long-term shift in your thinking, and more balanced and positive thinking becomes automatic," he says. People who claim to use cognitive reframing techniques daily generally report having more happy daily emotions on average</Text>

              <Text style={styles.text}>Be mindful that regular, overwhelming negative feelings may be the result of ingrained negative thought patterns. Cognitive reframing has proven to be an effective tool in adjusting these patterns of thought but is only one method.</Text>
              <Text style={styles.text}>Whether you decide to consciously practice cognitive reframing techniques and regardless of where you are at in your mental health journey, be patient with yourself and those around you. When possible, practice compassion with yourself.</Text>
              <Text style={styles.text}>This concludes the first part of our series on Cognitive Reframing. If you'd like to know more, you can read about Cognitive Reappraisal: Strategies for Thought Reframing.</Text>

              
          </View>
        </ScrollView>
      </View>
    )
  }
  
  export default Article;
  
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