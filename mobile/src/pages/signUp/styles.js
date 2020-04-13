import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  header: {
    marginTop: statusBarHeight + 10,
  },

  signUp: {
    flex: 1,
    marginTop: 15,
    width: '90%',
    marginBottom: 50,
  },

  inputs: {
    width: '90%',
    height: 48,
    fontSize: 32,
    marginTop: 24,
    color: "#6b717e",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#93a8ac"
  },

  btnSignUp: {
    width: '90%',
    backgroundColor: '#f8bdc4',
    marginTop: 32,
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnSignUpText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },

  btnReturn: {
    width: '90%',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnReturnText: {
    fontSize: 24,
    padding: 8,
  }
})
