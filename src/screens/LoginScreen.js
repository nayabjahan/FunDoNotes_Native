import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Background from '../components/Background';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Users from '../modal/Users';
import ForgotPass from './ForgotPass';


const LoginScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
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

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter(item => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        {text: 'Okay'},
      ]);
      return;
    }
    signIn(foundUser);
  };

  return (
    <Background>
      <View style={styles.container}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require('../assets/unnamed.png')}
            style={styles.imageStyle}
            resizeMode="stretch"
          />
          <View>
            <Animatable.View animation="fadeInUpBig" />
            <Text style={styles.text_header}>FunDoNotes</Text>
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
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Username must be 4 characters long.
              </Text>
            </Animatable.View>
          )}
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
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              loginHandle(data.username, data.password);
            }}
            style={{
              alignItems: 'center',
              marginTop: 30,
              backgroundColor: 'black',
              borderRadius: 10,
              marginHorizontal: 30,
              paddingBottom: 10,
            }}>
            <Text style={{color: 'white', fontSize: 26}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => navigation.navigate('ForgotPass')}
          style={{alignItems: 'center', marginTop: 15}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 110,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Don't have account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{
              alignItems: 'center',
              borderRadius: 100,
              marginHorizontal: 10,
            }}>
            <Text style={{color: 'black', fontSize: 26, fontWeight: 'bold'}}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};
export default LoginScreen;

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
    marginLeft: 100,
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
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});
