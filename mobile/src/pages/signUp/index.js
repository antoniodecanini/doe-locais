import React from "react";
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

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.signUpFirst}>
        <TouchableOpacity style={styles.btnBack} onPress={navigation.goBack}>
          <FontAwesome
            name="chevron-left"
            style={styles.iconBack}
          ></FontAwesome>
        </TouchableOpacity>

        <Text style={styles.txtHeader}>Crie sua conta!</Text>

        <View style={styles.signUpContainer}>
          <View>
            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Nome</Text>
              <TextInput style={styles.signUpInputs} placeholder="João" />
            </View>

            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Sobrenome</Text>
              <TextInput style={styles.signUpInputs} placeholder="Silva" />
            </View>

            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Email</Text>
              <TextInput
                style={styles.signUpInputs}
                placeholder="joaosilva@email.com"
              />
            </View>

            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Whatsapp</Text>
              <TextInput
                style={styles.signUpInputs}
                placeholder="(99) 99999-9999"
              />
            </View>

            <View style={styles.signUpFieldContainer}>
              <Text style={styles.signUpTxt}>Senha</Text>
              <TextInput style={styles.signUpInputs} placeholder="********" />
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.btnSignUp} onPress={() => alert("ola")}>
        <Text style={styles.btnSignUpText}>Criar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
