import React from "react";

import { SafeAreaView, ScrollView } from "react-native";

import { useTheme } from "../../hooks/useTheme";
import useStyles from "./styles";

export function Filters() {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
}
