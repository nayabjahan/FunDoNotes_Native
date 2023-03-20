import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpscreen from '../screens/SignUpscreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPass from '../screens/ForgotPass';
const Stack = createStackNavigator();

const AuthStack = () => {
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
