import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Entypo from '@expo/vector-icons/Entypo';


import theme from '../../../assets/colors';
import fonts from '../../../assets/fonts';
import images from '../../../assets/images';

import Logo from '../../../components/common/Logo';
import Button from '../../../components/common/Button';
import GradientButton from '../../../components/common/GradientButton';

const Feedback = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Entypo
            name="menu"
            size={30}
            color={theme.primaryColor}
            style={styles.menuIcon}
            onPress={() => navigation.toggleDrawer()}
          />
          <Logo />
        </View>
        <Image
          source={images.background}
          style={{position: 'absolute', top: 0, zIndex: -1}}
        />
        <View style={styles.topTextContainer}>
          <Text
            style={{
              color: theme.primaryColor,
              fontSize: wp('8%'),
              fontFamily: fonts.bold,
              marginBottom: 14,
            }}>
            Feedback and Support
          </Text>
          <Text
            style={{
              color: theme.primaryColor,
              fontSize: wp('4%'),
              fontFamily: fonts.regular,
            }}>
            We'd love to hear from you. Don't be shy
          </Text>
        </View>

        <View>
          <Text
            style={{
              color: theme.primaryColor,
              fontFamily: fonts.bold,
              fontSize: wp('4%'),
              marginHorizontal: 20,
              marginVertical: 10,
            }}>
            Subject
          </Text>
          <TextInput
            placeholder="e.g. to be more active and sleep 8 hours a night"
            placeholderTextColor="lightgrey"
            style={{
              color: theme.primaryColor,
              fontFamily: fonts.regular,
              borderWidth: 1,
              borderColor: theme.primaryColor,
              borderRadius: 8,
              marginHorizontal: 15,
              padding: 12,
              fontSize: wp('4%'),
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: theme.primaryColor,
              fontFamily: fonts.bold,
              fontSize: wp('4%'),
              marginHorizontal: 20,
              marginVertical: 10,
            }}>
            Description
          </Text>
          <TextInput
            placeholder="e.g. to be more active and sleep 8 hours a night"
            placeholderTextColor="lightgrey"
            style={{
              color: theme.primaryColor,
              fontFamily: fonts.regular,
              borderWidth: 1,
              borderColor: theme.primaryColor,
              borderRadius: 8,
              marginHorizontal: 15,
              padding: 12,
              fontSize: wp('4%'),
            }}
            multiline={true}
            numberOfLines={8}
            textAlignVertical="top"
          />
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={{width: '40%', marginLeft: 25}}>
            <GradientButton text="Send" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgrounds.whiteBG,
  },
  menuIcon: {
    position: 'absolute',
    left: wp('2.5%'),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  topTextContainer: {
    padding: 25,
    paddingTop: 60,
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
    marginTop: 10,
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
    bottom: 0,
  },
  textArticleContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 15,
  },
});
