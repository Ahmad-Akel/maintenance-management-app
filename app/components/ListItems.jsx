import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import Swipeable from 'react-native-gesture-handler/Swipeable';
const ListItems = ({ image, title, subTitle,IconComponent,onPress,renderRightActions}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={colors.light} onPress={onPress} >
    <View style={styles.container}>
      {IconComponent}
     {image&& <Image style={styles.image} source={image} />}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
       {subTitle&& <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
    </View>
    </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
   padding:15,
   backgroundColor:colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
   textContainer: {
    marginLeft: 10,
    justifyContent:"center",
   },
  title: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    color: colors.medium,
  },
});
export default ListItems;
