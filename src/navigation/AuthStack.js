import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpscreen from '../screens/SignUpscreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPass from '../screens/ForgotPass';
import { useEffect } from "react";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createStackNavigator();


const AuthStack = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
      "308099233946-9tbgo38kiak3bi0q8uigb3vj01llnn11.apps.googleusercontent.com",
    });
  }, []);
  return (
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen 
        options={{header: () => null}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{header: () => null}}
        name="SignUp"
        component={SignUpscreen}
      />
       <Stack.Screen
        options={{header: () => null}}
        name="ForgotPass"
        component={ForgotPass}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
