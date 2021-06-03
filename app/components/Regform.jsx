import React from 'react';
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native';

const Regform = (regform,textinput,button,btntext) => {
    return(
        <View style={styles.regform}>
<Text style={styles.header}>Registration</Text>
<TextInput style={styles.textinput}placeholder="Your First Name"/>
<TextInput style={styles.textinput}placeholder="Your Last Name"/>
<TextInput style={styles.textinput}placeholder="Your email"/>
<TextInput style={styles.textinput}placeholder="Password" secureTextEntry={true}/>
  <TouchableOpacity style={styles.button}>
      <Text style={styles.btntext}>Sign up</Text>
  </TouchableOpacity>
  
  
  </View>


    );
  };
  const styles = StyleSheet.create({
    regform: {
      alignSelf:'stretch',
      
    }
      ,
      header:{
          fontsize:24,
          fontWeight:'bold',
          color:'black',
          paddingBottom:10,
          marginBottomColor:40,
          borderBottomColor:'#199187',
          borderBottomWidth:1

      },
      textinput:{
          alignSelf:'stretch',
          height:30,
          marginTop:30,
          marginBottom:10,
          color:'black',
          borderBottomColor:'#f8f8f8',
          borderBottomWidth:2

      },
      button:{
          alignSelf:'stretch',
          alignItems:'center',
          padding:20,
          backgroundColor:'#59cbbd',
          marginTop:20,
      },
    btntext:{
        color:'#fff',
        fontWeight:'bold',
        fontsize:'24'
    }
  });

  
  export default Regform;