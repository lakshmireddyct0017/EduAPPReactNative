import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts,AlegreyaSans_100Thin,
  AlegreyaSans_100Thin_Italic,
  AlegreyaSans_300Light,
  AlegreyaSans_300Light_Italic,
  AlegreyaSans_400Regular,
  AlegreyaSssssans_400Regular_Italic,
  AlegreyaSans_500Medium,
  AlegreyaSans_500Medium_Italic,
  AlegreyaSans_700Bold } from '@expo-google-fonts/alegreya-sans';


  import { AlfaSlabOne_400Regular
  } from '@expo-google-fonts/alfa-slab-one';

  import { Amethysta_400Regular
  } from '@expo-google-fonts/amethysta'

import {StatusBar} from "expo-status-bar";
import { Platform,Text,StyleSheet,View } from "react-native";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import UserData from "./src/screens/UserData";
import AppLoading from "expo-app-loading";
import CourseDetails from "./src/screens/CourseDetails";
const App = () => {

  const description="Best edu app on plasytore and ios";
  const Stack=createNativeStackNavigator();



  let[fontsLoader]=useFonts({
    AlegreyaSans_100Thin_Italic,
  AlegreyaSans_300Light,
  AlegreyaSans_300Light_Italic,
  AlegreyaSans_400Regular,
  AlfaSlabOne_400Regular,
  Amethysta_400Regular


  });

  if(!fontsLoader){
    <AppLoading/>
  }
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home"
      options={{headerShown:false}}>
        {(props)=><Home {...props} channelName={"eduAPP"} />}
      </Stack.Screen>
      <Stack.Screen name="Course" component={Course}
      options={{
        headerTitleStyle:{
          fontSize:20,
          fontFamily:"AlegreyaSans_300Light"
        },
        headerTitle:"Courses",
        headerTitleAlign:"center",
      }} />
     
      <Stack.Screen name="Student" component={UserData} 
         options={{
        headerTitleStyle:{
          fontSize:20,
          fontFamily:"AlegreyaSans_300Light"

        },
        headerTitleAlign:"center",
      }}
      />

      <Stack.Screen name="About" component={About}
       options={{
        headerTitleStyle:{
          fontSize:20,
          fontFamily:"AlegreyaSans_300Light"
        },
        headerTitleAlign:"center",
      }} />
      <Stack.Screen name="Contact" component={Contact} 
         options={{
        headerTitleStyle:{
          fontSize:20,
        },
        headerTitleAlign:"center",
      }}
      />

    </Stack.Navigator>

    </NavigationContainer>
    
  
  )
}



export default App;
