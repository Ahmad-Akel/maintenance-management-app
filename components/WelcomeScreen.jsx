import React from "react";
import { ImageBackground, Text, View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
const WelcomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/mainbackground.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text>To maintain customer problems</Text>
        </View>
      </ImageBackground>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
