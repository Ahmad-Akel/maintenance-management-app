import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ListItems from '../components/lists/ListItems';
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from '../components/Icon';
import ListItemSeperator from "../components/lists/ListItemSeperator";
export default function AccountScreen() {
    const menuItems=[
        {
          title:"My Listing",
          icon:{
              name:"format-list-bulleted",
              backgroundColor:colors.primary,
          }
        },
        {
            title:"My Messagess",
            icon:{
                name:"email",
                backgroundColor:colors.secondary,
            }
          },
    ]
    return (
       
        <Screen style={styles.screen}>
             <View style={styles.component}>
            <ListItems title="Ahmad Akel" subTitle="ahmad.oudai1999@gmail.com" image={require("../assets/jack.jpg")}/>
            </View>
            <View style={styles.component}>
             <FlatList 
             data={menuItems}
             keyExtractor={menuItem=>menuItem.title}
             ItemSeparatorComponent={ListItemSeperator}
             renderItem={({item})=><ListItems 
             title={item.title}
             IconComponent={
                 <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
             }
             />}
             />
            </View>
            <ListItems title="Log Out" IconComponent={
                <Icon name="logout" backgroundColor="#ffe66d"/>
            }/>
        </Screen>
        
        
    )
}

const styles = StyleSheet.create({
    component:{
        marginVertical:20,
    },
    screen:{
        backgroundColor:colors.light,
    }
})
