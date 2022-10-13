import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import fonts from '../../assets/fonts';
import theme from '../../assets/colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ActivityCard = ({onPress}) => {
    
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={{color: theme.primaryColor, fontSize: wp('4%'), fontFamily: fonts.regular}}>Tell someone what you appreciate about them</Text>
      <View style={styles.daysContainer}>
        <Text style={styles.day}>S</Text>
        <Text style={[styles.day, {backgroundColor: theme.backgrounds.liteBlueBG}]}>M</Text>
        <Text style={styles.day}>T</Text>
        <Text style={styles.day}>W</Text>
        <Text style={styles.day}>T</Text>
        <Text style={styles.day}>F</Text>
        <Text style={styles.day}>S</Text>
      </View>
      <View style={styles.progressContainer}>
        <Text style={{color: theme.primaryColor, fontSize: wp('3%'), fontFamily: fonts.regular}}>3/7 completed this week</Text>
        <View style={styles.progressBar}><View style={styles.progress}></View></View>
      </View>
    </TouchableOpacity>
  )
}

export default ActivityCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fffbfa",
        width: '90%',
        alignSelf: 'center',
        padding: 25,
        borderRadius: 10,
    },
    daysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 15
    },
    day:{
        color: theme.primaryColor,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        textAlign: 'center',
        width: wp('9%'),
        paddingVertical: 5,
        alignSelf:'center',
        justifyContent: 'center',
        fontFamily: fonts.regular
    },
    progressContainer: {
        marginVertical: 15
    },
    progressBar: {
        width: '100%',
        height: hp('5%'),
        backgroundColor: "white",
        borderRadius: 50,
        marginTop: 10,
        overflow:'hidden'
    },
    progress: {
        backgroundColor: theme.backgrounds.liteBlueBG ,
        width: '50%',
        height:'100%',
        borderRadius: 50
    }

})