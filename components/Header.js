import { View, Text,StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome


export default function Header() {
  return (
    <View style={styles.container}>
     <View>

  
     <View>
<Text style={{color:Colors.white}}>Welcome,</Text>
<Text style={{color:Colors.white, fontSize:20}}>Chelimela Nikhil</Text>

     </View>
     </View>
     <View style={styles.searchbarcontainer}>
        <TextInput placeholder='Search Employee'
        style={styles.textInput}/>
        <FontAwesome name="search" 
        style={styles.searchbutton} size={24} color={Colors.primary} />
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.primary,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25

    },
  userImage:{
    width:45,
    height:45,

  },
  searchbarcontainer:{
marginTop:15,
display:'flex',
flexDirection:'row',
gap:10,
marginBottom:10
  },
  searchbutton:{
backgroundColor:Colors.white,
padding:10,
borderRadius:8
  },
  textInput:{
    padding:7,
    paddingHorizontal:16,
    backgroundColor:Colors.white,
    borderRadius:8,
    width:'85%',
    fontSize:16
  }
})