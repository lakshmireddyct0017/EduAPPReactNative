import { useNavigation } from '@react-navigation/native'
import React, { PureComponent } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Image } from 'react-native'




const Menu=()=>{
  const navigation=useNavigation();
    return (
      <View style={StyleSheet.container}>
      {/* <TouchableOpacity style={StyleSheet.buttonStyle}
      onPress={()=>navigation.navigate('Course')}>
 <Image style={styles.iconStyle}
 source={{

    uri:"https://t4.ftcdn.net/jpg/04/22/87/59/240_F_422875958_SydcXknxnxGXq7Irk8Xb3oBvpxaVwbJF.jpg"

}} />
      </TouchableOpacity> */}

      <TouchableOpacity style={StyleSheet.buttonStyle}
      onPress={()=>navigation.navigate('Student')}>
 <Image 
 style={styles.iconStyle}
 source={{
    uri:"https://cdn-icons-png.flaticon.com/128/81/81460.png"

}} />
      </TouchableOpacity>

      <TouchableOpacity style={StyleSheet.buttonStyle}
      onPress={()=>navigation.navigate('About')}>
 <Image 
 style={styles.iconStyle}
 source={{
uri:"https://cdn-icons-png.flaticon.com/128/471/471662.png"
}} />
      </TouchableOpacity>

      <TouchableOpacity style={StyleSheet.buttonStyle}
      onPress={()=>navigation.navigate('Contact')}>
 <Image 
 style={styles.iconStyle}source={{
    uri:"https://cdn-icons-png.flaticon.com/128/3095/3095583.png"

}} />
      </TouchableOpacity>

      </View>

      
    )
  }

  const styles=StyleSheet.create({

    container:{
        flexDirection:"row",
        justifyContent:"space-even",

        
    },

    textStyle:{
        textTransform:"uppercase",
        marginBottom:30,


    },

    buttonStyle:{
      padding:10,
    },




    iconStyle:{
        width:"100%",
        height:30,
        aspectRatio:1


    },

  })



  export default Menu;

