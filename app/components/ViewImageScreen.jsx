import React from "react";
import { StyleSheet, Image, View, Button, Alert, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.delteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/pen.jpg")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  delteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});
export default ViewImageScreen;
