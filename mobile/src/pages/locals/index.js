import React, { useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import LocationCard from "../../components/locationCard";

export default function SignUp() {
  const navigation = useNavigation();

  useEffect(() => {
    // Carregar locais disponíveis
  }, []);

  function openDrawer() {
    navigation.toggleDrawer();
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnAccount} onPress={openDrawer}>
          <FontAwesome name="user" style={styles.iconUser}></FontAwesome>
        </TouchableOpacity>

        <Text style={styles.txtHeader}>Locais disponíveis</Text>
      </View>

      <View style={styles.content}>
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </View>
    </KeyboardAvoidingView>
  );
}
