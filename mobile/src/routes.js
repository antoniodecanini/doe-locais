import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Locals from "./pages/locals";
import ForgotPassword from "./pages/forgotPassword";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="SignIn" component={SignIn} />
        <AppStack.Screen name="SignUp" component={SignUp} />
        <AppStack.Screen name="Locals" component={Locals} />
        <AppStack.Screen name="ForgotPassword" component={ForgotPassword} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
