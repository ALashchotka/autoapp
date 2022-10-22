import React from "react";

import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useTheme } from "../../hooks/useTheme";
import { useLink } from "./useLink";

const useStyles = ({ colors }: { colors: any }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
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
    textInput: {
      backgroundColor: colors.itemBackground,
      color: colors.text,
      marginVertical: 16,
      marginHorizontal: 24,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },

    button: {
      alignSelf: "center",
      backgroundColor: colors.primary,
      marginHorizontal: 8,
      marginVertical: 16,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    buttonText: {
      color: colors.text,
    },
  });

export function Filter({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  const { cars, data, link, setLink } = useLink();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Ссылка autoplius:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ссылка"
          onChangeText={setLink}
          value={link}
        />

        {!!data && (
          <>
            <Text style={styles.title}>Марка</Text>
            <Text style={styles.value}>{data.brand}</Text>
            <Text style={styles.title}>Модель</Text>
            <Text style={styles.value}>{data.model}</Text>
            <Text style={styles.title}>Тип топлива</Text>
            <Text style={styles.value}>{data.fuel}</Text>
            <Text style={styles.title}>Объём</Text>
            <Text style={styles.value}>{data.volume}</Text>
            <Text style={styles.title}>Год выпуска</Text>
            <Text style={styles.value}>{data.year}</Text>
            <Text style={styles.title}>Кузов</Text>
            <Text style={styles.value}>{data.body}</Text>
          </>
        )}

        {!!cars && (
          <View>
            <Text style={styles.value}>
              Найдено {cars.length} машин удовлетворяющих условию:
            </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={() => {}}
            >
              <Text style={styles.buttonText}>просмотреть</Text>
            </TouchableOpacity>
          </View>
        )}

        {!cars && !!data && <ActivityIndicator color={colors.text} />}
      </ScrollView>
    </SafeAreaView>
  );
}
