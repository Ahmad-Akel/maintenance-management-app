import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ServicesScreen from "../screens/ServicesScreen";
import ServiceOrderDetails from "../components/ServiceOrderDetails";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ServicesScreen} />
    <Stack.Screen name="ListingDetails" component={ServiceOrderDetails} />
  </Stack.Navigator>
);

export default FeedNavigator;
