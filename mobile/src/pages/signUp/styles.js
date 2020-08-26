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

  signUpFirst: {
    width: "90%",
  },

  header: {
    marginTop: statusBarHeight + 15,
    justifyContent: "flex-start",
    width: "90%",
    flexDirection: "row",
    marginBottom: 10,
  },

  btnBack: {
    justifyContent: "center",
    marginRight: "17%",
  },

  iconBack: {
    fontSize: 30,
    color: "#ea638c",
  },

  txtHeader: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ea638c",
    textAlign: "center",
  },

  signUpContainer: {
    marginTop: 10,
  },

  signUpFieldContainer: {
    marginBottom: 10,
    width: "100%",
  },

  signUpTxt: {
    color: "#ea638c",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 2,
  },

  signUpInputs: {
    // width: "100%",
    height: 50,
    fontSize: 20,
    color: "#111",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 7,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#C3C3C3",
    shadowColor: "#555",
    shadowOffset: {
      width: 3,
      height: 0.7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  btnSignUp: {
    width: "75%",
    backgroundColor: "#ea638c",
    height: 45,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  btnSignUpText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
