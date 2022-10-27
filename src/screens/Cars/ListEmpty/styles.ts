import { StyleSheet } from "react-native";

import { ColorID } from "../../../styles/colors";

export default ({ colors }: { colors: Record<ColorID, string> }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      margin: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: "500",
      textAlign: "center",
      margin: 8,
    },
    button: {
      alignSelf: "center",
      backgroundColor: colors.buttonBackground,
      marginHorizontal: 8,
      marginVertical: 16,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
      width: "60%",
    },
    buttonText: {
      color: colors.buttonText,
      textAlign: "center",
    },
  });
