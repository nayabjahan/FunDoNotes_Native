import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Background from '../components/Background';
import FormButton from '../components/FormButton';
import { AuthContext} from '../navigation/AuthProvider';
import {useContext} from 'react';



const HomeScreen = () => {
   const {user,logout} = useContext (AuthContext);
  return (
  <Background>
    <View style = {styles.container}>
<Text style={styles.text}>
welcome {user.uid}
</Text>
<FormButton  buttonTitle='LogOut' onPress={() => logout()}/>
    </View>
  </Background>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:10,
    },
    text:{
        fontSize:20,
        color:'#fff',
    },
})