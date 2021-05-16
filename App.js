import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ViewImageScreen from "./app/components/ViewImageScreen";
import WelcomeScreen from "./app/components/WelcomeScreen";
import AppButton from "./app/components/AppButton";
import ServiceOrder from "./app/components/ServiceOrder";
import ServiceOrderDetails from "./app/components/ServiceOrderDetails";
export default function App() {
  return <ServiceOrderDetails />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
