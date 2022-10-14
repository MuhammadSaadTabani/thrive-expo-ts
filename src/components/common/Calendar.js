import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Calendar} from 'react-native-calendars';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

import theme from '../../assets/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const CalendarComp = () => {
  return (
    <View style={{justifyContent: "center", alignItems: "center", width: '100%', backgroundColor: 'white', elevation: 5, borderRadius: 12, overflow: "hidden"}}>
        <View>
            <View style={{flexDirection: 'row', marginVertical: 20, justifyContent: "center", alignItems:"center"}}>
                <Text style={{fontSize:wp('4%'), color: theme.primaryColor, marginRight: 5}}>Your current Streak</Text>
                <AntDesign name="exclamationcircleo" size={13} color={theme.primaryColor} />
            </View>
            <View style={{flexDirection: 'row', marginBottom: 10, justifyContent: "center", alignItems:"center"}}>
                <SimpleLineIcons name="fire" size={25} color={theme.primaryColor} />
                <Text style={{fontSize:wp('4%'), color: theme.primaryColor, marginLeft: 5}}>12</Text>
            </View>
        </View>
        <View style={{width: '100%'}}>
            <Calendar
                // Collection of dates that have to be marked. Default = {}
                markedDates={{
                    '2022-09-16': {selected: true, marked: false, selectedColor: 'lightblue'},
                    '2022-09-17': {marked: false, selected: true, selectedColor: 'lightblue'},
                    '2022-09-18': {marked: false, selected: true,selectedColor: 'lightblue'},
                    '2022-09-19': {disabled: true, selected: true,selectedColor: 'lightblue'}
                }}
                enableSwipeMonths={true}
            />
        </View>
    </View>
  )
}

export default CalendarComp

const styles = StyleSheet.create({})