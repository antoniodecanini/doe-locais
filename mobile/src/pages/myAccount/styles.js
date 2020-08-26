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

  content: {
    marginTop: 10,
    width: "90%",
  },
});
