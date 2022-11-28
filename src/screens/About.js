import { LinkingContext } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Image,Linking } from 'react-native'




const About=()=> {
 
    return (
      <View styles={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Our aim is to provide affordable learning solutions</Text>

        
        <View>
            <Image
            style={styles.imgStyle}
            source={{uri:"data:image/jpeg;base64,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"}} 

            />
        </View>

        <View styles={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}>About eduAPP</Text>
        <Text style={styles.StyleName}>edu APP is the best app for exam related content,has multiplem categories and 24/7 doubt solving facility</Text>
        </View>


        <Text >Follow Us On Socials</Text>

        <View styles={styles.menuContainer}>
        <TouchableOpacity 
        styles={styles.buttonStyle} 
        onPress={()=>Linking.openURL("https://www.youtube.com/")} >

<Image
            style={styles.iconStyle}
            source={{uri:"data:image/png;base64,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"}} 

            />




        </TouchableOpacity>

        <TouchableOpacity 
        styles={styles.buttonStyle} 
        onPress={()=>Linking.openURL("https://www.youtube.com/")} >

<Image
            style={styles.iconStyle}
            source={{uri:"https://cdn-icons-png.flaticon.com/128/6422/6422200.png"}} 

            />

        </TouchableOpacity>

        <TouchableOpacity 
        styles={styles.buttonStyle} 
        onPress={()=>Linking.openURL("https://www.youtube.com/")} >
        <Image
            style={styles.iconStyle}
            source={{uri:"https://www.flaticon.com/free-icon-font/facebook_6422199"}} 

            />

        </TouchableOpacity>

        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    aboutContainer: {
      display: "flex",
      flexDirection:"row",
      alignItems: "center",
    },
  
    imgStyle: {
      width: 150,
      height: 150,
      borderRadius: 100,
      marginLeft:125,
    },
    mainHeader: {
      fontSize: 18,
      color: "#344055",
      textTransform: "captialise",
      fontWeight: "500",
      marginTop: 50,
      marginBottom: 10,
      marginLeft:30,
      fontFamily: "AlegreyaSans_400Bold",
    },
    paraStyle: {
      fontSize: 18,
      color: "#7d7d7d",
      paddingBottom: 30,
    },
    aboutLayout: {
      backgroundColor: "#4c5dab",
      paddingHorizontal: 30,
      marginVertical: 30,
    },
    aboutSubHeader: {
      fontSize: 18,
      color: "#fff",
      textTransform: "uppercase",
      fontWeight: "500",
      marginVertical: 15,
      fontFamily: "AlegreyaSans_700Bold",
      alignSelf: "center",
    },
    aboutPara: {
      color: "#fff",
    },
    menuContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  
    iconStyle: {
      width: "100%",
      height: 50,
      aspectRatio: 1,
    },
    iconStyle: {
      // display:"flex",
      flexDirection:"row",
      width: 40,
      height: 40,
      borderRadius: 100,
      margin:10,
    },
  });

export default About;