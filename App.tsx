import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Linking from "expo-linking";
import Constants from "expo-constants";

import { AuthProvider } from "ad-b2c-react-native";
import Home from "./src/Home";
import Protected from "./src/Protected";
import { RootStackParamList, RouteNames } from "./src/navTypes";
import Redirect from "./src/Redirect";

const Stack = createStackNavigator<RootStackParamList>();

const prefix = Linking.createURL("/");

const linking = {
  prefixes: [prefix],
};

export default function App() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <AuthProvider
        tenant="ThriveDev"
        appId="15449bbf-50c6-48db-bfbc-0e264c81ae3c"
        loginPolicy="B2C_1A_signin_only"
        passwordResetPolicy="B2C_1A_DISPLAYCONTROL_SENDGRID_PASSWORDRESET"
        profileEditPolicy="B2C_1_ProfleEdit"
        redirectURI={Linking.createURL("redirect")}
        createNewTask={Constants.appOwnership === "expo"}
        showInRecents={Constants.appOwnership === "expo"}
      >
        <Stack.Navigator>
          <Stack.Screen name={RouteNames.home} component={Home} />
          <Stack.Screen name={RouteNames.private} component={Protected} />
          <Stack.Screen name={RouteNames.redirect} component={Redirect} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}