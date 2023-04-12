import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen'
import Notes from '../screens/Notes';
import Archive from '../screens/Archive';
import Reminders from '../screens/Reminders';
import CustomDrawer from '../components/CustomDrawer';
import stringsOfLanguages from '../utils/Localization';
import CreateNewLabel from '../screens/CreateNewLabel';
import Deleted from '../screens/Deleted';
import Settings from '../screens/Settings';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  
return (
  <Drawer.Navigator 
   drawerContent={props => <CustomDrawer {...props} />}
   screenOptions={{headerShown: false}}>
  <Drawer.Screen name="HomeScreen" component={HomeScreen} />
  <Drawer.Screen name="Notes" component={Notes} />
  <Drawer.Screen name="Archive" component={Archive} />
  <Drawer.Screen name="Reminders" component={Reminders} />
  <Drawer.Screen name="CreateNewLabel" component={CreateNewLabel} />
  <Drawer.Screen name="Deleted" component={Deleted}/>
  <Drawer.Screen name="Settings" component={Settings}/>
 
</Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})
