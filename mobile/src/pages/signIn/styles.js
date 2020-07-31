import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff5fa",
  },

  header: {
    flex: 0.5,
    justifyContent: "center",
  },

  containerLogin: {
    flex: 1,
    alignItems: "center",
    width: "90%",
  },

  input: {
    backgroundColor: "#fff",
    width: "90%",
    height: 50,
    marginBottom: 15,
    color: "#111",
    fontSize: 24,
    borderRadius: 7,
    padding: 10,
  },

  btnSubmit: {
    marginTop: 20,
    backgroundColor: "#ea638c",
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },

  btnSubmitText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  btnRegister: {
    marginTop: 5,
    padding: 15,
  },

  btnRegisterText: {
    color: "#ea638c",
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 3,
  },

  btnLocals: {
    backgroundColor: "#93a8ac",
    marginTop: 50,
    height: 45,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },

  btnLocalsText: {
    color: "#fff",
    fontSize: 20,
  },
});
