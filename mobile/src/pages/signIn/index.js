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
        <Image source={logoImg} />
      </View>

      <View style={styles.containerLogin}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={(password) => setPassword(password)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />

        <View style={styles.vwForgotPassword}>
          <TouchableOpacity
            onPress={handleSignUp}
            style={styles.btnForgotPassword}
          >
            <Text style={styles.btnForgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.btnSubmit}>
          <Text style={styles.btnSubmitText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpTxt}>Não tem uma conta? | </Text>
          <TouchableOpacity onPress={handleSignUp} style={styles.btnRegister}>
            <Text style={styles.btnRegisterText}>CADASTRE-SE</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={handleLocals} style={styles.btnLocals}>
        <FontAwesome
          name="share-square-o"
          style={styles.btnLocalIcon}
        ></FontAwesome>
        <Text style={styles.btnLocalsText}>Ver locais disponíveis</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
