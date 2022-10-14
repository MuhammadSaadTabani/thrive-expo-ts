import React, { useContext } from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';

import theme from '../../assets/colors';
import { AuthContext } from '../../context';
import { removeItem } from '../../storage';
import { useAuth } from 'ad-b2c-react-native';


const CustomDrawer = props => {

  const context = useContext(AuthContext);

  const { logOutAsync } = useAuth();

  const onLogoutPress = () => {
    logOutAsync().then(async () => {
      await removeItem('token');
      context.updateState();
    })
  }
  return (
    <View>
      <View {...props} style={{height: hp('100%')}}>
        <View style={{marginTop: wp('40%'), color: theme.primaryColor}}>
          <DrawerItemList {...props} />
        </View>
      </View>
      <TouchableOpacity
        onPress={onLogoutPress}
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
