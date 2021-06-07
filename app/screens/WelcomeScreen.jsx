import React from "react";
import { ImageBackground, Text, View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
const WelcomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        blurRadius={1.5}
        style={styles.background}
        source={require("../assets/mainbackground.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text style={styles.tagline}>To maintain customer problems</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title="Login" onPress={() => console.log("tapped")} />
          <AppButton
            title="Register"
            onPress={() => console.log("tapped")}
            color="secondary"
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
});

export default WelcomeScreen;
