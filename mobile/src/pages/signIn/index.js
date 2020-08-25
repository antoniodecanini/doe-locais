import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,
  Alert,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
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
      .catch((err) => {
        console.log(err);
      });

    if (response) {
      const { id, JWT } = response.data;

      login(JSON.stringify(JWT));

      return navigation.navigate("Locals");
    }

    return Alert.alert("Email ou senha inválidos");
  }

  async function handleForgotPassword() {
    navigation.navigate("ForgotPassword");
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
            onPress={handleForgotPassword}
            style={styles.btnForgotPassword}
          >
            <Text style={styles.btnForgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <RectButton onPress={handleLogin} style={styles.btnSubmit}>
          <Text style={styles.btnSubmitText}>Entrar</Text>
        </RectButton>

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
