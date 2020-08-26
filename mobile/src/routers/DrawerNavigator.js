import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Logout from "../components/logout";
import MyAccount from "../pages/myAccount";
import Locals from "../pages/locals";

const { Navigator, Screen } = createDrawerNavigator();

export default function Drawer() {
  return (
    <Navigator initialRouteName="Locals">
      <Screen name="Locals" component={Locals} />
      <Screen name="MyAccount" component={MyAccount} />
      <Screen name="Logout" component={Logout} />
    </Navigator>
  );
}
