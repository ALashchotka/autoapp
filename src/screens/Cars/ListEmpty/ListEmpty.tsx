import React from "react";

import { Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "../../../hooks/useTheme";
import useStyles from "./styles";

export function ListEmpty({ onFiltersPress }: { onFiltersPress: () => void }) {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Поиск не дал результатов</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={onFiltersPress}
      >
        <Text style={styles.buttonText}>Изменить фильтры поиска</Text>
      </TouchableOpacity>
    </View>
  );
}
