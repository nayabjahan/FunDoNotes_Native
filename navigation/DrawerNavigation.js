import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Notes from '../screens/Notes';
import HomeScreen from '../screens/HomeScreen';
import Reminders from '../screens/Reminders';
import Archive from '../screens/Archive';
const DrawerNavigation = () => {
    const Drawer= createDrawerNavigator();

  return (
<Drawer.Navigator 
screenOptions={{headerShown: false}}>
<Drawer.Screen name={'HomeScreen'} component={'HomeScreen'}/>
<Drawer.Screen name={'Notes'} component={'Notes'}/>
<Drawer.Screen name={'Reminders'} component={'Reminders'}/>
<Drawer.Screen name={'Archive'} component={'Archive'}/>
</Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({})