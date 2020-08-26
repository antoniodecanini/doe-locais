import React from "react";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

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

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList
          {...props}
          labelStyle={{
            color: "#ea638c",
            fontWeight: "bold",
            fontSize: 20,
          }}
        />
        <DrawerItem
          label="Sair"
          onPress={() => handleLogout()}
          labelStyle={{
            color: "#ea638c",
            fontWeight: "bold",
            fontSize: 20,
          }}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Locals"
      drawerStyle={{
        backgroundColor: "#fff5fa",
        width: "65%",
        borderRadius: 5,
      }}
      drawerContentOptions={{
        activeBackgroundColor: "#fff",
      }}
    >
      <Screen
        name="Locals"
        component={Locals}
        options={{
          drawerLabel: "Locais Disponíveis",
        }}
      />
      <Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          drawerLabel: "Minha conta",
        }}
      />
    </Navigator>
  );
}
