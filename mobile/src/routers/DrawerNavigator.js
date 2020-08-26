import React from "react";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

import Logout from "../components/logout";
import MyAccount from "../pages/myAccount";
import Locals from "../pages/locals";

import { logout } from "../services/auth";

const { Navigator, Screen } = createDrawerNavigator();

export default function Drawer() {
  const navigation = useNavigation();

  function handleLogout() {
    logout();

    navigation.navigate("SignIn");
  }

  function CustomDrawerContent() {
    return (
      <DrawerContentScrollView>
        <DrawerItem label="Sair" onPress={() => handleLogout()} />
      </DrawerContentScrollView>
    );
  }

  return (
    <Navigator
      drawerContent={() => <CustomDrawerContent />}
      initialRouteName="Locals"
      drawerStyle={{
        backgroundColor: "#fff5fa",
        width: "65%",
        borderRadius: 5,
      }}
    >
      <Screen
        name="Locals"
        component={Locals}
        options={{
          drawerLabel: "Locais Disponiveis",
        }}
      />
      <Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          drawerLabel: "Minha conta",
        }}
      />
      <Screen
        name="Logout"
        component={Logout}
        options={{
          drawerLabel: "Sair",
        }}
      />
    </Navigator>
  );
}
