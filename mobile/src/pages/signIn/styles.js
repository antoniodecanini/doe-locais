import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#4c5760",
  },
  
  header: {
    flex: 0.5,
    justifyContent: 'center',
  },

  containerLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
  },

  input: {
    backgroundColor: '#fff',
    width: '90%',
    height: 50,
    marginBottom: 25,
    color: '#6b717e',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },

  btnSubmit: {
    marginTop: 10,
    backgroundColor: '#ea638c',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  btnSubmitText: {
    color: '#fff',
    fontSize: 20,
  },

  btnRegister: {
    marginTop: 50,
    padding: 15,
  },
  
  btnRegisterText: {
    color: '#fff',
    fontSize: 20,
  },

  btnLocals: {
    backgroundColor: '#93a8ac',
    marginTop: 35,
    height: 45,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },

  btnLocalsText: {
    color: '#fff',
    fontSize: 20,
  }
})