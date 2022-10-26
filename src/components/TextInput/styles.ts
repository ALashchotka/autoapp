import { StyleSheet } from "react-native";

import { ColorID } from "../../styles/colors";

export default ({ colors }: { colors: Record<ColorID, string> }) =>
  StyleSheet.create({
    title: {
      marginHorizontal: 24,
      marginTop: 16,
      fontSize: 16,
      fontWeight: "500",
      color: colors.text,
    },
    textInput: {
      backgroundColor: colors.textInputBackground,
      color: colors.textInputText,
      marginVertical: 16,
      marginHorizontal: 24,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
  });
