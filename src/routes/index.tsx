// import React, {useState} from 'react';
// import { Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator} from '@react-navigation/stack';
// import 'react-native-gesture-handler';
// import { isReadyRef, navigationRef } from '../navigation';
// import AuthRoutes from './AuthRoutes';
// import MainRoutes from './MainRoutes';
// import { AuthProvider } from "ad-b2c-react-native";
// import * as Linking from "expo-linking";
// import Constants from "expo-constants";
// import Protected from '../Protected';
// import { RouteNames } from '../navTypes';

// const Stack = createStackNavigator();


// const prefix = Linking.createURL("/");

// const linking = {
//   prefixes: [prefix],
// };


// const Routes = () => {

//     const [isLoggedIn, setIsLoggedIn] = useState(null)

//     // const dispatch = useDispatch();

//     // useEffect(()=>{
//     //     checkToken();
//     // },[])

//     // const checkToken = async () => {
//     //     getItem('user').then((user)=>{
//     //         if(user){
//     //             setIsLoggedIn(true);
//     //             dispatch({
//     //                 type: PUT_USER_DATA, 
//     //                 payload: JSON.parse(user)
//     //             })
//     //         }else{
//     //             setIsLoggedIn(false);
//     //         }
//     //     });
//     // }

//     // if(isLoggedIn === null){
//     //     return <AuthScreen/>
//     // }

//     return(
//         <>
//             {/* <AuthContext.Provider value={{updateState:checkToken}}>
//                 <NavigationContainer 
//                     // theme={{colors:{background:colors.background}}}
//                     ref={navigationRef}
//                     onReady={() => {
//                         isReadyRef.current = true;
//                     }}
//                 >
//                     <Stack.Navigator headerMode="none">
//                         {isLoggedIn
//                             ?<Stack.Screen options={{ cardStyleInterpolator: Slide }} name="BottomNavigator" component={BottomNavigator}/>   
//                             :<Stack.Screen name="AuthRoutes" component={AuthRoutes}/>
//                         }
//                     </Stack.Navigator>
//                 </NavigationContainer>
//             </AuthContext.Provider> */}


//                 <NavigationContainer 
//                     // theme={{colors:{background:colors.background}}}
//                     ref={navigationRef}
//                     // onReady={() => {
//                     //     isReadyRef.current = true;
//                     // }}
//                     linking={linking} 
//                     fallback={
//                         <Text>Loading...</Text>
//                     }
//                 >
//                     <AuthProvider
//                         tenant="ThriveDev"
//                         appId="15449bbf-50c6-48db-bfbc-0e264c81ae3c"
//                         loginPolicy="B2C_1A_signin_only"
//                         passwordResetPolicy="B2C_1A_DISPLAYCONTROL_SENDGRID_PASSWORDRESET"
//                         profileEditPolicy="B2C_1_ProfleEdit"
//                         redirectURI={Linking.createURL("redirect")}
//                         createNewTask={Constants.appOwnership === "expo"}
//                         showInRecents={Constants.appOwnership === "expo"}
//                     >
//                         <Stack.Navigator>
//                         <Stack.Screen name={RouteNames.home} component={Home} />
//                         <Stack.Screen name={RouteNames.private} component={Protected} />
//                         <Stack.Screen name={RouteNames.redirect} component={Redirect} />
//                         </Stack.Navigator>
//                     </AuthProvider> 


//                     {/* <Stack.Navigator screenOptions={{headerShown: false}}>
//                         <Stack.Screen name="AuthRoutes" component={AuthRoutes}/>   
//                         <Stack.Screen name="MainRoutes" component={MainRoutes}/>   
//                     </Stack.Navigator> */}
//                 </NavigationContainer>
//         </>
//     )
// }
// export default Routes;



import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import { RootStackParamList, RouteNames } from "./navTypes";

const Stack = createStackNavigator();

import { AuthProvider } from "ad-b2c-react-native";
import * as Linking from "expo-linking";
import Constants from "expo-constants";
import { StatusBar } from 'expo-status-bar';
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';
import Redirect from '../screens/redirect';
import { useDispatch } from 'react-redux';
import { getItem } from '../storage';
import { PUT_USER_DATA, PUT_USER_TOKEN } from '../redux/Constants';
import AuthSplash from '../screens/AuthSplash';
import { isReadyRef, navigationRef } from '../navigation';
import { AuthContext } from '../context';


const prefix = Linking.createURL("/");

const linking = {
  prefixes: [prefix],
};

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<any>(null)

  const dispatch = useDispatch();

  useEffect(()=>{
      checkToken();
  },[])

  const checkToken = async () => {
      getItem('token').then((token:any)=>{
          if(token){
            console.log('token', token)
              setIsLoggedIn(true);
              dispatch({
                  type: PUT_USER_TOKEN, 
                  payload: JSON.parse(token)
              })
          }else{
              setIsLoggedIn(false);
          }
      });
  }

  if(isLoggedIn === null){
      return <AuthSplash/>
  }

  return (
    <AuthContext.Provider value={{updateState:checkToken}}>
      <NavigationContainer 
          // theme={{colors:{background:colors.background}}}
          linking={linking} 
          fallback={<Text>Loading...</Text>}
          // theme={{colors: {background: 'white'}}}
          ref={navigationRef}
          // onReady={() => {
          //     isReadyRef.current = true;
          // }}
      >
          <StatusBar   />
          <AuthProvider
              tenant="ThriveDev"
              appId="15449bbf-50c6-48db-bfbc-0e264c81ae3c"
              loginPolicy="B2C_1A_signin_only"
              passwordResetPolicy="B2C_1A_DISPLAYCONTROL_SENDGRID_PASSWORDRESET"
              profileEditPolicy="B2C_1_ProfleEdit"
              // redirectURI={'msauth://org.innowell.thrivedev/redirect'}
              // redirectURI={Linking.createURL("msauth://org.innowell.thrivedev/redirect")}
              redirectURI={Linking.createURL("redirect")}
              createNewTask={Constants.appOwnership === "expo"}
              showInRecents={Constants.appOwnership === "expo"}
          >
              <Stack.Navigator screenOptions={{headerShown: false}}>
                  {/* <Stack.Screen name={RouteNames.redirect} component={Redirect} /> */}
                  {/* <Stack.Screen name={RouteNames.auth} component={AuthSplash} /> */}
                  {isLoggedIn
                    // ?<Stack.Screen name={RouteNames.home} component={MainRoutes} />
                    // :<Stack.Screen name={RouteNames.login} component={AuthRoutes} />
                    ?
                      <>
                        <Stack.Screen name={RouteNames.redirect} component={Redirect} />
                        <Stack.Screen name={RouteNames.home} component={MainRoutes} />
                        {/* <Stack.Screen name={RouteNames.login} component={AuthRoutes} /> */}
                      </>
                    :
                      <>
                        <Stack.Screen name={RouteNames.redirect} component={Redirect} />
                        <Stack.Screen name={RouteNames.login} component={AuthRoutes} />
                      </>
                  }
              </Stack.Navigator>
          </AuthProvider> 

      </NavigationContainer>
    </AuthContext.Provider>
  );
}