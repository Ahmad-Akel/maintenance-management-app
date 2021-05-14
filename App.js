import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ViewImageScreen from "./app/components/ViewImageScreen";
import WelcomeScreen from "./app/components/WelcomeScreen";
import AppButton from "./app/components/AppButton";
import ServiceOrder from "./app/components/ServiceOrder";
export default function App() {
  return (
    <ViewImageScreen />
    // <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
    //   {/* <ServiceOrder title="Movile Maintenence" customer identification="Ahmad" location="Portugal" date="1.7.2021" time="25"/> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
