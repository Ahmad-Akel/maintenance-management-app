import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
export default function ServicesScreen() {
    const services=[
        {
          id:1,
          title:"General Services",
          price:250,
          image:require("../assets/generalservices.jpg")
        },
        {
            id:2,
            title:"Technical Services",
            price:25,
            image:require("../assets/technicalservices.jpg")
          },
          {
            id:3,
            title:"Customer Services",
            price:100,
            image:require("../assets/customerservices.jpg")
          },
    ]
    
    return (
      <Screen style={styles.screen}>
          <FlatList
           data={services}
            keyExtractor={service=>service.id.toString()} 
            renderItem={({item})=>
            <Card 
            title={item.title} 
            subTitle={"$"+item.price}
            image={item.image}
            />}/>
      </Screen>
    )
}

const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light,
    }
})
