import React from "react";

import { Text, View } from "react-native";

import { Car } from "../Types";
import useStyles from "./styles";

export function ListHeader({ cars }: { cars: Car[] }) {
  const styles = useStyles();

  const soldCarsCount = cars.filter(({ isDeleted }: Car) => isDeleted).length;

  if (!cars.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Всего: {cars.length}</Text>
      <Text style={styles.title}>Продано: {soldCarsCount}</Text>
    </View>
  );
}
