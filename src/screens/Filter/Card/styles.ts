import { StyleSheet } from "react-native";

export default ({ colors }: { colors: any }) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.selectableItemBackground,
      borderRadius: 10,
      width: "45%",
      marginVertical: 8,
    },

    title: {
      marginHorizontal: 24,
      marginTop: 16,
      fontSize: 16,
      fontWeight: "500",
      color: colors.text,
    },
    value: {
      marginHorizontal: 24,
      marginTop: 8,
      marginBottom: 16,
      fontSize: 14,
      fontWeight: "400",
      color: colors.text,
    },

    closeButton: {
      position: "absolute",
      top: 4,
      right: 4,
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      padding: 4,
    },
  });
