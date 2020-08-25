import React, { useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";
import LocationCard from "../../components/locationCard";

export default function SignUp() {
  useEffect(() => {
    // Carregar locais disponíveis
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnAccount}>
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
