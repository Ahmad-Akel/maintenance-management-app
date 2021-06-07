import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Screen from "../components/Screen";
import {AppForm,AppFormField,SubmitButton} from "../components/forms/index";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
export default function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <React.Fragment>
          <AppFormField
            icon="email"
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="email"
          />
          <AppFormField
            autoCapitalize="none"
            icon="lock"
            name="password"
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry
          />
          <SubmitButton title="Login" />
        </React.Fragment>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 120,
    width: 120,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 30,
  },
  container: {
    paddingTop: 10,
  },
});
