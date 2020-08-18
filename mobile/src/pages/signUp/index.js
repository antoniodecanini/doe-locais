import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PasswordInputText from "react-native-hide-show-password-input";

import styles from "./styles";
import api from "../../services/api";

export default function SignUp() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp() {
    const response = await api
      .post("/users/create", {
        firstName: name,
        lastName: surname,
        email,
        phone: whatsapp,
        password,
      })
      .catch((err) => console.log(err));

    console.log(response);
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.signUpFirst}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.btnBack} onPress={navigation.goBack}>
            <FontAwesome
              name="chevron-left"
              style={styles.iconBack}
            ></FontAwesome>
          </TouchableOpacity>

          <Text style={styles.txtHeader}>Crie sua conta!</Text>
        </View>

        <View style={styles.signUpContainer}>
          <View>
            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Nome</Text>
              <TextInput
                style={styles.signUpInputs}
                placeholder="João"
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>

            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Sobrenome</Text>
              <TextInput
                style={styles.signUpInputs}
                placeholder="Silva"
                value={surname}
                onChangeText={(text) => setSurname(text)}
              />
            </View>

            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Email</Text>
              <TextInput
                style={styles.signUpInputs}
                placeholder="exemplo@exemplo.com"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Whatsapp</Text>
              <TextInput
                style={styles.signUpInputs}
                placeholder="(99) 99999-9999"
                value={whatsapp}
                onChangeText={(text) => setWhatsapp(text)}
              />
            </View>

            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Senha</Text>
              <TextInput
                style={styles.signUpInputs}
                placeholder="********"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.btnSignUp} onPress={handleSignUp}>
        <Text style={styles.btnSignUpText}>Criar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
