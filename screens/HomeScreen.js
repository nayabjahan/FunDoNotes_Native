import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Background from '../components/Background';
import FormButton from '../components/FormButton';
import { AuthContext} from '../navigation/AuthProvider';
import {useContext} from 'react';
import BottomBar from '../components/BottomBar';

import {
    ALIGNCONTENT,
    COLOR,
    FLEX,
    FONTSIZE,
    FONTWEIGHT,
    JUSTIFYCONTENT,
    MAGIN,
    WIDTH,
  } from '../utils/Theme';
import Topbar from '../components/Topbar';


const HomeScreen = () => {
   const {user,logout} = useContext (AuthContext);
  return (
  <Background>
    <View style = {styles.Container}>
    <View style={styles.Top}>
        <Topbar/>
      </View>
     <View style={styles.bottom}>
    <BottomBar/>
    </View> 
{/* <Text style={styles.text}>
welcome {user.uid}
</Text>
<FormButton  buttonTitle='LogOut' onPress={() => logout()}/> */}
    </View>
  </Background>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
    Container: {
        flex: FLEX.FLEX,
        alignContent: ALIGNCONTENT.CENTER,
      },
      Top: {
        justifyContent: JUSTIFYCONTENT.CONTENT,
        margin: MAGIN.TOP,
      },
      bottom: {
        justifyContent: JUSTIFYCONTENT.END,
      },
})