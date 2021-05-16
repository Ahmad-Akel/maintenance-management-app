import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
const ListItems = ({ image, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    marginLeft: 7,
  },
  //   textContainer: {
  //     marginTop: 15,
  //   },
  title: {
    marginBottom: 5,
    fontSize: 17,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 15,
    color: colors.medium,
  },
});
export default ListItems;
