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
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
  },

  btnAccount: {
    width: 30,
    height: 30,
    backgroundColor: "#ea638c",
    borderRadius: 100,
    alignSelf: "flex-start",
    justifyContent: "center",
  },

  iconUser: {
    fontSize: 23,
    color: "#fff",
    textAlign: "center",
  },

  txtHeader: {
    color: "#ea638c",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "20%",
  },

  signUpFirst: {
    width: "90%",
    marginTop: 30,
  },

  signUpFieldContainer: {
    marginBottom: 10,
  },

  signUpTxt: {
    color: "#ea638c",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 2,
  },

  signUpInputs: {
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
    marginTop: 20,
  },

  btnSignUpText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
