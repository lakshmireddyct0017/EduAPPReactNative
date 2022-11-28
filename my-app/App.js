import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform,Text } from "react-native";

import React from 'react'

const App = () => {
  return (
    <Text style={styles.textStyle}>
      Hello
    </Text>
  )
}

const styles=StyleSheet.create({

   
  textStyle:{
    color:"red"
  }
})

export default App;
