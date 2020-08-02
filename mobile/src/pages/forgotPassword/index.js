import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo.png";
import styles from "./styles";
import api from "../../services/api";
import { login } from "../../services/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  async function handleLogin() {
    const response = await api
      .post("/login", { email, password })
      .catch((error) => console.log(error));
    const { id, JWT } = response.data;

    login(JSON.stringify(JWT));
  }

  async function handleSignUp() {
    navigation.navigate("SignUp");
  }

  async function handleLocals() {
    navigation.navigate("Locals");
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnBack} onPress={navigation.goBack}>
          <FontAwesome
            name="chevron-left"
            style={styles.iconBack}
          ></FontAwesome>
        </TouchableOpacity>

        <Text style={styles.txtHeader}>Recuperar senha!</Text>
      </View>

      <View style={styles.containerRecover}>
        <Text style={styles.txtRecover}>Digite o email cadastrado.</Text>

        <TextInput
          style={styles.input}
          placeholder="exemplo@exemplo.com"
          autoCorrect={false}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
        />

        <TouchableOpacity onPress={handleLogin} style={styles.btnSubmit}>
          <Text style={styles.btnSubmitText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpTxt}>Não tem uma conta? | </Text>
        <TouchableOpacity onPress={handleSignUp} style={styles.btnRegister}>
          <Text style={styles.btnRegisterText}>CADASTRE-SE</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
