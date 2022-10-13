import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import React, {useState} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

import theme from '../../../assets/colors';
import fonts from '../../../assets/fonts';
import images from '../../../assets/images';

import Logo from '../../../components/common/Logo';
import GradientButton from '../../../components/common/GradientButton';
import QuestionnaireCard from '../../../components/common/QuestionnaireCard';
import HealthSnapshot from '../../../components/common/HealthSnapshot';
import Header from '../../../components/common/Header';


const HealthTracker = ({navigation}) => {
  const [selectedOptions, setSelectedOptions] = useState('questionnaires');
  
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
            }}>Health Tracker</Text>
            <Text style={{
                color: theme.primaryColor,
                fontSize: wp('4%'),
                fontFamily: fonts.regular
            }}>Our questionnaires are clinically backed so you can be confident in your assessment</Text>
        </View>
        <View style={styles.mainContainer}>
            <View style={styles.optionsContainer}>
              <Text style={[styles.option, selectedOptions === "questionnaires" ? {borderBottomWidth: 3} : {borderBottomWidth: 0}]} onPress={() => setSelectedOptions('questionnaires')} >Questionnaires</Text>
              <Text style={[styles.option, selectedOptions === "history" ? {borderBottomWidth: 3} : {borderBottomWidth: 0}]} onPress={() => setSelectedOptions('history')} >History</Text>
            </View>

            {
              selectedOptions === "questionnaires" ? (
                <>
                  <View style={{width: '90%', alignSelf: 'center', marginVertical: 15}}>
                    <QuestionnaireCard heading="Full Questionnaire" date="Last results 3rd Sep 2020" icon={images.createActivity} details="Your full questionnaire convers all areas of your health and wellbeing - physical, emotional and social - and we recommend taking it at least every 30 days to see relationship between different health areas and re-baseline to get a holistic view of your wellbeing." />
                  </View>
                  <View style={{width: '90%', alignSelf: 'center', marginVertical: 15}}>
                    <QuestionnaireCard heading="Daily Activity" date="Last results 3rd Sep 2020" icon={images.createActivity} details="This social domain explores things that may be making you feel overwhelmed and checks-in on your level of distress including feelings of anxiety and dipression." />
                  </View>
                  <View style={{width: '90%', alignSelf: 'center', marginVertical: 15}}>
                    <QuestionnaireCard heading="Emotional Health" date="Last results 3rd Sep 2020" icon={images.createActivity} details="This emotional health domain explores things that may be making you feel overwhelmed and checks-in on your level of distress, including feelings of anxiety and dipression." />
                  </View>
                  <View style={{width: '90%', alignSelf: 'center', marginVertical: 15}}>
                    <QuestionnaireCard heading="Physical Activity" date="Last results 3rd Sep 2020" icon={images.createActivity} details="This lifestyle domain explores your physical activity and checks-in on the amount of exercise you're taking part in to regulate your physical wellbeing." />
                  </View>
                  <View style={{width: '90%', alignSelf: 'center', marginVertical: 15}}>
                    <QuestionnaireCard heading="Sleep" date="Last results 3rd Sep 2020" icon={images.createActivity} details="This lifestyle explores your sleep-wake cycle and checks-in on factors that might be reducing the quality of your rest." />
                  </View>
                  <View style={{width: '90%', alignSelf: 'center', marginVertical: 15}}>
                    <QuestionnaireCard heading="Social Connection" date="Last results 3rd Sep 2020" icon={images.createActivity} details="This social domain explores your relationship with family and friends and checks-in on your support system and connections." />
                  </View>
                  <View style={{width: '90%', alignSelf: 'center', marginVertical: 15}}>
                    <QuestionnaireCard heading="Substance Use" date="Last results 3rd Sep 2020" icon={images.createActivity} details="This lifestyle domain explores your alcohol, smoke and drug and intake and checks-in on your current levels and moderate concerns." />
                  </View>
                </>
              ) : (
                <>
                  <View style={{width: '90%', alignSelf: 'center', marginVertical: 10}}>
                    <HealthSnapshot heading="Social Connections" date="Last taken 3rd May 2020" />
                  </View>
                  <View style={{width: '90%', alignSelf: 'center', marginVertical: 15}}>
                    <HealthSnapshot heading="Daily Activity" date="Last taken 3rd May 2020" />
                  </View>
                  <View style={{width: '90%', alignSelf: 'center', marginVertical: 15}}>
                    <HealthSnapshot heading="Substance Use" date="Last taken 3rd May 2020" />
                  </View>
                  <View style={{width: '90%', alignSelf: 'center', marginVertical: 15}}>
                    <HealthSnapshot heading="Nutrition" date="Last taken 3rd May 2020" />
                  </View>
                  <View style={{width: '90%', alignSelf: 'center', marginVertical: 15}}>
                    <HealthSnapshot heading="Sleep" date="Last taken 3rd May 2020" />
                  </View>
                  <View style={{width: '90%', alignSelf: 'center', marginVertical: 15}}>
                    <HealthSnapshot heading="Emotional Health" date="Last taken 3rd May 2020" />
                  </View>
                  <View style={{width: '90%', alignSelf: 'center', marginVertical: 15}}>
                    <HealthSnapshot heading="Physical Activity" date="Last taken 3rd May 2020" />
                  </View>
                </>
              )
            }
            
            
            
            
        </View>
      </ScrollView>
    </View>
  )
}

export default HealthTracker

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
    optionsContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf:'center',
        marginVertical: 20
    },
    option: {
      color: theme.primaryColor,
      width: '50%',
      textAlign: 'center',
      fontSize: wp('5%'),
      fontFamily: fonts.bold,
      borderBottomColor: theme.primaryColor,
      padding: 15
    }

    
})