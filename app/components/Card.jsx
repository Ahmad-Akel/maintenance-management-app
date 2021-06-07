import React from 'react'
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback} from 'react-native'
import colors from "../config/colors";
export default function Card({title,subTitle,image,onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailscontainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
           
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        marginBottom:20,
        backgroundColor:colors.white,
        overflow:"hidden",
    },
    image:{
        width:"100%",
        height:200
    },
    detailscontainer:{
        padding:20,
    },
    title:{
        marginBottom:7
    },
    subTitle:{
     color:colors.secondary,
     fontWeight:'bold',
    }
})
