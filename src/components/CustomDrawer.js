import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import stringsOfLanguages from '../utils/Localization';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  ALIGNCONTENT,
  ALIGNITEMS,
  COLOR,
  FLEX,
  FLEXDIRECTION,
  FONTSIZE,
  MARGINLIFT,
  MARGINTOP,
} from '../utils/Theme';

const CustomDrawer = ({props, navigation}) => {
  return (
    <DrawerContentScrollView {...props} nestedScrollEnabled={true}
    screenOptions={{headerShown: false}}>
      <View style={styles.container}>
        <View>
          <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
            FunDoNotes
          </Text>
        </View>
        <TouchableOpacity
          style={styles.notesIcon}
          onPress={() => navigation.navigate('Notes')}>
          <Icons name={'lightbulb-outline'} size={30} color="#dcdef5" />
          <Text style={{fontSize: 20, color: 'black', marginLeft: 10}}>
            Notes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.reminderIcon}
          onPress={() => navigation.navigate('Reminders')}>
          <Icons name={'bell-outline'} size={30} color="#dcdef5" />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              textAlign: 'center',
              marginLeft: 10,
            }}>
            Reminders
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: '#dcdef5',
            borderTopColor: '#dcdef5',
            borderBottomWidth: 1,
            borderTopWidth: 1,
            marginTop: 5,
          }}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{marginLeft: 10, color: 'black', fontSize: 16}}>
              Labels
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateNewLabel')}>
              <Text style={{marginLeft: 150, fontSize: 16, color: 'black'}}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.labelIcon}
            onPress={() => navigation.navigate('CreateNewLabel')}>
            <Icons name={'plus'} size={30} color="#dcdef5" />
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                textAlign: 'center',
                marginLeft: 10,
              }}>
              CreateNewLabel
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.archiveIcon}
          onPress={() => navigation.navigate('Archive')}>
          <Icons
            name={'archive-arrow-down-outline'}
            size={30}
            color="#dcdef5"
          />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 10,
              textAlign: 'center',
            }}>
            Archive
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.archiveIcon}
          onPress={() => navigation.navigate('Archive')}>
          <Icons name={'delete'} size={30} color="#dcdef5" />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 10,
              textAlign: 'center',
            }}>
            Deleted
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingIcon}
          onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={30} color={'#dcdef5'} />
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 10,
              textAlign: 'center',
            }}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: FLEX.FLEX,
    marginTop: MARGINTOP.TOP,
    alignContent: ALIGNITEMS.ITEM,
  },
  notesIcon: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.TOP,
    marginLeft: MARGINLIFT.LEFT,
    alignContent: ALIGNITEMS.ITEM,
  },
  reminderIcon: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.TOP,
    marginLeft: MARGINLIFT.LEFT,
    alignContent: ALIGNCONTENT.CENTER,
  },
  labelIcon: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.TOP,
    marginLeft: MARGINLIFT.LEFT,
    alignContent: ALIGNCONTENT.CENTER,
  },
  archiveIcon: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.TOP,
    marginLeft: MARGINLIFT.LEFT,
    alignContent: ALIGNCONTENT.CENTER,
  },
  settingIcon: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.TOP,
    marginLeft: MARGINLIFT.LEFT,
    alignContent: ALIGNCONTENT.CENTER,
  },
  text: {
    fontSize: FONTSIZE.DRAWER_TEXT,
    marginLeft: MARGINLIFT.DRAWER_LEFT,
    color: COLOR.BLACK,
  },
  icon: {
    flexDirection: FLEXDIRECTION.DIRECTION,
    marginTop: MARGINTOP.TOP,
    marginLeft: MARGINLIFT.LEFT,
  },
});
