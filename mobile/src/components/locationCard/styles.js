import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 4,
    flexDirection: "row",
    marginTop: 10,
  },

  locationImage: {
    width: 90,
    height: 90,
    borderRadius: 5,
    marginRight: 15,
  },

  locationInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },

  locationName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ea638c",
  },

  locationSize: {
    color: "#555",
    fontSize: 18,
    marginTop: 5,
  },

  contactBtn: {
    height: 30,
    marginBottom: 15,
    marginRight: 10,
    borderRadius: 5,
    paddingHorizontal: 5,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
});
