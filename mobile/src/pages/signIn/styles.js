import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff5fa",
    justifyContent: "space-around",
  },

  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  containerLogin: {
    alignItems: "center",
    width: "90%",
  },

  input: {
    backgroundColor: "#fff",
    width: "90%",
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

  vwForgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    padding: 8,
  },

  btnForgotPassword: {},

  btnForgotPasswordText: {
    fontSize: 18,
    color: "#555",
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
    marginTop: 15,
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

  btnLocals: {
    backgroundColor: "#ea638c",
    marginTop: 50,
    height: 45,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flexDirection: "row",
  },

  btnLocalIcon: {
    fontSize: 20,
    color: "#fff",
  },

  btnLocalsText: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 5,
  },
});
