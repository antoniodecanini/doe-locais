import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff5fa",
    justifyContent: "space-between",
  },

  header: {
    marginTop: statusBarHeight + 15,
    justifyContent: "center",
    width: "90%",
  },

  btnBack: {
    justifyContent: "center",
  },

  iconBack: {
    fontSize: 30,
    color: "#ea638c",
    marginRight: 15,
  },

  txtHeader: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ea638c",
    textAlign: "center",
  },

  containerRecover: {
    alignItems: "center",
    width: "90%",
  },

  txtRecover: {
    fontSize: 24,
    color: "#555",
    textAlign: "left",
    width: "100%",
  },

  input: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    marginTop: 15,
    color: "#111",
    fontSize: 20,
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#C3C3C3",
  },

  btnSubmit: {
    marginTop: 30,
    backgroundColor: "#ea638c",
    width: "60%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  btnSubmitText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
  },

  signUpTxt: {
    color: "#555",
    fontSize: 18,
  },

  btnRegister: {},

  btnRegisterText: {
    color: "#ea638c",
    fontSize: 18,
    fontWeight: "bold",
  },
});
