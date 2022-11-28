import {StyleSheet,Text,View,Image,ImageBackground} from "react-native";
import React from "react";
import Menu from "./components/Menu";

const Home = (props) => {
  const description =
    "Learn from the best faculty and get acces to the best study material,quizzes,tests only on eduAPP ";

  return (
    <ImageBackground source={{
      uri:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJUAdwMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAADBAUAAgYBB//EADYQAAIBAwIEBAQFAwQDAAAAAAECAwAEERIhBRMxQSJRYXEygaHwFCOR0eEGscEkM0LxFUNS/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQIDAAT/xAAmEQADAAICAgEDBQEAAAAAAAAAAQIRIQMSMUFRIjJhBBNxgaFC/9oADAMBAAIRAxEAPwD5hAQ7mQjbHU16p0g4bdm8I8qFGg0gHoW32+VMGAq/TK+p6H/qgMw0BzETGoBbwjbuPsVS4VcciFiAram66dhUmMnlYxgqxOc43P8A1VSxj1LAFTXsST2P3g0QFZigy7DUcgqc9Djt5dRt701apczTM6x/lIcaM4xkdz54oNlGgYl3WQxZIzhQPv61UtomCoDlFLaioPUmsAs26NGoyR0Hhx/mjFvLatLaGaYFwpVCcAnptTP4OXsKxjyGaTxAEnwnG/eotzaTS27Xk80bvGMBlHiONjk/r0qxGskb7KdQ6Cpf9SzTpawflwrsdbKCcjpjGNu231rGOE4rLLcSkOgRYzsBuQfXzpURW7QO5jZ22APRRjfofnVSf/U3RhJEYj+FWPXA7/MH9a2ZYIorjnxLIJCChU5C9c4Py6UGMiBATHcG20RmBiTpdgDnGx615eWgjlRYlyJTtg/9Ue6aRZwFDsHUZCjfA7/WgyFykXMYDRnxgk5zuPQdKk8IrLbBXeJLctEzFhgAAE5/aspp5JG0OoUBtxvnc9civKhN1Kwi9zx080xWMABVJUjoN+lMMzJbkKuxOdwM5/x/FLwrrYRscFTtk/DnGaMriQkqyjOFJzt711NnMkeQpr0g/CGGrA61Utrlo5DgZUbk46Db6VPjCRKVJIfbSMdfT9M1R0xr+K8ZJZMKQceRx69fpRyK5KnCMvHEqbl5Mux3JwQf7V1FosSI0s+XdtTsR1PkP5rkLCblTpGpGF0gORsWzk4+ldfw2Fp4FJLrEPE2F8cp89+lEU6XhAd4lMo2UAKoXr+1PXUV3j/SiIeayoSPlgivLCaOKBURWXz1dT706blyuEG3eiA4e441cWt3y35N2EbSdGxJ9Pbb+ai8T4it7JPEitG2k6gxOf2JzXY3i2vDZmZ7GN2Kl0bRq0+5J23riOILPHf3ksfLZkYuHkIIOR6Dr+1BhXkjcxoyXaWbfIckDv5HtQGZGkUospY5AQsMeefSqtm0Swk3T28RYeIujHTt2HY1N4qIbic/hymhtlUjYVOsvwWnHsk3DAyrFMxGGAAYbDPXP350W4gEEHLzE6EHU53Ye2/70K9inwHMetWGzYzgfrSCRlviMrJ1GTg58uu9Tpqpwx5lzWUNqkPgwgLMvSNsGsoOplSNJedGANtRA2r2o9WXygUIGDpIySe1Hw7B2DeIsMjPXPf1/mhohRnjOVOcEls/pTSR4QsNQYDwgbY26+1dbOSVk9tRGS2sA6dwT0FMzsuCwxuuRg+4pWLYFV2JG/vv0+lNSR8wjYeEDp2oD40UuFQqOXKzfmyNsB2Br6FwaAKytIyAYwItXbbc9hgffavn8EhEi6VxowOnTzrreFzzaBMhXAOnJ31Ej6/xTS8snUYWTv4rW2KBkkBDbjag38osIA6I8rE4AVT9dthW3D+IW9w6RNpRyowCw/xtRuJcQt+HxKXU5dSVO5UkdiRTkjjeNRT8UkhlLNEMYjRFGoZ2Odv0JxUHi3D2kihhMujlAlgHILjscHtvXScW/qZWjBij/CxqdTBcBgcdCc+tc9xHiKXEscyQhjhiZMA61z9T23oMK8nNTRiJ004cj49Snr7UnFK8bsYgsfMUqNgR16kfLb3qlxAJ+ILRuAz5L6jjy299zUyKFWOl/Cd8EtupqF8ik6o4nRPmMkd48Ucra+uksAoA3AIrZpoTFq/92SSABgH09N+9MXFqrAszM82Msw2II7fSp+PzI5cOzL11AYz7+VJWLQ6zxtr5CrM5UM8QLgY8RwflWUGa3mLc0uMEbbbYr2lUw/YXXJ8G851TmQpgEagPQUWGRmMjMTlhpxvsMD9jQYyrwRhiFYZ2HcUSPTyZAS2o5wB39/vyrpaOaWEgCsxOvBHke2f4+tOK681SWK46YpZrXGBqOSuWPQY/TNMookPXC4wNs0rZWV6G7MiU6Sukjfz+dX+HTaNGc7jGwxXPcOiVyzLIMnpk4J38q6bh8Cc3UowNyq/fpUatTRaYdRg6VCJ41KkxFYgoK9vLH61DvOIXlqCoDqoJH5p1Z3I28v71vrAk5TltKn4deBSXFZIo5mRAcsoDK3bYbjJzXT20cXR9hOOMTSAuDjPnpG59vTzoF4hhug0JwV31E9DR4bdZkeIk7geLJB60jcIkcxWZXCHqWGc4962TdWti/E7iJZcSYm0rnUuV9+vWkIiWUlVDF9vEDgY9qJxCRXwqncbZxvil0VSV5NxHqXc7MBjvv3Pp+1QpHTL1lBmkBQFYgPEEbBLN8h8qSfQhyylozgnIA9e/+aZnliYqFaND35S4GcefX6UKNfxD4Ykr38zRiceBbrPlmkN5znISN0i76nwCf81lN/h0D50HTpwV7H9q8rLhz4M+b52RYyy6VkYjA2bpTjNryMDB6DP36UrKdKmJyWKkhWzt1/ej26PMgCKxJ28K757bfMVXRFeR+NmcEhdRI2B7Yotkundkzg779/X77UoJXZWUAsM6sAd8bAU5bRMxgcnSzZ1ZyCfWpsumUogsc2ooAdgcjv8AY+tWODuxnVtI8QIby/SomiR5O4RBke23fFVeDzOJVWQBTggaT1J+8Z/eoWsovNYY/FCbu75C7O3/ACAG3vQeM8KaCbnTztJnYNnt+lVP6V5U15MZWQMMJvjp0+dUf6qgg/8AFShsB2wAz9ATtvS8nJ1+k3HxJrscdHcpCpkUk7YzjpSDyLMDknT5g7Ua4kKsSoZT1Ge4pSITXYRIV8RONWNsV0yuy7I5afV9WTeKtHrHK+EY3zufeiWKNq5kLkOcA4OnTnzz/inG4PJbyg3OylviVugojwpbSDBBYKSBuST5HHSn65WBO/s8PDj1lySwBZicj7/ehchIVkkcCMg6QgPlTVzcO9unKUYbctqyUIO+PSpzThSI9RIYfATnBHemnQKedhZ30MrjTgqM5O1ZU17gow3B23GelZTkycsBccvLBhnG+QQcVSt3a0ePksHKrqXH9v0qX+N+IZz7UzbzSs+nwFsYJY7dKRoZU2XYLeKVlAOASN8AdO2aqz2aEqYwo2UCNegxtnNctG1xGFZW0jONLdV7+1U4Lm7nbQitIT2TrnG/3v7VN9S0qy/aCEOxd1TIIODsK0kNtCCEdNSnPxdKkpwy5cYd2JBO+nr5436da3jsIMs09wWRVzqK42H1G/yqbmaRVO15K/BuIw294JoITI7bMqjJVvP08q84/wAQur665Y5kaFAWg1jJIPWlQ0WkpFzOxbTtt5+ff19KZfh1pcCS5dNWlBpIfUWB74yD88U0wl6Fqm1jsQL+6igK81X1Z6P7UdOLgaWjcg6d8HbHtVR4YZVwiR6GcqpMW56dN6BcwpCQzxGODAUyL0G3ZgMfXvVFWFhIlXHl5bFJuLwRRagxYj/5pQcRhkSU5KsR3O5o89nHpKKvi0gsxXGB77/tSU1uiKGSNRg76DnJoq/wb9r8hY723Eehi4LDUe+5qXNOOb4nDMW2cH7+xTLoWZ4yhyNgo6jPlk9D54pN4mjDYU9cAKM6/vej2F6HjXCFG1YwTvtisrWS1BUZJAIz8Ow/Wso5Ecs3PCWWZQkbqJc6X7Edvaj24EsYSeXluDgjHiwO3lT0nD5QJDckRopGRCxJ9sDFaQSJGqxtFIEJChVQDJpG9bLzO9BIoBGG8AR87am06QR39fv0q3Y3MR0skTXOg6XDbqfXbfz32pbiFu8AEdrDa5I1Oow2r1JNKW9yRCkTgK+rHhOQ36bUv0vQ2anfobdpLzMcZbWVyxO5C5zsR7Upf8khNErGRBpBZPC37n3oFyYrSRpbSaT8QCWZANl9B6VU4VxQLBGtxbMM/wCy0bjZsevT396ZS1tE6tPTD2Etq1qia5GYKVkGgYPqpFPXVsbAQyf+OHLkIwyTYLbdCNztjy+dZYi7sLmO5L2cj7+BOpHofOh8QvJLhk028TOgIYuR16jIPWp9aVdv8Kdpc9cf2LXEBjuZII7a6jk1nTyyrqx7gH51Qt+Az3VqJI4ZbaSVdnuWUa/cDP8Ag+tC4ZLbcttNzCz2/wCZqCEYY9cY7dq2uFtLoJyeJaNJ3UR7+pGa0015HqJwuuyde2l1Y3QhYQF1HVHyQP70hJDgs0lshRiSB1bY+f8ANUr2xZLOR4bnn6+viOW9en0oVjylgX8YYUXyRPE/qd9q2/MvIPpWrWCXC0QnWaSKQBzoVdILAjqPvzogdpL3QI2CFvgEq59MgHb+9brcWkks8dnIrjV8Q6KfUUm1rdw3XPyjFRjMLYwO+1aW6ZrUyv5CSpaiQw4VWzjQ5Y4I8zgD5b9KytZraaKfAnkiLDOE09e+ayimkK5bB291dR28sOxZ21MpwpJ7Z9K14ffyQ3HMljieQ74I6etCt77mLy7lUl1DGceIfOt42jmuFUxwxKvRlO5+dUSJd8LCGuJTT3iRNaB1kYZLN1I747Ype7k5FogiNwV21B0AFPTcWOmOL8vAGNOOlRuI3kzSGMNhD/xByKyWwOtBIWJkRgRFI2w8O2PvvV+14Lc3kSE3tqrr4RgdBXMW0TyzqmrbGxbtXQWVpcwASW7CZANwu+KNPGwRPbSPG4csM4im4kDc6/XSPTIreNuEws5vnZpnYDOogA96nTSyRRSm4icAsdPlmpP5l3MAjoCTgA9BRw3vIG14wWlW6juZbjhsD/hASSpUtn2NdDwg3U9plJ4ghOSunTID5EkUOMXsHAvw/wCPRtAHhh2wKRk4lNDGpTRzcbu5wanS+EV46+WMf1DBdGeOaDMCoTqAA6kddqnRxX2gZjUnoFKdaZPHkcpEzLnH+4BnUfWl7y/nMuqJtLMM6XG2fTyrTLT0G6TnDGrjgiGRPy0tOcPGjYBPsaVveGzWs+I3Vcg5bIOw86DNLxC7wLmVfB4lABqfeHiG2RkN1OevyqmCPYHcShXWN2lPfIWso0ULtlNkbuxavKyRnfwJCVlVnaELIdht2oFpzll17hR1rJbuUuwLD9K1ilxnWc5rKcGq2xhEad9ZfRvsCaOBEIm1gPIGwQKQkYMMVvaEc5ATpUnc0WKhy1eOG4HNB9BXRW/EhYw/lr4W7rU2extzA7ISXAzmo0F1KjFJW8K1zqv3Hr0dGHxrfspcT4k93CYmQDx5GTvU3lmFNTDftmseWOaUFsqvnRLgQiLCuxNdCOd+QvCLmWKb8pidXxAmusFrBdQBplAOOtcXZQThxIoIWrlnfFMpI23rUOXkpajbL8PHL3ekKNYSNdywomBHuGPcVQkikn4VJE0uJVzggUtd8VaB8RMGDdzWh4mUiDPpyTvilattPJRVCWMCnDuLXVuORKdRBwNQ3ox4oGd1m3Y+nSsk/CzTc5G8ZHSk5beKNzzW1Fu4rpl5RzXOGEV4vxPOYv03XsayhwqgfDHK9jWURBRY1ZstuTWgQFyO2aysqceS3IlgyTwMAK9JxvXlZVCIZb2ZI8BqyCATo0jscg9KyspalJaGmm3savIIjEhC427UukY1hR0rKys/tMvuOjs/Db42PyrmOKyyLdOFcgZrKyuX9Ol3bOr9T9qFoy8pGpztTA2wKysrpryc8FS1SPQMoM460XkRybacYrKym9Cf9HjcPiAJyaysrKUpg//"
    }} resizeMode="cover">
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/Rails.png")}
        />

        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 30,
              color: "black",
              marginTop: 0,
            },
          ]}>
          {props.channelName}
        </Text>

        <Text style={styles.pStyle}>{description} </Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}></View>
      </View>
    </View>
    </ImageBackground>
  );
};




const styles=StyleSheet.create({

   
  container:{
    height:'100%',
    display:"flex",
    justifyContent:"space-between",
    paddingHorizontal:20,
    backgroundColor:"#fff",
    
    textAlign:"center",
    
    

  },


  top:{
    
















    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:10,







  },

  mainHeader:{
    fontSize:30,
    color:"blue",
    textTransform:"uppercase",
    fontFamily:"AlfaSlabOne_400Regular",

  },
  pStyle:{
    textAlign:"left",
    fontSize:19,
    color:"blue",
    marginTop:10,
    // paddingBottom:30,
    lineHeight:20,
    fontFamily:"Amethysta_400Regular",

  }
  ,
  lineStyle:{
    margiBottom:20,
    borderWidth:0.5,
    borderColor:"grey",
    display:flex,
    flexDirection:"column"

  },

  headerImage: {
    height:300,
    width: "100%",
    aspectRatio: 1,
    display: "flex",    marginTop: 50,
    borderRadius: 20,
  },




})
export default Home;

