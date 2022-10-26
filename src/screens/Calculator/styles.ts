import { StyleSheet } from "react-native";

import { ColorID } from "../../styles/colors";

export default ({ colors }: { colors: Record<ColorID, string> }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.screenBackground,
    },
    trashButton: {
      marginRight: 16,
    },
    title: {
      marginHorizontal: 24,
      marginTop: 16,
      fontSize: 16,
      fontWeight: "500",
      color: colors.text,
    },
    itemsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 16,
    },
    itemContainer: {
      marginHorizontal: 8,
      marginVertical: 16,
      backgroundColor: colors.selectableItemBackground,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    itemSelected: {
      backgroundColor: colors.selectableItemSelectedBackground,
    },
    itemText: {
      color: colors.selectableItemText,
    },
    itemTextSelected: {
      color: colors.selectableItemSelectedText,
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
