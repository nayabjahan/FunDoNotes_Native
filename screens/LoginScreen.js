import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  Alert,
} from 'react-native';
import React, {useState,useContext} from 'react';
import Background from '../components/Background';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {Eye, EyeActive} from '../assets';
import { AuthContext } from '../navigation/AuthProvider';
import { sendPasswordResetEmail,} from "@react-native-firebase/auth";
import auth from '@react-native-firebase/auth';



const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [seePassword, setSeePassword] = useState(true);

  const {login} = useContext(AuthContext)
 
  
 const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  return (
    <Background>
      <View style={styles.container}>
        <Image source={require('../assets/unnamed.png')} style={styles.logo} />
        <Text style={styles.text}>FunDoNotes</Text>
        
        <FormInput
          labelValue={email}
          onChangeText={text => handleCheckEmail(text)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        
        
        {checkValidEmail ? (
          <Text style={styles.textFailed}>Wrong format email</Text>
        ) : (
          <Text style={styles.textFailed}> </Text>
        )}
        <View style={{flexDirection:'row'}}>
        <FormInput
          labelValue={password}
          onChangeText={text => setPassword(text)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={seePassword}
        />
        
        <TouchableOpacity
          style={styles.wrapperIcon}
          onPress={() => setSeePassword(!seePassword)}>
          <Image
            source={
              seePassword
                ? require('../assets/Eye.png')
                : require('../assets/EyeActive.png')
            }
            style={styles.icon}
          />
        </TouchableOpacity>
        </View>
        <FormButton
          buttonTitle="Sign In"
          onPress={() => login(email,password)}
        />
        <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('ForgotPass')}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        {Platform.OS === 'android' ? (
          <View>
            <SocialButton
              buttonTitle="Sign In with Facebook"
              btnType="facebook"
              color="#4867aa"
              backgroundColor="#e6eaf4"
              onPress={() => {}}
            />

            <SocialButton
              buttonTitle="Sign In with Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => {}}
            />
          </View>
        ) : null}

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.navButtonText}>
            Don't have an acount? SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
    alignItems: 'center',
    marginHorizontal: 100,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 30,
    marginBottom: 30,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 20,
  },
  icon: {
    width: 30,
    height: 24,
    
  },
});