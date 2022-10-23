import React from "react";

import { StyleSheet, View } from "react-native";

import { TextInput } from "../../../components";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export function Settings({
  settings,
  setSettings,
}: {
  settings: any;
  setSettings: any;
}) {
  const onYearFromChange = (yearFrom: string) =>
    setSettings((prevState: any) => ({
      ...prevState,
      yearFrom: parseInt(yearFrom, 10),
    }));

  const onYearToChange = (yearTo: string) =>
    setSettings((prevState: any) => ({
      ...prevState,
      yearTo: parseInt(yearTo, 10),
    }));

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onYearFromChange}
        title="Год от:"
        value={`${settings.yearFrom}`}
        keyboardType="number-pad"
      />

      <TextInput
        onChangeText={onYearToChange}
        title="Год до:"
        value={`${settings.yearTo}`}
        keyboardType="number-pad"
      />
    </View>
  );
}
