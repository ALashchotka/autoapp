import { StyleSheet } from "react-native";

import { ColorID } from "../../styles/colors";

export default ({ colors }: { colors: Record<ColorID, string> }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.screenBackground,
    },

    filterContainer: {
      margin: 16,
    },
    title: {
      fontSize: 16,
      fontWeight: "500",
      color: colors.text,
    },
    itemsContainer: {
      flexDirection: "row",
    },
    itemContainer: {
      marginHorizontal: 8,
      marginVertical: 16,
      backgroundColor: colors.selectableItemBackground,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    itemContainerSelected: {
      backgroundColor: colors.selectableItemSelectedBackground,
    },
    itemText: {
      color: colors.selectableItemText,
    },
    itemTextSelected: {
      color: colors.selectableItemSelectedText,
    },

    button: {
      position: "absolute",
      bottom: 16,
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
