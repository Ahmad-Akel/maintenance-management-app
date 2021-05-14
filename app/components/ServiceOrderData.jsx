import React from "react";
import { StyleSheet, Text, View } from "react-native";
const ServiceOrderData = () => {
  return <Text>Service Order Data</Text>;
};

export default ServiceOrderData;

// This component conatin the main data of the service order (order number, customer identification,
// location and expected date/time for the intervention), where the operator can change
// the state of the service order to: start of the trip to fulfil the service order, arrival at the
// customer, start of the intervention and end of the intervention. Only one option must
// be available at each moment and whenever the state change, the day and time (ideally
// the GPS location) must be recorded.
