import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen'
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  
return (
  <Drawer.Navigator initialRouteName="Home">
  <Drawer.Screen name="Home" component={HomeScreen} />
 
</Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})
