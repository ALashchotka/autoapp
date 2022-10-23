import React from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useTheme } from "../../hooks/useTheme";
import { useLink } from "./useLink";

const useStyles = ({ colors }: { colors: any }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.screenBackground,
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
    textInputContainer: {
      justifyContent: "center",
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
    textInputClearButton: {
      position: "absolute",
      right: 32,
    },

    button: {
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

export function Filter({ navigation }: { navigation: any }) {
  const { colors } = useTheme();
  const styles = useStyles({ colors });

  const { carData, link, setLink } = useLink();

  const openCarsList = () => {
    navigation.navigate("Cars", carData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Ссылка autoplius:</Text>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Ссылка"
            placeholderTextColor={colors.textInputPlaceholder}
            onChangeText={setLink}
            value={link}
          />
          <TouchableOpacity
            style={styles.textInputClearButton}
            onPress={() => setLink("")}
            hitSlop={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            }}
          >
            <MaterialCommunityIcons
              name="close"
              color={colors.textInputText}
              size={18}
            />
          </TouchableOpacity>
        </View>

        {!!carData && (
          <>
            <Text style={styles.title}>Марка</Text>
            <Text style={styles.value}>{carData.brand}</Text>
            <Text style={styles.title}>Модель</Text>
            <Text style={styles.value}>{carData.model}</Text>
            <Text style={styles.title}>Тип топлива</Text>
            <Text style={styles.value}>{carData.fuel}</Text>
            <Text style={styles.title}>Объём</Text>
            <Text style={styles.value}>{carData.volume}</Text>
            <Text style={styles.title}>Год выпуска</Text>
            <Text style={styles.value}>{carData.year}</Text>
            <Text style={styles.title}>Кузов</Text>
            <Text style={styles.value}>{carData.body}</Text>

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={openCarsList}
            >
              <Text style={styles.buttonText}>
                Просмотреть объявления за последний месяц
              </Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
