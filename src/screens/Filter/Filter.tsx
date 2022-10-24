import React, { useState } from "react";

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
import { Card } from "./Card/Card";
import { SiteParser } from "./SiteParser/SiteParser";
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

    dataContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginHorizontal: 24,
    },
    dataItemContainer: {
      backgroundColor: colors.selectableItemBackground,
      borderRadius: 10,
      width: "45%",
      marginVertical: 8,
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

  const { link, onLinkChange } = useLink();
  const [carData, setCarData] = useState<object | null>(null);

  const openCarsList = () => {
    navigation.navigate("Cars", carData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SiteParser link={link} setCarData={setCarData} />

        <Text style={styles.title}>Ссылка autoplius:</Text>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Ссылка"
            placeholderTextColor={colors.textInputPlaceholder}
            onChangeText={onLinkChange}
            value={link}
          />
          <TouchableOpacity
            style={styles.textInputClearButton}
            onPress={() => onLinkChange("")}
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
            <View style={styles.dataContainer}>
              <Card title="Марка" value={carData.title} />
              <Card title="Тип топлива" value={carData.fuel} />
              <Card title="Объём" value={carData.capacity} />
              <Card title="Год выпуска" value={carData.date} />
              <Card title="Кузов" value={carData.body} />
              <Card title="Коробка" value={carData.gear} />
              <Card title="Цена" value={carData.price} />
              <Card title="Итого" value={carData.totalPrice} />
            </View>

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

        {!link && (
          <>
            <Text style={styles.title}>Не работает с:</Text>
            <Text style={[styles.value, { marginBottom: 0 }]}>
              - Alfa Romeo, Land Rover, Volvo
            </Text>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
