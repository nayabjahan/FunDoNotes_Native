import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUp from './src/screens/SignUp';
import ForgorPass from './src/screens/ForgotPass';
import ForgotPass from './src/screens/ForgotPass';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{header: () => null}}
          name="Loginscreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="SignUp"
          component={SignUp}
        />
         <Stack.Screen
          options={{header: () => null}}
          name="ForgotPass"
          component={ForgotPass}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
