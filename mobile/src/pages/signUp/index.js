import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import logoImg from '../../assets/logo.png'

export default function SignUp() {
  const navigation = useNavigation();

  function returnToSignIn() {
    navigation.navigate('SignIn')
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}></Image>
      </View>

      <View style={styles.signUp}>
        <TextInput style={styles.inputs}
          placeholder='Nome'
        />

          <TextInput style={styles.inputs}
          placeholder='Sobrenome'
        />

        <TextInput style={styles.inputs}
          placeholder='Email'
        />

        <TextInput style={styles.inputs}
          placeholder='Whatsapp'
        />

        <TextInput style={styles.inputs}
          placeholder='Senha'
        />

        <TouchableOpacity style={styles.btnSignUp}
          onPress={() => alert('ola')}>
          <Text style={styles.btnSignUpText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnReturn}
          onPress={returnToSignIn}>
          <Text style={styles.btnReturnText}>Já possuo cadastro!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}