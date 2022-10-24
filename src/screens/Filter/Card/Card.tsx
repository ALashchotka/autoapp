import React from "react";

import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { useTheme } from "../../../hooks/useTheme";

const useStyles = ({ colors }: { colors: any }) =>
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
