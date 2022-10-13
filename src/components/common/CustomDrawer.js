import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../../assets/colors';


const CustomDrawer = props => {
  return (
    <View>
      <View {...props} style={{height: hp('100%')}}>
        <View style={{marginTop: wp('40%'), color: theme.primaryColor}}>
          <DrawerItemList {...props} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('AuthRoutes')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          marginBottom: '10%',
          marginLeft: '10%',
          backgroundColor: "white",
          paddingHorizontal: 15,
          borderRadius: 8,
          color: theme.primaryColor
        }}>
        <Ionicons name="exit-outline" size={22} color={theme.primaryColor} />
        <Text
          style={{
            color: theme.primaryColor,
            marginLeft: 8,
            fontSize: wp('4.5%'),
            
          }}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
