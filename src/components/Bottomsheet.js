import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'


const Bottomsheet = (props) => {
   
    return (
    <View>
      <Modal 
        animationType="slide" 
        transparent={true} 
        visible={props.visible} 
        style={styles.container}
        >
        <View style={styles.modalView}>
            <TouchableOpacity style={{flexDirection:'row', marginTop:10}} onPress={props.openGallery}>
            <MaterialIcon name='photo-library' style={styles.iconStyle}/>
                <Text style={styles.textStyle}>Select from Gallary</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={props.openCamera}>
                <Icon name='camera' style={styles.iconStyle}/>
                <Text style={styles.textStyle}>Select From Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ props.Hide} style={{flexDirection: 'row'}}>
                <AntIcon name="close" style={styles.iconStyle}/>
                <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
            </View>
        </Modal>
    </View>
    
  )
}

export default Bottomsheet

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginLeft: 0,
        marginBottom: 0
    }, 
    modalView: {
        position: 'absolute',
        height: 150,
        width: '100%',
        backgroundColor: '#d3eaf2',
        bottom: 0, 
        
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 600,
        color: '#000'
    },
    iconStyle: {
        width:24,
        height:24,
        fontSize:24,
        marginRight:10,
        marginBottom:15,
        marginLeft:8
    } 
})