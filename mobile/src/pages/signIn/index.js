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
        <Image source={logoImg} />
      </View>

      <View style={styles.containerLogin}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={(password) => setPassword(password)}
        />

        <TouchableOpacity onPress={handleLogin} style={styles.btnSubmit}>
          <Text style={styles.btnSubmitText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignUp} style={styles.btnRegister}>
          <Text style={styles.btnRegisterText}>Cadastre-se!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLocals} style={styles.btnLocals}>
          <Text style={styles.btnLocalsText}>Ver locais disponíveis</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
