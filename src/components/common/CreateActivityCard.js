import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import fonts from '../../assets/fonts';
import theme from '../../assets/colors';
import images from '../../assets/images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CreateActivityCard = ({icon, heading, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={icon} style={{height: hp('10%'), width: wp('14%') }} resizeMode="contain" />
        <Text style={styles.subheading}>{heading}</Text>
        <Text
            style={{
            color: theme.primaryColor,
            fontSize: wp('4%'),
            fontFamily: fonts.regular,
            }}>
            {text}
        </Text>
    </TouchableOpacity>
  );
};

export default CreateActivityCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffbfa',
    width: '90%',
    alignSelf: 'center',
    padding: 25,
    borderRadius: 10,
  },
  subheading: {
    color: theme.primaryColor,
    fontSize: wp('4.8%'),
    fontFamily: fonts.bold,
    marginVertical: 18
  }
});
