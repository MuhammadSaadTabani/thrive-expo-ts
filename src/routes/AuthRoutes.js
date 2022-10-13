
import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import ForgetPassword from '../screens/auth/ForgetPassword';
import FindYourAccount from '../screens/auth/FindYourAccount';

const Stack = createStackNavigator();


export default () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
            <Stack.Screen name="FindYourAccount" component={FindYourAccount}/>
        </Stack.Navigator>
    )
}