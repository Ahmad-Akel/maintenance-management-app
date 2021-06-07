import React,{useState} from "react";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import ListItems from "../components/lists/ListItems";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/jack.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/jack.jpg"),
  },
];

export default function MessagesScreen() {
    const[messages,setMessages]=useState(initialMessages);
    const[refreshing,setRefreshing]=useState(false);
    const handleDelete=message=>{
        setMessages(messages.filter(m=>m.id !==message.id));
    }
  return (
      <Screen>
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItems
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={()=>console.log("Item selected",item)}
          renderRightActions={()=>
          <ListItemDeleteAction onPress={()=>handleDelete(item)}/>}
        />
      )}
      ItemSeparatorComponent={ListItemSeperator}
      refreshing={refreshing}
      onRefresh={()=>{
          setMessages([
            {
                id: 2,
                title: "T2",
                description: "D2",
                image: require("../assets/jack.jpg"),
              },
          ])
      }}
    />
    </Screen>
  );
}

const styles = StyleSheet.create({
  
});
