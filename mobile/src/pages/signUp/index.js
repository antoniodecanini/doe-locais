import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Crie sua conta!</Text>
      </View>

      <View style={styles.signUp}>
        <TextInput style={styles.inputs} placeholder="Nome" />

        <TextInput style={styles.inputs} placeholder="Sobrenome" />

        <TextInput style={styles.inputs} placeholder="Email" />

        <TextInput style={styles.inputs} placeholder="Whatsapp" />

        <TextInput style={styles.inputs} placeholder="Senha" />

        <TouchableOpacity style={styles.btnSignUp} onPress={() => alert("ola")}>
          <Text style={styles.btnSignUpText}>Criar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
