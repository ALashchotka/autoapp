import { StyleSheet } from "react-native";

import { ColorID } from "../../styles/colors";

export default ({ colors }: { colors: Record<ColorID, string> }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.screenBackground,
    },
    emptyList: {
      flex: 1,
    },
    emptyContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
