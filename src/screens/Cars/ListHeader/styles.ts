import { StyleSheet } from "react-native";

export default () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      margin: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: "500",
      textAlign: "center",
      margin: 8,
    },
  });
