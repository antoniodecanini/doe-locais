import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff5fa",
  },

  header: {
    marginTop: statusBarHeight + 10,
    width: "100%",
    alignItems: "center",
  },

  txtHeader: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ea638c",
    letterSpacing: 2,
  },

  signUp: {
    flex: 1,
    alignItems: "center",
    width: "95%",
    marginBottom: 50,
    marginTop: 30,
  },

  inputs: {
    width: "100%",
    height: 50,
    fontSize: 24,
    color: "#111",
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 7,
  },

  btnSignUp: {
    width: "90%",
    backgroundColor: "#ea638c",
    marginTop: 32,
    height: 45,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  btnSignUpText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
