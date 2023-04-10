import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../components/Background'
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import  {useContext,useState} from 'react';
import { AuthContext } from '../navigation/AuthProvider';

const ForgotPass = () => {
    const {resetPassword} = useContext(AuthContext)
    const [email, setEmail] = useState();
   

    

  return (
   <Background>
    <View style={styles.container}>
    <Text style={styles.text}>Recovery Password</Text>
    <FormInput
          labelValue={email}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
 <FormButton
          buttonTitle="Submit"
          onPress={() => resetPassword(email)}
        />
    </View>
   </Background>
  )

  }
export default ForgotPass

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
    },
    text:{
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 30,
        marginBottom: 30,
        color: '#051d5f',
      },
    
})
