import { View, Text, FlatList, StyleSheet, Image,TouchableOpacity,Linking} from "react-native";
import React, { useState, useEffect } from "react";

const UserData = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=c40eed2afbd8473ea4091d0af0341ae5"
      );
      const realData = await response.json();
      setMyData(realData.articles);
      setIsLoaded(false);
      // console.log(realData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getUserData(), []);

  // render the students cards
  const showUserData = ({ item }) => {
    return (
    
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} 
          
          source={{ uri: item.urlToImage }} />
        </View>

        <View>
          <View style={styles.newsContainer}>
          <TouchableOpacity 
        styles={styles.buttonStyle} 
        onPress={()=>Linking.openURL(item.url)} >
        <Text style={styles.news}>{item.title} </Text>

        </TouchableOpacity>
           
            <Text style={styles.idNumber}>
              {item.source.id}
            </Text>
          </View>

          <View style={styles.mainContain}>
            <Text style={styles.newsItem}> {item.source.name} </Text>
            <Text style={styles.newsItem}>{item.description} </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.mainHeader}>News</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={myData}
        renderItem={showUserData}
        vertical
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    minHeight: "100%",
    paddingVertical: 50,

    margin:20,


    backgroundColor: "blue;",
  },
  card: {
    width:320,
    height: 350,
    backgroundColor: "#fff",
    borderRadius: 10,
    // margin:30,
    marginLeft:30,
    marginRight:30,
    marginBottom:20,
  },
  newsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
    fontFamily: "AlegreyaSans_300Light",
  },
  idNumber: {
    fontSize: 20,
    color: "grey",
    fontFamily: "AlegreyaSans_300Light",
    paddingRight: 10,
  },
  news: {
    fontSize: 15,
    color: "white",
    fontFamily: "AlegreyaSans_300Light",
  },
  mainHeader: {
    fontSize: 30,
    color: "#a18ce5",
    textAlign: "center",
    fontFamily: "AlegreyaSans_300Light",
  },
  imgContainer: {
    padding: 10,
    borderRadius:10,
  },
  imgStyle: {
    width: "100%",
    height: 100,
  },
  mainContain: {
    padding: 10,
    backgroundColor: "white",
    color:"black",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  newsItem: {
    fontSize: 14,
    color: "black",
    marginBottom: 10,
    alignSelf: "flex-start",
    // textTransform:"uppercase",
    fontFamily: "AlegreyaSans_300Light",
  },
});

export default UserData;