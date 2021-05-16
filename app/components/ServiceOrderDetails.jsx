import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import ListItems from "./ListItems";
const ServiceOrderDetails = (props) => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/service1.jpg")} />
      <Text style={styles.title}>Service 1</Text>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={styles.details}>name: Ahmad</Text>
          <Text style={styles.details}>order number: 2</Text>
          <Text style={styles.details}>Location: Portugal</Text>
        </View>
        <View style={{ marginLeft: 80 }}>
          <Text style={styles.details}>date: 1.3.2021 </Text>
          <Text style={styles.details}>Time: 14:30 </Text>
        </View>
      </View>
      <View style={styles.userContainer}>
        <ListItems
          image={require("../assets/jack.jpg")}
          title="Jack Smith"
          subTitle="5 Listing"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
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
  userContainer: {
    marginVertical: 30,
  },
});
export default ServiceOrderDetails;

// This component display the service order details, with different folders, namely for components :
//  1-ServiceOrderData
//  2-PersonContact
//  3-ServiceAddress
//  4-Submit The FinalReport
