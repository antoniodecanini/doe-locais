import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

export default function SignUp() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnAccount}>
          <FontAwesome name="user" style={styles.iconUser}></FontAwesome>
        </TouchableOpacity>

        <Text style={styles.txtHeader}>Locais disponíveis</Text>
      </View>

      <View style={styles.content}></View>
    </KeyboardAvoidingView>
  );
}
