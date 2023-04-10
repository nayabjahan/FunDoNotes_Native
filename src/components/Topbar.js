import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    ALIGNITEMS,
    BORDERRADIUS,
    BORDERWIDTH,
    COLOR,
    FLEX,
    FLEXDIRECTION,
    FONTSIZE,
    HIGHT,
    JUSTIFYCONTENT,
    MARGINLIFT,
    MARGINRIGHT,
    PADDING,
    WIDTH,
  } from '../utils/Theme';
  import { Avatar } from 'react-native-paper';
  

const Topbar = (props) => {


  return (
    <View style={styles.container}>
    <TouchableOpacity
        style={styles.barIcon}
        onPress={props.onPress}>
       <FontAwesome name={'bars'} size={25} color={'#000'} />
       </TouchableOpacity>
       
      <TouchableOpacity
        style={styles.grid}
        onPress={() =>{}}>
        <Icons
          name={'view-agenda-outline'}
          size={25}
          color={'#000'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.userIcon}
        onPress={() => {}}>
        <Avatar.Image
          size={30}
          source={require('../assets/Avatar.png')}
        />
        </TouchableOpacity>
    </View>
  )
}

export default Topbar

const styles = StyleSheet.create({
    container: {
        flexDirection: FLEXDIRECTION.DIRECTION,
        height: HIGHT.INPUTTEXT,
        backgroundColor: "rgba(0,0,0,0.4)",
        width: WIDTH.FULL,
        borderRadius: BORDERRADIUS.TOPBAR_RADIUS,
        justifyContent: JUSTIFYCONTENT.AROUND,
        padding: PADDING.TEXTINPUT,
      },
      barIcon: {
        marginRight: MARGINRIGHT.BAR_ICON,
        marginLeft: MARGINLIFT.DRAWER_LEFT,
      },
      userIcon: {
        justifyContent: JUSTIFYCONTENT.BETWEEN,
        marginLeft: MARGINLIFT.DATE_TIME,
        flexDirection:FLEXDIRECTION.DIRECTION,
        
      },
      grid: {
        justifyContent: JUSTIFYCONTENT.AROUND,
        marginLeft: MARGINLIFT.GRID,
      },
})