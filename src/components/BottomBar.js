import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ALIGNITEMS,
  BORDERRADIUS,
  BORDERWIDTH,
  COLOR,
  FLEXDIRECTION,
  HIGHT,
  JUSTIFYCONTENT,
  MARGINLIFT,
  MARGINTOP,
  PADDING,
  WIDTH,
}from '../utils/Theme';

const BottomBar = () => {
  return (
    <View style={styles.container}>
       <View style={styles.IconView}>
        <TouchableOpacity>
          <Icons name={'checkbox-marked'} size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.IconView}>
        <TouchableOpacity>
          <Icons name={'brush'} size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.IconView}>
        <TouchableOpacity>
          <Icons name={'microphone-outline'} size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.IconView}>
        <TouchableOpacity>
          <Icons name={'image-outline'} size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.plusIcon}>
        <TouchableOpacity
          onPress={() => {
            HandelAddNote();
          }}>
          <Icons name={'plus'} size={40} color="#000" />
        </TouchableOpacity>
      </View>


    </View>
  )
}

export default BottomBar

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.TOPBAR_BACKGROUND,
    flexDirection: FLEXDIRECTION.DIRECTION,
    width: WIDTH.FULL,
    height: HIGHT.BUTTON,
    paddingHorizontal: PADDING.PLUS_ICON,
    marginTop:610,
  },
  IconView: {
    justifyContent: JUSTIFYCONTENT.CENTER,
    alignItems: ALIGNITEMS.ITEM,
    padding: PADDING.ICON_VIEW,
    marginLeft: MARGINLIFT.DRAWER_LEFT,
    flexDirection:FLEXDIRECTION.DIRECTION,
  },
  plusIcon:{
    width: WIDTH.PLUS_ICON,
    height: HIGHT.PLUS_ICON,
    backgroundColor: COLOR.TOPBAR_BACKGROUND,
    marginLeft: MARGINLIFT.PLUS_ICON,
    borderRadius: BORDERRADIUS.PLUS_ICON,
    borderWidth: BORDERWIDTH.PLUS_ICON,
    borderColor: COLOR.APP_BACKGROUND,
    marginTop: MARGINTOP.PLUS_ICON,
    alignItems: ALIGNITEMS.ITEM,
  },
  });