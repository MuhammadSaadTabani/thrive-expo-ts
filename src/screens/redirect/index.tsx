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
          nav.replace(RouteNames.home);
        }
      })
      .catch((ex: any) => {
        console.log(ex);
        nav.replace(RouteNames.home);
      });
  }, [route.params]);


  return (
    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
      <Loader/>
    </View>
  )

  
}