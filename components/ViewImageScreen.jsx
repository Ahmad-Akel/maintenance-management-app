import React from "react";
import { StyleSheet, Image, View, Button, Alert, Platform } from "react-native";
const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.delteIcon}></View>
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
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  delteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 30,
  },
});
export default ViewImageScreen;
