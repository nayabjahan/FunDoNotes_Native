import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import { AuthContext} from '../navigation/AuthProvider';
import {useContext} from 'react';
import { set } from 'react-native-reanimated';

const ProfileModal = props => {
  const [visible, setVisible] = React.useState(false);
  const {user,logout} = useContext (AuthContext);

  return (
    <View>
    <View >
      <Modal
        visible={props.viewModal}
        transparent={true}
        onRequestClose={() => props.setViewModal(false)}
        animationType="fade"

        >
        <TouchableOpacity style={styles.container}
        onPress={()=>setVisible(false)}>

        </TouchableOpacity>
        <View >
          <View style={styles.modal}>
            <View style={styles.title}>
              <Text style={styles.text}>FunDoNotes</Text>
            </View>
            <View style={styles.modalIcon}>
              <TouchableOpacity onPress={() => {}}>
                <Avatar.Image
                  size={50}
                  source={require('../assets/Avatar2.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => logout()}
              style={styles.button}>
              <Text style={styles.text}>LogOut</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    </View>
//     <View style={styles.container}>
//       <Modal
//         visible={visible}
//         onRequestClose={() => {
//           setVisible(false);
//         }}>
//         <View style={styles.centeredview}>
//           <View style={styles.modal}>
//             <Text>FunDoNotes</Text>
//             <View style={styles.modalIcon}>
//               <TouchableOpacity onPress={() => {}}>
//                 <Avatar.Image
//                   size={50}
//                   source={require('../assets/Avatar.png')}
//                 />
//               </TouchableOpacity>
//             </View>
//             <View>
//               <TouchableOpacity onPress={() => logout()} style={styles.button}>
//                 <Text style={styles.text}>LogOut</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
  );
};

 export default ProfileModal;

const styles = StyleSheet.create({
  centered_view: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: '50%',
    width: '50%',
  },

  title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    //marginTop: 50,
    marginRight: 20,
  },

  button: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: 50,
    width: 110,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
    marginRight: 20,
    borderwidth: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 10,
    color: 'white',
  },
  modalIcon: {
    marginTop: 20,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight: 20,
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    opacity:0.5,
  }
// container:{
//     flex:1,
//     alignContent:'center',
//     alignItems:'center',
//     },
//     modal:{
//       width:'40%',
//       height:'30%',
//       alignContent:'center',
//       alignItems:'center',
//       backgroundColor:'#0999',
      
//     },
//     centeredview:{
//       justifyContent:'center',
//       flex:1,
//       alignItems:'center',
//     },
//     modalIcon:{
//         padding:10,
//         marginTop:5,
//       },
//       button:{
//         borderRadius:2,
//         backgroundColor:'#000'
      
//       },
//       text:{
//         color:'#fff'
     // } ,  
 });
