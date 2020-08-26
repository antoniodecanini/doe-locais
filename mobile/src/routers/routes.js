import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import ForgotPassword from "../pages/forgotPassword";

import Drawer from "./DrawerNavigator";

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="Drawer" component={Drawer} />
      </Navigator>
    </NavigationContainer>
  );
}
