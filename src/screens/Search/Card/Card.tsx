import React from "react";

import { ActivityIndicator, Text, View } from "react-native";

import { useTheme } from "../../../hooks/useTheme";
import useStyles from "./styles";

export function Card({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {!!value && <Text style={styles.value}>{value}</Text>}
      {!value && <ActivityIndicator style={styles.value} />}
    </View>
  );
}
