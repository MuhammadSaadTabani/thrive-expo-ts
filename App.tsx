import React, { useCallback } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Protected from "./src/Protected";
import { RootStackParamList, RouteNames } from "./src/routes/navTypes";
import Redirect from "./src/screens/redirect";
import Routes from "./src/routes";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";


const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Pangram-ExtraLight": require('./src/assets/fonts/Pangram-Black.otf'),
    "Pangram-Light": require('./src/assets/fonts/Pangram-Light.otf'),
    "Pangram-Medium": require('./src/assets/fonts/Pangram-Medium.otf'),
    "Pangram-Regular": require('./src/assets/fonts/Pangram-Regular.otf'),
    "Pangram-Bold": require('./src/assets/fonts/Pangram-Bold.otf'),
    "Pangram-ExtraBold": require('./src/assets/fonts/Pangram-ExtraBold.otf'),
    "Pangram-Black": require('./src/assets/fonts/Pangram-Black.otf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store} >
      <Routes/>
    </Provider>
  );
}

// import { AuthProvider } from "ad-b2c-react-native";
// import * as Linking from "expo-linking";
// import Constants from "expo-constants";


// const prefix = Linking.createURL("/");

// const linking = {
//   prefixes: [prefix],
// };

// export default function App() {
//   return (
//     <NavigationContainer 
//         // theme={{colors:{background:colors.background}}}
        
//         linking={linking} 
//         fallback={<Text>Loading...</Text>}
//     >
//         <AuthProvider
//             tenant="ThriveDev"
//             appId="15449bbf-50c6-48db-bfbc-0e264c81ae3c"
//             loginPolicy="B2C_1A_signin_only"
//             passwordResetPolicy="B2C_1A_DISPLAYCONTROL_SENDGRID_PASSWORDRESET"
//             profileEditPolicy="B2C_1_ProfleEdit"
//             redirectURI={Linking.createURL("redirect")}
//             createNewTask={Constants.appOwnership === "expo"}
//             showInRecents={Constants.appOwnership === "expo"}
//         >
//             <Stack.Navigator>
//             <Stack.Screen name={RouteNames.home} component={Home} />
//             <Stack.Screen name={RouteNames.private} component={Protected} />
//             <Stack.Screen name={RouteNames.redirect} component={Redirect} />
//             </Stack.Navigator>
//         </AuthProvider> 


//         {/* <Stack.Navigator screenOptions={{headerShown: false}}>
//             <Stack.Screen name="AuthRoutes" component={AuthRoutes}/>   
//             <Stack.Screen name="MainRoutes" component={MainRoutes}/>   
//         </Stack.Navigator> */}
//     </NavigationContainer>
//   );
// }