import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../navigation/AuthProvider';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import {
  ALIGNCONTENT,
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
import Bottomsheet from './Bottomsheet';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useState, useContext, useCallback, useEffect} from 'react';
import {updateUserData, fetchUserData} from '../services/UserServices';

const Topbar = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const {logout, user} = useContext(AuthContext);
  const [email, setEmail] = useState('FundoNotes');

  const isGoogleSignIn=user.photoURL

  const [image, setImage] = useState('');
  useEffect(() => {
    getUserData();
  }, []);
 
  const getUserData = async () => {
    if(isGoogleSignIn===null){
      const arr = await fetchUserData(user);
      setImage(arr[1]);
      setEmail(arr[0]);
    }else{
      setImage(user.photoURL)
      setEmail(user.email)
    }
    
   
  };
  const uploadImage = async image => {
    const uploadUri = image;
    const fileName = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    try {
      await storage().ref(fileName).putFile(uploadUri);

      const url = await storage().ref(fileName).getDownloadURL();
     
      updateUserData(user, url);

      Alert.alert('Image uploaded Successfully');
    } catch (e) {
      console.log(e);
    }
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 500,
      cropping: true,
    }).then(image => {
      setImage(image.path);
      uploadImage(image.path);
      // console.log(image);
    });
  };
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 500,
      cropping: true,
    }).then(image => {
      setImage(image.path);
      uploadImage(image.path);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.barIcon}
        onPress={() => {
          navigation.openDrawer();
        }}>
        <FontAwesome name={'bars'} size={25} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SearchBar')}>
        <Text style={styles.SearchText}> Search your Note</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.grid} onPress={() => {}}>
        <Icons name={'view-agenda-outline'} size={25} color="#000" />
      </TouchableOpacity>

      <View>
        <TouchableOpacity
          style={styles.userIcon}
          onPress={() => setModalVisible(true)}>
          <Avatar.Image
            size={30}
            source={image ? {uri: image} : require('../assets/Avatar2.png')}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View
            style={{
              width: 300,
              height: 300,
              backgroundColor: '#d3eaf2',
              alignSelf: 'flex-end',
              marginTop: 190,
              marginRight: 50,
              borderRadius: 20,
              justifyContent:'center',
            }}>
            <Text style={styles.modalText}>{email}</Text>
            <View style={styles.modalIcon}>
              <TouchableOpacity
                style={styles.modalAvatar}
                onPress={isGoogleSignIn===null?() => setVisible(true):null}>
                <Avatar.Image
                  size={45}
                  source={
                    image ? {uri: image} : require('../assets/Avatar2.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <Pressable style={styles.button} onPress={() => logout()}>
              <Text style={styles.textStyle}>Logout</Text>
            </Pressable>
          </View>
          <Bottomsheet
            visible={visible}
            Hide={() => setVisible(false)}
            openGallery={() => openGallery()}
            openCamera={() => openCamera()}
          />
        </Modal>
      </View>
    </View>
  );
};

export default Topbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '99%',
    borderRadius: 30,
    justifyContent: 'space-around',
    padding: 10,
    flex:1,
  
  },
  barIcon: {
    marginRight: 150,
    marginLeft: 10,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    top: '20%',
    left: '25%',
  },
  grid: {
    justifyContent: JUSTIFYCONTENT.CENTER,
    marginLeft: MARGINLIFT.GRID,
  },
  SearchText: {
    justifyContent: JUSTIFYCONTENT.CENTER,
    fontSize: FONTSIZE.DRAWER_TEXT,
    marginLeft: MARGINLIFT.BS_REMINDER,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.5,
  },

  modalAvatar: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  title: {
    height: 60,
    justifyContent: JUSTIFYCONTENT.CENTER,
    alignItems: ALIGNITEMS.ITEM,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 60,
    marginRight: 20,
  },

  button: {
    borderRadius: 60,
    padding: 10,
    elevation: 3,
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: 100,
    alignSelf: 'center',
    marginTop:10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    marginTop: 20,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 70,
    width: 210,
    alignSelf: 'center',
    padding: 7,
    fontWeight: 'bold',
    elevation: 3,
  },
  modalIcon: {
    marginTop: 5,
    marginLeft: 15,
    flexDirection: FLEXDIRECTION.DIRECTION,
    justifyContent: 'space-evenly',
    marginRight: 20,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});
