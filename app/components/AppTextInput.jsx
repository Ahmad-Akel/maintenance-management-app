import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
export default function AppTextInput({icon,...otherProps}) {
    return (
        <View style={styles.container}>
           <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.medium}/>
           <TextInput style={defaultStyles.text}{...otherProps}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       backgroundColor:colors.light,
       borderRadius:25,
       flexDirection:"row",
       width:"100%",
       padding:12,
       marginVertical:0,
       marginTop:30,
    },
    
    icon:{
        marginRight:10,
    }
})
