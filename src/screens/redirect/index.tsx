import { useNavigation, useRoute } from "@react-navigation/core";
import { useAuth } from "ad-b2c-react-native";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Loader from "../../components/common/Loader";
import {
  AuthScreenRouteProp,
  RootStackNavigationProp,
  RouteNames,
} from "../../routes/navTypes";
import { getItem } from "../../storage";

export default function () {
  const { handleRedirectAsync } = useAuth();
  const nav = useNavigation<RootStackNavigationProp>();
  const route = useRoute<AuthScreenRouteProp>();
  useEffect(() => {
    const params = route.params;
    handleRedirectAsync(params?.code, params?.state)
      .then(() => {
        if (nav.canGoBack()) {
          nav.goBack();
        } else {
          getItem('token').then(token => {
            if(token){
              nav.replace(RouteNames.home);
            }else{
              nav.replace(RouteNames.login);
            }
          })
        }
      })
      .catch((ex: any) => {
        console.log(ex);
        getItem('token').then(token => {
          if(token){
            nav.replace(RouteNames.home);
          }else{
            nav.replace(RouteNames.login);
          }
        })
      });
  }, [route.params]);


  return (
    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
      <Loader/>
    </View>
  )

  
}