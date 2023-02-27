import { StyleSheet, Text, View,TextInput,StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../components/Background';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const ForgotPass = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  return (
    <Background>
 <View style={styles.container}>
 <StatusBar backgroundColor="#000" barStyle="light-content" />
 <View style={styles.header}>
          <View>
            <Animatable.View animation="fadeInUpBig" />
            <Text style={styles.text_header}>Reset Password</Text>
          </View>
        </View>
          <Text style={styles.text_footer}>Email:</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              size={20}
              color="#000"
              style={{marginHorizontal: 5}}
            />
            {data.check_textInputChange ? (
              <Feather name="check-circle" color="green" size={2} />
            ) : null}
            <TextInput
              placeholder="Enter Your Email"
              autoCapitalize="none"
              onChangeText={value => textInputChange(value)}
              style={styles.textinput}
            />
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Username must be 4 characters long.
              </Text>
            </Animatable.View>
          )}
        </View>
        <View>
          <Text style={styles.text_pass}>Reset Password:</Text>
          <View style={styles.action}>
            <FontAwesome
              name="lock"
              size={20}
              color="#000"
              style={{marginHorizontal: 5}}
            />
            <Feather name="eye-off" color="gray" size={2} />
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={value => handlePasswordChange(value)}
              style={styles.textinput}
            />
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}
          <TouchableOpacity
            
            style={{
              alignItems: 'center',
              borderRadius: 40,
              marginHorizontal: 10,
              marginTop:30,
              backgroundColor:'black'
            }}>
            <Text style={{color: 'white', fontSize: 26, fontWeight: 'bold'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
    </Background>
    )
}

export default ForgotPass

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_header: {
    fontFamily: 'regular',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    marginLeft: 70,
    marginTop:50,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 20,
    marginTop: 50,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
   // marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  textinput: {
   // marginTop: 1,
    paddingLeft: 3,
    color: '#000',
    paddingRight: 5,
    marginHorizontal: 1,
    fontSize: 16,
    borderColor: 'black',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  text_pass: {
    color: '#05375a',
    fontSize: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
})