import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
const ServiceOrder = ({ title, name, location, date, time, image }) => {
  return (
    <View style={styles.serviceOrder}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={styles.details}>name: {name}</Text>
          <Text style={styles.details}>location: {location}</Text>
        </View>
        <View style={{ marginLeft: 80 }}>
          <Text style={styles.details}>date: {date}</Text>
          <Text style={styles.details}>Time: {time}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  serviceOrder: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginTop: 5,
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
  },
  details: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 10,
  },
});
export default ServiceOrder;
// This component display the service order in execution, with customer identification, location, date/time
// agreed for the intervention and execution status (data from the back-office). This screen should
// contain filters based on the state, day and customer.
