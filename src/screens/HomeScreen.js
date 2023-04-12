import { StyleSheet, Text, View,LogBox,SafeAreaView, Platform, StatusBar,TouchableOpacity} from 'react-native';
import React,{useState}from 'react';
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
import ProfileModal from '../components/ProfileModal';
LogBox.ignoreLogs(['Reanimated 2']);

const HomeScreen = ({navigation}) => {
  const [viewModal, setViewModal] = useState(false);
   const {user,logout} = useContext (AuthContext);
   const handleDrawer=()=>{
    navigation.openDrawer();
   }
 
  return (
    <Background>
    <View style = {styles.Container}>
    <View style={styles.Top}>
        <Topbar />
      </View>
      {/* <View >
        <ProfileModal
       viewModal={viewModal}
       setViewModal={handleModal}
       />
      </View> */}
     <View style={styles.bottom}>
    <BottomBar/>
    </View> 
    
 
 {/* <FormButton  buttonTitle='LogOut' onPress={() => logout()}/>   */}
    </View>
  </Background>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
    Container: {
        alignContent: ALIGNCONTENT.CENTER,
        FLEX:FLEX.FLEX,

      paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
      },
      Top: {
        justifyContent: JUSTIFYCONTENT.CONTENT,
        margin: MAGIN.TOP,
      },
      bottom: {
        justifyContent: JUSTIFYCONTENT.END,
      },
})