import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Background from '../components/Background';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const SignUp = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    confirm_secureTextEntry: true,
  });
  const textInputChange = value => {
    if (value.trim().length >= 4) {
      setData({
        ...data,
        email: value,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };
  const handlePasswordChange = value => {
    if (value.trim().length >= 8) {
      setData({
        ...data,
        password: value,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: value,
        isValidPassword: false,
      });
    }
  };
 
 
 
  const handleConfirmPasswordChange = (value) => {
    setData({
        ...data,
        confirm_password: value
    });
}

  return (
    <Background>
      <View style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <View style={styles.header}>
          <View>
            <Animatable.View animation="fadeInUpBig" />
            <Text style={styles.text_header}>Register Now!!</Text>
          </View>
        </View>
        <View>
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
        </View>
        <View>
          <Text style={styles.text_pass}>Password:</Text>
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
              onChangeText={(value) => handlePasswordChange(value)}
              style={styles.textinput}
            />
          </View>
        </View>
        <Text style={styles.text_pass}>Confirmed-Password:</Text>
        <View style={styles.action}>
          <FontAwesome
            name="lock"
            size={20}
            color="#000"
            style={{marginHorizontal: 5}}
          />
          <Feather name="eye-off" color="gray" size={2} />
          <TextInput
            placeholder="confirm your password"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(value) => handleConfirmPasswordChange(value)}
            style={styles.textinput}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            marginTop: 30,
            backgroundColor: 'black',
            borderRadius: 10,
            marginHorizontal: 30,
            paddingBottom: 10,
          }}>
          <Text style={{color: 'white', fontSize: 26}}>SignUp</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            alignItems: 'center',
            marginTop: 30,
            backgroundColor: 'black',
            borderRadius: 10,
            marginHorizontal: 30,
            paddingBottom: 10,
          }}>
          <Text style={{color: 'white', fontSize: 26}}>SignIn</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};
export default SignUp;

const {height} = Dimensions.get('window');
const height_logo = height * 0.15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageStyle: {
    height: height_logo,
    width: height_logo,
    marginTop: 40,
    paddingHorizontal: 50,
    marginLeft: 100,
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
    marginLeft: 80,
    marginTop: 50,
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
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 1,
    borderColor: '#000',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  textinput: {
    marginTop: 1,
    paddingLeft: 3,
    color: '#000',
    paddingRight: 5,
    marginHorizontal: 1,
    fontSize: 16,
    borderColor: 'black',
  },
  text_pass: {
    color: '#05375a',
    fontSize: 20,
    marginTop: 30,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
});
