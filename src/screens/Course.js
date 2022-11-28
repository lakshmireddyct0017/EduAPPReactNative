import React, { Component } from 'react'
import { FlatList,Text, StyleSheet, View,Image,TouchableOpacity } from 'react-native'
import Courses from "./api/CourseAPI";

const Course=({navigation})=>{
  const courseCard=({item})=>{
    return (<View style={styles.maincontainer}>
    <View style={styles.courseContainer}>

    <View>
    <Image style={styles.cardImage}
    source={item.image}
    resizeMode="contain"
    />

    </View>
    <Text style={styles.mainHeader}>
    {item.title}


    </Text>
    <Text style={styles.description}>
    {item.decsription}


    </Text>





<View style={styles.buttonContainer}>
<TouchableOpacity style={styles.buttonStyle}
onPress={(()=>navigation.navigate("CourseDetails"),
{
    courseId:item.id,
})}
>
    <Text style={styles.buttonText}>



    </Text>
    </TouchableOpacity>
</View>
    </View>

    </View>);

  }
    return (
      <FlatList data={Courses} 
      keyExtractor={(item)=>item.id}
      renderItem={courseCard}/>
    )
  
}

const styles = StyleSheet.create({
    cardImage:
    {
        width:"100%",
        height:undefined,
        aspectRatio:1,
    },
    maincontainer:{
        paddingHorizontal:20,

    },
    courseContainer:{
        padding:30,
        backgroundColor:"white",
        textalign:"center",
        borderRadius:5,
        shadowColor:"grey",
        shadowOffset:{width:0,height:0},
        shadowOPacity:0.5,
        shadowRadius:8,
        elevation:8,
        marginVertical:30,
    },
    mainHeader:{
        fonstSize:22,
        color:"blue",
        textTransform:"uppercase",
        fontWeight:500,
        marginBottom:12,
        textAlign:"center",
        fontFamily:"AlegreyaSans_300Light"

    },

    description:{
        textAlign:"center",
        fontFamily:"AlegreyaSans_300Light",
        paddingBottom:2,
        fontSize:20,

    },

    buttonContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },

    buttonStyle:{
        backgroundColor:"blue",
        justifyContent:"center",
        alignItems:"center",

    },
    buttonText:{
        fontSize:20,
        color:"blue",
        fontFamily:"AlegreyaSans_300Light",
        textTransform:"uppercase"
    }

});

export default Course;
