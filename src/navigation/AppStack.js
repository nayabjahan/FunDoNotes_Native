import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DrawerNavigation from './DrawerNavigation';
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}>
       <Stack.Screen
       
       name="DrawerNavigation"
         component={DrawerNavigation}
      //  options={({navigation}) => ({
      //     title: '',
      //     headerStyle: {
      //       backgroundColor: '#f9fafd',
      //       sha dowColor: '#f9fafd',
      //       elevation: 0,
      //     },
      //     // headerLeft: () => (
      //     //   <View style={{marginLeft: 10}}>
      //     //     <FontAwesome.Button 
      //     //       name="long-arrow-left"
      //     //       size={25}
      //     //       backgroundColor="#f9fafd"
      //     //       color="#333"
      //     //       onPress={() => navigation.navigate('LoginScreen')}
      //     //     />
      //     //   </View>
      //     // ),
      //   })}
      

      />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
